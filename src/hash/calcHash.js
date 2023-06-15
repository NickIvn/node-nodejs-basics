import * as fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {

  const file = 'fileToCalculateHashFor.txt';
  const folder = 'files';
  
  const directory = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(directory, folder, file);

  try {
    const fileData = await fs.promises.readFile(filePath);
    const hash = crypto.createHash('sha256').update(fileData).digest('hex');
    console.log(hash);
  } catch (error) {
    console.error('Failed to calculate hash');
  }
};

await calculateHash();
