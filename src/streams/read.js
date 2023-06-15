import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const file = 'fileToRead.txt';
    const folder = 'files'

    const directory = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(directory, folder, file);
  
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
