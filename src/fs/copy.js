import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const copy = async () => {
    const source = 'files';
    const target = 'files_copy';

    const copyFilePath = fileURLToPath(import.meta.url);
    const directory = path.dirname(copyFilePath);
    const sourcePath = path.join(directory, source);
    const targetPath = path.join(directory, target);
  
    try {
        await fs.promises.access(targetPath)
        throw new Error('FS operation failed');
    } catch {
        try {
            await fs.promises.access(sourcePath);
            await fs.promises.mkdir(targetPath);
            const files = await fs.promises.readdir(sourcePath);

        for (const file of files) {
          const sourceFile = path.join(sourcePath, file);
          const targetFile = path.join(targetPath, file);
          fs.promises.copyFile(sourceFile, targetFile);
        }
        console.log('Files copied successfully!');
        } catch (error) {
            console.error ('FS operation failed');
        }
    }
};

await copy();
