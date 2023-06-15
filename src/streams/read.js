import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const file = 'fileToRead.txt';
    const dir = 'files'

    const readFilePath = fileURLToPath(import.meta.url);
    const directory = path.dirname(readFilePath);
    const filePath = path.join(directory, dir, file);
  
  try {
    const readableStream = fs.createReadStream(filePath);
    
    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
    
    readableStream.on('end', () => {
      console.log('\nReading completed');
    });
  } catch (error) {
    console.error('Failed to read file');
  }
};

await read();
