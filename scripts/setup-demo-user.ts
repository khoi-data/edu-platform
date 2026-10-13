import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

// Read .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf-8')
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      let value = match[2].trim()
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }
      process.env[key] = value
    }
  })
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

async function setup() {
  const email = 'demo@eduverse.app'
  const password = 'demo123'

  console.log('Checking if demo user exists...')
  
  // Try to create the user
  const { data: userData, error: createError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      display_name: 'Khách Trải Nghiệm',
      grade: 3 // Must be single int for trigger to not crash!
    }
  })

  let userId = userData?.user?.id

  if (createError) {
    if (createError.message.includes('already exists')) {
      console.log('User already exists, fetching ID...')
      const { data: listData } = await supabase.auth.admin.listUsers()
      const existingUser = listData.users.find(u => u.email === email)
      if (existingUser) {
        userId = existingUser.id
        await supabase.auth.admin.updateUserById(userId, {
          user_metadata: { display_name: 'Khách Trải Nghiệm', grade: 3 },
          password
        })
      }
    } else {
      console.error('Error creating user:', createError)
      return
    }
  }

  if (userId) {
    console.log('User ID:', userId)
    // Update profile's multi-grade array directly in DB
    const { error: profileError } = await supabase.from('profiles').update({
      display_name: 'Khách Trải Nghiệm',
      grades: '{3,7}', // Both 3 and 7
      role: 'student'
    }).eq('id', userId)

    if (profileError) {
      console.error('Error updating profile grades:', profileError)
    } else {
      console.log('Demo user setup complete!')
    }
  }
}

setup()
