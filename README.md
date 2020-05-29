# nativescript-three


[![npm](https://img.shields.io/npm/v/nativescript-three.svg)](https://www.npmjs.com/package/nativescript-three)
[![npm](https://img.shields.io/npm/dt/nativescript-three.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-three)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-three.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-three)

## Installation

```bash
npm i three nativescript-three
```

## Usage

```js
import TNSTHREE from 'nativescript-three';
```

## Creating a Renderer

#### `TNSTHREE.Renderer({ gl: WebGLRenderingContext, width: number, height: number, pixelRatio: number, ...extras })`

Given a `gl (context)` from an
[`TNSCanvas`](https://github.com/triniwiz/nativescript-canvas-plugin), return a
[`THREE.WebGLRenderer`](https://threejs.org/docs/#api/renderers/WebGLRenderer)
that draws into it.

```ts
import { Renderer } from 'nativescript-three';

var camera, scene, renderer;
var geometry, material, mesh;

canvas; // TNSCanvas instance
init();
animate();

function init() {
  const gl = canvas.getContext('webgl');
  // We have access to window.innerWidth / window.innerHeight but we want the current view size
  const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
  camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new TNSTHREE.Renderer({ gl });
  renderer.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);

  canvas.flush(); // very important, call when you need to render to screen.
}
```

## E.G Output

![Output](ss/three-cube.gif?raw=true)

## E.G Output

## License

Apache License Version 2.0, January 2004
