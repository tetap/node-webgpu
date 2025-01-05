import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const dawnNodePath = join(__dirname, `${process.platform}-${process.arch}.node`);
const { create, globals } = require(dawnNodePath);
export { create, globals }
