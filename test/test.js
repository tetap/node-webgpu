import Mocha from 'mocha';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const isDev = process.argv[2] !== 'dev';
const isWin = process.platform === 'win32';
const dawnNodePath = isDev
  ? isWin
    ? `${process.cwd()}/third_party/dawn/out/cmake-release/Debug/dawn.node`
    : `${process.cwd()}/third_party/dawn/out/cmake-release/dawn.node`
  : `${process.cwd()}/dist/${process.platform}-${process.arch}.node`;

const { create, globals } = require(dawnNodePath);

Object.assign(globalThis, globals);
globalThis.navigator = { gpu: create([]) };

const mocha = new Mocha({});

mocha.addFile('./test/tests/basic-tests.js');

await mocha.loadFilesAsync();
mocha.run(failures => {
  process.exit(failures);
});
