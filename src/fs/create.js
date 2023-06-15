import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const file = 'fresh.txt';
  const folder = 'files';
  const content = 'I am fresh and young';

  const directory = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(directory, folder, file);

  try {
    await fs.promises.writeFile(filePath, content, { flag: 'wx' });
    console.log('File created');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await create();