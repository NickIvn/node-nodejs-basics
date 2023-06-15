import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const file = 'fileToWrite.txt';
    const dir = 'files'

    const writeFilePath = fileURLToPath(import.meta.url);
    const directory = path.dirname(writeFilePath);
    const filePath = path.join(directory, dir, file);
    
    try {
        const writableStream = fs.createWriteStream(filePath);
    
        process.stdin.on('data', (data) => {
          writableStream.write(data);
        });
    
        process.stdin.on('end', () => {
          writableStream.end();
          console.log('Writing completed');
        });
      } catch (error) {
        console.error('Failed to write file');
      }
    };
    

await write();