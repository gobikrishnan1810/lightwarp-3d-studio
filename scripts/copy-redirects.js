import fs from 'fs/promises';
import path from 'path';

const from = path.join(process.cwd(), 'public', '_redirects');
const toDir = path.join(process.cwd(), 'dist');
const to = path.join(toDir, '_redirects');

async function main() {
  try {
    await fs.mkdir(toDir, { recursive: true });
    await fs.copyFile(from, to);
    console.log('Copied public/_redirects → dist/_redirects');
  } catch (err) {
    console.warn('No public/_redirects to copy or copy failed:', err.message);
  }
}

main();
