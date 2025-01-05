

import {execute} from './execute.js';
import * as github from './github.js';

const owner = 'greggman';
const repo = 'node-webgpu';

function executeL(cmd, args) {
  console.log(cmd, args.join(' '));
  execute(cmd, args);
}

async function main() {
  const data = await github.getLatestRelease({
    owner,
    repo,
  });
  executeL('./node_modules/.bin/vsce', ['publish', '--packagePath', ...vsixFilenames]);
}

main();