import { extractLesson } from './extract-toan3-sbt-bai';
import { migrateBai } from './migrate-toan3-sbt-to-db';
import { TOAN3_SBT_TAP2_TOC } from '../lib/curriculum/toan3-sbt-tap2-toc';

async function batchProcess(startBai: number, endBai: number) {
  console.log(`\n======================================================`);
  console.log(`BATCH PROCESSING TOÁN 3 SBT TẬP 2: Bài ${startBai} -> Bài ${endBai}`);
  console.log(`======================================================\n`);

  const results: Array<{ bai: number; success: boolean; error?: string }> = [];

  for (let bai = startBai; bai <= endBai; bai++) {
    const lessonInfo = TOAN3_SBT_TAP2_TOC.find(l => l.bai === bai);
    if (!lessonInfo) {
      console.warn(`Skipping unknown Bai ${bai}`);
      continue;
    }

    console.log(`\n>>> STARTING BÀI ${bai}: ${lessonInfo.title} <<<`);
    try {
      // 1. Extract from PDF
      await extractLesson(bai);

      // 2. Migrate to DB
      const migrated = await migrateBai(bai);
      if (!migrated) {
        throw new Error('Migration step failed');
      }

      results.push({ bai, success: true });
      console.log(`>>> FINISHED BÀI ${bai} SUCCESSFULLY <<<\n`);
    } catch (err: any) {
      console.error(`❌ FAILED BÀI ${bai}:`, err.message);
      results.push({ bai, success: false, error: err.message });
    }

    // Small delay between calls
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n================ SUMMARY ================`);
  console.table(results);
}

const args = process.argv.slice(2);
const start = parseInt(args[0] || '46', 10);
const end = parseInt(args[1] || '49', 10);

batchProcess(start, end).catch(console.error);
