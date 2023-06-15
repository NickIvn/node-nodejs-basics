import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const file = 'fileToWrite.txt';
    const folder = 'files'

    const directory = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(directory, folder, file);
    
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