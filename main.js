import readline from 'readline';
import fs from 'fs';

const moduleName = process.argv[2];

if (!moduleName) {
  const srcDir = new URL('./src/', import.meta.url);
  const available = fs
    .readdirSync(srcDir)
    .filter((f) => f.endsWith('.js'))
    .map((f) => f.replace('.js', ''));

  console.log('Usage: node main.js <module>');
  console.log(`\nAvailable modules: ${available.join(', ')}`);
  process.exit(1);
}

const modulePath = new URL(`./src/${moduleName}.js`, import.meta.url);

if (!fs.existsSync(modulePath)) {
  console.error(`Module "${moduleName}" not found at src/${moduleName}.js`);
  process.exit(1);
}

const mod = await import(modulePath);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question(`[${moduleName}] > `, (line) => {
    const trimmed = line.trim();

    if (trimmed === 'exit' || trimmed === 'quit') {
      rl.close();
      return;
    }

    const parts = trimmed.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    if (!command) {
      main();
      return;
    }

    if (typeof mod[command] !== 'function') {
      const cmds = Object.keys(mod).filter((k) => k !== 'default');
      console.log(
        `Unknown command: "${command}". Available: ${cmds.join(', ')}`
      );
    } else {
      const result = mod[command](...args);
      if (result !== undefined) {
        console.log(result);
      }
    }

    mainre();
  });
}

const cmds = Object.keys(mod).filter((k) => k !== 'default');
console.log(`Loaded module: ${moduleName}`);
console.log(`Commands: ${cmds.join(', ')}`);
console.log('Type "exit" to quit.\n');
main();
