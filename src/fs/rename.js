import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const file = 'wrongFilename.txt';
  const folder = 'files';
  const newFile = 'properFilename.md'

  const directory = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(directory, folder, file);
  const newFilePath = path.join(directory, folder, newFile);

  try {
      await fs.promises.access(newFilePath);
      console.log('FS operation failed');
    } catch (err) {
      try { 
        await fs.promises.access(filePath);
          fs.rename(filePath,newFilePath, () => {} );
          console.log('File renamed successfully');
    } catch (error) {
      console.error ('FS operation failed')
    }
  }
};

await rename();