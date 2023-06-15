const parseEnv = () => {
    const prefix = 'RSS_';

  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const value = process.env[key];
      const name = key.slice(prefix.length);
      console.log(`RSS_${name}=${value}`);
    }
  }
};

parseEnv();