import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const list = async () => {

    const dir = 'files';

    const listFilePath = fileURLToPath(import.meta.url);
    const folderDir = path.dirname(listFilePath);
    const folderPath = path.join(folderDir,dir);

    try {
        const items = await fs.promises.readdir(folderPath);
        console.log(items);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();