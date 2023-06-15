import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const list = async () => {

    const folder = 'files';

    const folderDir = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(folderDir,folder);

    try {
        const items = await fs.promises.readdir(folderPath);
        console.log(items);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();