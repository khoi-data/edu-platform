import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const envFile = fs.existsSync('.env.local') ? '.env.local' : '.env';
const envConfig = fs.readFileSync(envFile, 'utf-8')
  .split('\n')
  .filter(l => l.includes('='))
  .reduce((acc: any, line) => {
    const [key, ...val] = line.split('=');
    acc[key.trim()] = val.join('=').trim().replace(/^['"]|['"]$/g, '');
    return acc;
  }, {});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || envConfig.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || envConfig.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: cols, error: cErr } = await supabase
    .from('assessment_collections')
    .select('id, title, units')
    .eq('subject_slug', 'toan')
    .eq('grade', 3)
    .eq('volume', 2)
    .order('units', { ascending: true });

  if (cErr) {
    console.error('Error fetching cols:', cErr);
    return;
  }

  console.log(`Found ${cols?.length || 0} collections in DB:`);
  for (const c of cols || []) {
    const { count: examCount, data: exams } = await supabase
      .from('exams')
      .select('id, title', { count: 'exact' })
      .eq('collection_id', c.id);

    let totalQ = 0;
    if (exams && exams.length > 0) {
      const { count: qCount } = await supabase
        .from('exam_questions')
        .select('id', { count: 'exact', head: true })
        .eq('exam_id', exams[0].id);
      totalQ = qCount || 0;
    }
    console.log(`- Units [${c.units?.join(',')}] | "${c.title}" | examQuestions: ${totalQ}`);
  }
}

main().catch(console.error);
