import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';


const compress = async () => {
    const inputFile= 'fileToCompress.txt';
    const outputFile = 'archive.gz';
    const dir = 'files';

    const compressFilePath = fileURLToPath(import.meta.url);
    const directory = path.dirname(compressFilePath);
    const inputFilePath = path.join(directory, dir, inputFile);
    const outputFilePath = path.join(directory, dir, outputFile);
  
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
  
    const gzipStream = zlib.createGzip();
  
    readStream.pipe(gzipStream).pipe(writeStream);
  
    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });};

await compress();