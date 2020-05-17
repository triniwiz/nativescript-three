import THREE from './Three';

type IRenderer = THREE.WebGLRendererParameters & {
    gl: WebGLRenderingContext;
    canvas?: HTMLCanvasElement;
    pixelRatio?: number;
    clearColor?: THREE.Color | string | number;
    width?: number;
    height?: number;
  };

export default class Renderer extends THREE.WebGLRenderer {
  constructor({
    gl: context,
    canvas,
    pixelRatio = 1,
    clearColor,
    width,
    height,
  }: IRenderer) {
    const inputCanvas =
      canvas ||
      ({
        width: width || context.drawingBufferWidth,
        height: height || context.drawingBufferHeight,
        style: {},
        addEventListener: (() => {}) as any,
        removeEventListener: (() => {}) as any,
        clientHeight: width || context.drawingBufferHeight,
        clientWidth: height || context.drawingBufferWidth,
      } as HTMLCanvasElement);

    super({
      canvas: inputCanvas,
      context
    });

    this.setPixelRatio(pixelRatio);

    if (width && height) {
      this.setSize(width, height);
    }
    if (clearColor) {
      // @ts-ignore: Type 'string' is not assignable to type 'number'.ts(2345)
      this.setClearColor(clearColor);
    }
  }
}


