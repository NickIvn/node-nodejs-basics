import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const file = 'fileToRead.txt';
  const folder = 'files';

  const directory = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(directory, folder, file);

  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
      console.error('FS operation failed');
    }
  };

await read();