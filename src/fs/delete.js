import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const file = 'fileToRemove.txt';
  const folder = 'files';

  const directory = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(directory,folder,file);

  try {
    await fs.promises.unlink(filePath);
    console.log('File deleted');
  } catch (error) {
    console.error('FS operation failed');
  }
};

await remove();
