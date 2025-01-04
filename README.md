# webgpu - dawn.node bundler.

This is a script to bundle/package dawn.node and hopefully publish it on npm

[Dawn](https://dawn.googlesource.com/dawn) is an implementation of [WebGPU](https://gpuweb.github.io/gpuweb/).
It includes a node plugin and this repo builds that plugin.

# Usage

TDB

Note: This package provides a WebGPU implementation it node. That said, if you are making a webpage
and are considering using this for testing, you'd probably be better off using puppeteer. You can
find an example of using puppeteer for testing WebGPU in [this repo](https://github.com/greggman/webgpu-debug-helper).

This package is for WebGPU in node. It provides WebGPU in node. But it doesn't not provide integration
with the web platform. For example, importing video via `HTMLVideoElement` or `VideoFrame`. It doesn't
provide a way to copy an `HTMLImageElement` to a texture. It also doesn't provide a way to render to an
`HTMLCanvasElement`. All of those only exist in the browser, not in node.

I suspect you could provide many of those with polyfills without changing this repo but I have not
looked into it.

What you can do is render to textures and then read them back. You can also run compute shaders
and read their results.

# Updating

This updates to the latest dawn and depot_tools

```sh
npm ci
npm run update
```

# Publishing

To publish

1. Bump the package version and tag.

   The easiest way is `npm version patch`

2. Push the patch 

   ```sh
   git push --tag origin main
   ```

3. Wait for github actions to successfully build all the versions

4. Run `npm run publish`

   This will download the files from the latest release to the `dist` folder
   and then publish them.

   ```sh
   npm run login <your-publisher-id>
   ```

   Then run `npm run publish`

# Building on all supported platforms

Push a new version. Check the github actions. You should see build artifacts
added to the bottom of the latest action run. 

# Building

This builds for the local OS (win64,macOS-intel,macOS-arm,linux)

```sh
npm ci
npm run build
```

## Prerequisites

### Windows

Before running the build script above you must have
Visual Studio C++ installed and have run the `vcvars64.bat` file.
I've tested with Visual Studio Community Edition 2022

Further you must have [cmake installed](https://cmake.org/download/)
and either in your path or at it's standard place of `C:\Program Files\CMake`

And you must have `node.js` installed, at least version 18. 
I recommend using [nvm-windows](https://github.com/coreybutler/nvm-windows) to install it
as it makes it easy to switch version

### MacOS

Before running the build script above you must have
XCode installed and its command line tools

Further you must have [cmake installed](https://cmake.org/download/)
and either in your path or at it's standard place of `/Applications/CMake.app`

And you must have `node.js` installed, at least version 18. 
I recommend using [nvm](https://github.com/nvm-sh/nvm) to install it
as it makes it easy to switch versions.

### Linux (Ubuntu)

Before running the build script above you need to install
the following dependencies

```sh
sudo apt-get install cmake
```

And you must have `node.js` installed, at least version 18. 
I recommend using [nvm](https://github.com/nvm-sh/nvm) to install it
as it makes it easy to switch versions.
