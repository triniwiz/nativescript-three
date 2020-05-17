declare var global: any;
import * as THREE from 'three';
(global as any).THREE =  global.window.THREE = global.THREE || THREE;
export default THREE;
