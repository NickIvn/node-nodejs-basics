import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const file = 'wrongFilename.txt';
  const dir = 'files';
  const newFile = 'properFilename.md'

  const renameFilePath = fileURLToPath(import.meta.url);
  const directory = path.dirname(renameFilePath);
  const filePath = path.join(directory, dir, file);
  const newFilePath = path.join(directory, dir, newFile);

  try {
      await fs.promises.access(newFilePath);
      console.log('FS operation failed');
    } catch {
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