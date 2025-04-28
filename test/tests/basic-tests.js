
import { assert } from 'chai';

describe('basic tests', () => {
  it('creates a device', async () => {
    const device = await(await navigator.gpu.requestAdapter()).requestDevice();
    assert(!!device, 'got device');
    assert(!!device.limits, 'have limits');
    assert(device.limits.maxBindGroups > 0, 'have maxBindGroups');
    device.destroy();
  });

  /* MAINTENANCE_TODO: enable ths test once dawn.node handles this
  it('can attach a uncapturederror listener', async () => {
    const device = await(await navigator.gpu.requestAdapter()).requestDevice();
    assert(!!device, 'got device');
    const { promise, resolve, reject } = Promise.withResolvers();
    device.addEventListener('uncapturederror', (e) => {
      resolve(e);
    });
    const tex = device.createTexture({
      size: [999999999, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING,
    });
    const err = await promise;
    assert(err instanceof GPUValidationError)
    tex.destroy();
    device.destroy();
  });
  */
});

