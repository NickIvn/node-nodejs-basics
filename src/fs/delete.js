import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const file = 'fileToRemove.txt';
  const dir = 'files';

  const removeFilePath = fileURLToPath(import.meta.url);
  const directory = path.dirname(removeFilePath);
  const filePath = path.join(directory,dir,file);

  try {
    await fs.promises.unlink(filePath);
    console.log('File deleted');
  } catch (error) {
    console.error('FS operation failed');
  }
};

await remove();
