import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';


const performCalculations = async () => {
    const worker = 'worker.js';
    const dir = path.dirname(fileURLToPath(import.meta.url));
    const workerPath = path.join(dir, worker);


  const numWorkers = cpus().length;
  const workerPromises = [];

  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(workerPath, { workerData: { number: i + 10 } });
    const promise = new Promise((resolve, reject) => {
      worker.on('message', (message) => {
        resolve(message);
      });

      worker.on('error', (error) => {
        reject(error);
      });
    });

    workerPromises.push(promise);
  }

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
