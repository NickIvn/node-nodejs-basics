import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';


const spawnChildProcess = async (args) => {
    const file = 'script.js';
    const folder = 'files';
    
    const dir = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(dir, folder, file);

  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
  });

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });

  process.stdin.on('end', () => {
    childProcess.stdin.end();
  });

  return new Promise((resolve, reject) => {
    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
};

spawnChildProcess(['first', 'second', 'third']);

