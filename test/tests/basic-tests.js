import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { create, globals } = require(`${process.cwd()}/third_party/dawn/out/cmake-release/dawn.node`);

Object.assign(globalThis, globals);
const navigator = { gpu: create([]) };

function assert(cond, msg = '') {
  if (!cond) {
    throw Error(msg);
  }
}

describe('node-webgpu', () => {
  it('creates a device', async () => {
    const device = await(await navigator.gpu.requestAdapter()).requestDevice();
    assert(!!device, 'got device');
    assert(!!device.limits, 'have limits');
    assert(device.limits.maxBindGroups > 0, 'have maxBindGroups');
    device.destroy();
  });
});

