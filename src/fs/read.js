import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const file = 'fileToRead.txt';
  const dir = 'files';

  const readFilePath = fileURLToPath(import.meta.url);
  const directory = path.dirname(readFilePath);
  const filePath = path.join(directory, dir, file);

  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
      console.error('FS operation failed');
    }
  };

await read();