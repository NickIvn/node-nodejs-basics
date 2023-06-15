import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const file = 'fresh.txt';
  const dir = 'files';
  const content = 'I am fresh and young';

  const createFilePath = fileURLToPath(import.meta.url);
  const directory = path.dirname(createFilePath);
  const filePath = path.join(directory, dir, file);

  try {
    await fs.promises.writeFile(filePath, content, { flag: 'wx' });
    console.log('File created');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await create();