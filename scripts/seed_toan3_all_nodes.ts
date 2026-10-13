import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { TOAN3_TAP1_BOOK_LESSONS } from '../lib/curriculum/toan3-tap1'
import { TOAN3_TAP2_BOOK_LESSONS } from '../lib/curriculum/toan3-tap2'

const envPath = path.resolve(process.cwd(), '.env.local')
const envConfig = fs.readFileSync(envPath, 'utf-8')
const envVars: Record<string, string> = {}
envConfig.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/)
  if (match) {
    const key = match[1].trim()
    let value = match[2].trim()
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }
    envVars[key] = value
  }
})

const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

const SOURCE_ID = '0c15a948-5b65-491e-9936-4c894268c778'
const COURSE_ID = '8ff720dc-3bba-4c14-a7fe-38cb0ce7165c'

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function run() {
  console.log('--- SEEDING ALL 81 TOAN 3 NODES TO SUPABASE ---')

  const allBookLessons = [...TOAN3_TAP1_BOOK_LESSONS, ...TOAN3_TAP2_BOOK_LESSONS]
  console.log(`Total lessons: ${allBookLessons.length}`)

  // 1. Group by Topic / Unit
  const unitsMap = new Map<string, { title: string; volume: number; lessons: typeof allBookLessons }>()
  for (const b of allBookLessons) {
    if (!unitsMap.has(b.topic_label)) {
      unitsMap.set(b.topic_label, {
        title: b.topic_label,
        volume: b.volume,
        lessons: []
      })
    }
    unitsMap.get(b.topic_label)!.lessons.push(b)
  }

  // 2. Fetch or Upsert Units
  const unitList = Array.from(unitsMap.values())
  console.log(`Total units: ${unitList.length}`)

  // Get existing units
  const { data: existingUnits } = await supabase
    .from('curriculum_nodes')
    .select('id, title, slug')
    .eq('source_id', SOURCE_ID)
    .eq('type', 'unit')

  const unitDbMap = new Map<string, string>() // topic_title -> unit_id

  for (let i = 0; i < unitList.length; i++) {
    const u = unitList[i]
    const unitSort = i + 1
    const unitSlug = slugify(u.title)
    const unitPath = `toan_3.${unitSlug.replace(/-/g, '_')}`

    const existing = existingUnits?.find(eu => eu.slug === unitSlug || eu.title === u.title)
    if (existing) {
      await supabase
        .from('curriculum_nodes')
        .update({
          title: u.title,
          sort_key: unitSort,
          path: unitPath,
          depth: 1,
          parent_id: COURSE_ID,
          metadata: { volume: u.volume }
        })
        .eq('id', existing.id)
      unitDbMap.set(u.title, existing.id)
    } else {
      const { data: inserted, error } = await supabase
        .from('curriculum_nodes')
        .insert({
          source_id: SOURCE_ID,
          parent_id: COURSE_ID,
          type: 'unit',
          title: u.title,
          slug: unitSlug,
          path: unitPath,
          depth: 1,
          sort_key: unitSort,
          metadata: { volume: u.volume }
        })
        .select('id')
        .single()

      if (error) {
        console.error(`Error inserting unit ${u.title}:`, error)
      } else if (inserted) {
        unitDbMap.set(u.title, inserted.id)
      }
    }
  }

  console.log(`Units processed: ${unitDbMap.size}/${unitList.length}`)

  // 3. Upsert Lessons
  const { data: existingLessons } = await supabase
    .from('curriculum_nodes')
    .select('id, title, slug')
    .eq('source_id', SOURCE_ID)
    .eq('type', 'lesson')

  let updatedCount = 0
  let insertedCount = 0

  for (let i = 0; i < allBookLessons.length; i++) {
    const l = allBookLessons[i]
    const unitId = unitDbMap.get(l.topic_label)
    if (!unitId) {
      console.error(`Missing unit ID for topic: ${l.topic_label}`)
      continue
    }

    const lessonSlug = `bai-${l.book_lesson_number}`
    const unitSlug = slugify(l.topic_label).replace(/-/g, '_')
    const lessonPath = `toan_3.${unitSlug}.bai_${l.book_lesson_number}`
    const lessonTitle = `Bài ${l.book_lesson_number}: ${l.title}`
    const lessonMetadata = {
      page: l.page,
      volume: l.volume,
      topic_label: l.topic_label,
      videos: l.videos,
      youtube_id: l.videos[0]?.youtube_id || null,
      practice: l.practice
    }

    const existing = existingLessons?.find(el => el.slug === lessonSlug)
    if (existing) {
      const { error } = await supabase
        .from('curriculum_nodes')
        .update({
          parent_id: unitId,
          title: lessonTitle,
          sort_key: l.book_lesson_number,
          path: lessonPath,
          depth: 2,
          metadata: lessonMetadata
        })
        .eq('id', existing.id)

      if (error) console.error(`Error updating lesson ${lessonSlug}:`, error)
      else updatedCount++
    } else {
      const { error } = await supabase
        .from('curriculum_nodes')
        .insert({
          source_id: SOURCE_ID,
          parent_id: unitId,
          type: 'lesson',
          title: lessonTitle,
          slug: lessonSlug,
          path: lessonPath,
          depth: 2,
          sort_key: l.book_lesson_number,
          metadata: lessonMetadata
        })

      if (error) console.error(`Error inserting lesson ${lessonSlug}:`, error)
      else insertedCount++
    }
  }

  console.log(`Lessons updated: ${updatedCount}, inserted: ${insertedCount}`)

  // Clean up any legacy misplaced node like 'phep-cong-pham-vi-1000'
  await supabase
    .from('curriculum_nodes')
    .delete()
    .eq('source_id', SOURCE_ID)
    .eq('slug', 'phep-cong-pham-vi-1000')

  // 4. CROSS-CHECK VERIFICATION DIRECTLY IN SUPABASE (Mandatory Rule #24)
  console.log('\n--- CROSS-CHECK VERIFICATION IN SUPABASE ---')
  const { data: verifyUnits } = await supabase
    .from('curriculum_nodes')
    .select('id, title, sort_key, metadata')
    .eq('source_id', SOURCE_ID)
    .eq('type', 'unit')
    .order('sort_key', { ascending: true })

  console.log(`Verified Units count: ${verifyUnits?.length}`)
  verifyUnits?.forEach(u => console.log(`  [Unit ${u.sort_key}] ${u.title} (vol:${u.metadata?.volume})`))

  const { data: verifyLessons } = await supabase
    .from('curriculum_nodes')
    .select('id, title, slug, sort_key, metadata')
    .eq('source_id', SOURCE_ID)
    .eq('type', 'lesson')
    .order('sort_key', { ascending: true })

  console.log(`\nVerified Lessons count: ${verifyLessons?.length}`)
  const missingVideos = verifyLessons?.filter(l => !l.metadata?.videos || l.metadata.videos.length === 0)
  console.log(`Lessons with missing videos: ${missingVideos?.length || 0}`)

  console.log('\nSample verified lessons:')
  // Tap 1 sample
  const b1 = verifyLessons?.find(l => l.slug === 'bai-1')
  const b2 = verifyLessons?.find(l => l.slug === 'bai-2')
  // Tap 2 sample
  const b45 = verifyLessons?.find(l => l.slug === 'bai-45')
  const b81 = verifyLessons?.find(l => l.slug === 'bai-81')

  console.log('Bài 1:', b1?.title, b1?.metadata?.videos)
  console.log('Bài 2:', b2?.title, b2?.metadata?.videos)
  console.log('Bài 45:', b45?.title, b45?.metadata?.videos)
  console.log('Bài 81:', b81?.title, b81?.metadata?.videos)
}

run()
