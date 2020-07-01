import { Renderer } from "nativescript-three";
import {
    WebGLRenderer,
    MeshNormalMaterial,
    Scene,
    PerspectiveCamera,
    Geometry,
    Vector3,
    LineBasicMaterial,
    Line,
    Color,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    TorusGeometry,
    MeshPhongMaterial,
    DodecahedronGeometry,
    MeshLambertMaterial,
    PointLight,
    Vector4,
    OrthographicCamera,
    AmbientLight,
    SpotLight,
    BoxBufferGeometry,
    BasicShadowMap,
    DirectionalLight,
    DirectionalLightHelper,
    PlaneBufferGeometry,
    MeshStandardMaterial,
    DoubleSide,
    CameraHelper,
    Vector2,
    TextureLoader,
    RepeatWrapping,
    CubeCamera,
    LinearMipmapLinearFilter,
    IcosahedronBufferGeometry,
    Float32BufferAttribute,
    Fog,
    Clock,
    HemisphereLight,
    GridHelper,
    sRGBEncoding,
    CubeTextureLoader,
    LinearFilter,
    ShaderMaterial,
    BufferGeometry,
    BufferAttribute,
    Points,
    Frustum,
    Matrix4,
    UnsignedByteType,
    ACESFilmicToneMapping,
    PMREMGenerator,
    MeshPhysicalMaterial,
    LoopOnce,
    AnimationMixer,
    LoopRepeat,
    CanvasTexture,
} from "three";

import * as THREE from "three";

let canvas;

import { NavigatedData, Page } from "@nativescript/core/ui/page";

import { HomeViewModel } from "./home-view-model";
import { Sky } from "../assets/jsm/objects/Sky";
import { Water } from "../assets/jsm/objects/Water";
import { OrbitControls } from "../assets/jsm/controls/OrbitControls";
import { FirstPersonControls } from "../assets/jsm/controls/FirstPersonControls";
import { GLTFLoader } from "../assets/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "../assets/jsm/loaders/DRACOLoader";
import { RGBELoader } from "../assets/jsm/loaders/RGBELoader";
import { TypedArrayUtils } from "../assets/jsm/utils/TypedArrayUtils";

import { VertexNormalsHelper } from "../assets/jsm/helpers/VertexNormalsHelper";
import { VertexTangentsHelper } from "../assets/jsm/helpers/VertexTangentsHelper";

import { BufferGeometryUtils } from "../assets/jsm/utils/BufferGeometryUtils";

import { FBXLoader } from "../assets/jsm/loaders/FBXLoader.js";

import { RoughnessMipmapper } from "../assets/jsm/utils/RoughnessMipmapper";
import { TDSLoader } from '../assets/jsm/loaders/TDSLoader';
//import { ThreeMFLoader } from '../assets/jsm/loaders/3MFLoader';
export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function pageLoaded(args) {
    const page = args.object;
}

class IconMesh extends Mesh {
    constructor() {
        super(new BoxBufferGeometry(5.0, 5.0, 5.0), new MeshNormalMaterial());
    }
}

declare var java;

export function loaded(args) {
    console.log("loaded", args.object);
}
export function unloaded(args) {
    console.log("unloaded");
}

export function canvasLoaded(args) {
    canvas = args.object;
      geoColors(canvas);
     //threeDepth(args);
    //threeCrate(args);
     //skinningAndMorphing(args);
    // nearestNeighbour(args);
    // threeOcean(args);
    //threeCube(args);
    //geoTextShapes(canvas);
    //webGLHelpers(canvas);
    //fbxLoader(canvas);
    // gtlfLoader(canvas);
    //rayCasting(canvas);
   // ThreeDS(canvas);
    // ThreeMF(canvas);
}
var root = "~/";



function ThreeMF(canvas) {
   /* var camera, scene, renderer;

    init();

    function init() {

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xa0a0a0);
        scene.fog = new THREE.Fog(0xa0a0a0, 10, 500);

        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(- 50, 40, 50);
        scene.add(camera);

        //

        var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 100, 0);
        scene.add(hemiLight);

        var dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(- 0, 40, 50);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 50;
        dirLight.shadow.camera.bottom = - 25;
        dirLight.shadow.camera.left = - 25;
        dirLight.shadow.camera.right = 25;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 200;
        dirLight.shadow.mapSize.set(1024, 1024);
        scene.add(dirLight);

        // scene.add( new CameraHelper( dirLight.shadow.camera ) );

        //

        var manager = new THREE.LoadingManager();

        var loader = new ThreeMFLoader(manager);
        loader.load('~/assets/models/3mf/truck.3mf', function (object) {

            object.quaternion.setFromEuler(new THREE.Euler(- Math.PI / 2, 0, 0)); 	// z-up conversion

            object.traverse(function (child) {

                child.castShadow = true;

            });

            scene.add(object);

        });

        //

        manager.onLoad = function () {

            render();

        };

        //

        var ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 1000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        ground.rotation.x = - Math.PI / 2;
        ground.position.y = 11;
        ground.receiveShadow = true;
        scene.add(ground);

        //

        const context = canvas.getContext('webgl');
        renderer = new THREE.WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;


        //

        window.addEventListener('resize', onWindowResize, false);

        render();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();

    }

    function render() {

        renderer.render(scene, camera);
        canvas.flush();

    }
    */
}
function ThreeDS(canvas) {

    var camera, scene, renderer;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10);
        camera.position.z = 2;

        scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight());

        var directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0, 0, 2);
        scene.add(directionalLight);

        //3ds files dont store normal maps
        var loader = new THREE.TextureLoader();
        var normal = loader.load('~/assets/models/3ds/portalgun/textures/normal.jpg');

        var loader = new TDSLoader();
        loader.setResourcePath('~/assets/models/3ds/portalgun/textures/');
        loader.load('~/assets/models/3ds/portalgun/portalgun.3ds', function (object: any) {

            object.traverse(function (child) {

                if (child.isMesh) {

                    child.material.normalMap = normal;

                }

            });

            scene.add(object);

        });
        const context = canvas.getContext('webgl');
        renderer = new THREE.WebGLRenderer({ context });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', resize, false);

    }

    function resize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {

        renderer.render(scene, camera);

        requestAnimationFrame(animate);

        canvas.flush();

    }
}
function rayCasting(canvas) {
    var renderer, scene, camera;
    var pointclouds;
    var raycaster;
    var mouse = new THREE.Vector2();
    var intersection = null;
    var spheres = [];
    var spheresIndex = 0;
    var clock;

    var threshold = 0.1;
    var pointSize = 0.05;
    var width = 80;
    var length = 160;
    var rotateY = new THREE.Matrix4().makeRotationY(0.005);

    init();
    animate();

    function generatePointCloudGeometry(color, width, length) {

        var geometry = new THREE.BufferGeometry();
        var numPoints = width * length;

        var positions = new Float32Array(numPoints * 3);
        var colors = new Float32Array(numPoints * 3);

        var k = 0;

        for (var i = 0; i < width; i++) {

            for (var j = 0; j < length; j++) {

                var u = i / width;
                var v = j / length;
                var x = u - 0.5;
                var y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
                var z = v - 0.5;

                positions[3 * k] = x;
                positions[3 * k + 1] = y;
                positions[3 * k + 2] = z;

                var intensity = (y + 0.1) * 5;
                colors[3 * k] = color.r * intensity;
                colors[3 * k + 1] = color.g * intensity;
                colors[3 * k + 2] = color.b * intensity;

                k++;

            }

        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.computeBoundingBox();

        return geometry;

    }

    function generatePointcloud(color, width, length) {

        var geometry = generatePointCloudGeometry(color, width, length);
        var material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });

        return new THREE.Points(geometry, material);

    }

    function generateIndexedPointcloud(color, width, length) {

        var geometry = generatePointCloudGeometry(color, width, length);
        var numPoints = width * length;
        var indices = new Uint16Array(numPoints);

        var k = 0;

        for (var i = 0; i < width; i++) {

            for (var j = 0; j < length; j++) {

                indices[k] = k;
                k++;

            }

        }

        geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        var material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });

        return new THREE.Points(geometry, material);

    }

    function generateIndexedWithOffsetPointcloud(color, width, length) {

        var geometry = generatePointCloudGeometry(color, width, length);
        var numPoints = width * length;
        var indices = new Uint16Array(numPoints);

        var k = 0;

        for (var i = 0; i < width; i++) {

            for (var j = 0; j < length; j++) {

                indices[k] = k;
                k++;

            }

        }

        geometry.setIndex(new THREE.BufferAttribute(indices, 1));
        geometry.addGroup(0, indices.length);

        var material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });

        return new THREE.Points(geometry, material);

    }

    function init() {

        var container = document.getElementById('container');

        scene = new THREE.Scene();

        clock = new THREE.Clock();

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(10, 10, 10);
        camera.lookAt(scene.position);
        camera.updateMatrix();

        //

        var pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), width, length);
        pcBuffer.scale.set(5, 10, 10);
        pcBuffer.position.set(- 5, 0, 0);
        scene.add(pcBuffer);

        var pcIndexed = generateIndexedPointcloud(new THREE.Color(0, 1, 0), width, length);
        pcIndexed.scale.set(5, 10, 10);
        pcIndexed.position.set(0, 0, 0);
        scene.add(pcIndexed);

        var pcIndexedOffset = generateIndexedWithOffsetPointcloud(new THREE.Color(0, 1, 1), width, length);
        pcIndexedOffset.scale.set(5, 10, 10);
        pcIndexedOffset.position.set(5, 0, 0);
        scene.add(pcIndexedOffset);

        pointclouds = [pcBuffer, pcIndexed, pcIndexedOffset];

        //

        var sphereGeometry = new THREE.SphereBufferGeometry(0.1, 32, 32);
        var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        for (var i = 0; i < 40; i++) {

            var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            scene.add(sphere);
            spheres.push(sphere);

        }

        //

        const context = canvas.getContext('webgl');
        renderer = new THREE.WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        //

        raycaster = new THREE.Raycaster();
        raycaster.params.Points.threshold = threshold;

        //

        //

        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', onDocumentMouseMove, false);

    }

    function onDocumentMouseMove(event) {

        event.preventDefault();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {

        requestAnimationFrame(animate);

        render();

    }

    var toggle = 0;

    function render() {

        camera.applyMatrix4(rotateY);
        camera.updateMatrixWorld();

        raycaster.setFromCamera(mouse, camera);

        var intersections = raycaster.intersectObjects(pointclouds);
        intersection = (intersections.length) > 0 ? intersections[0] : null;

        if (toggle > 0.02 && intersection !== null) {

            spheres[spheresIndex].position.copy(intersection.point);
            spheres[spheresIndex].scale.set(1, 1, 1);
            spheresIndex = (spheresIndex + 1) % spheres.length;

            toggle = 0;

        }

        for (var i = 0; i < spheres.length; i++) {

            var sphere = spheres[i];
            sphere.scale.multiplyScalar(0.98);
            sphere.scale.clampScalar(0.01, 1);

        }

        toggle += clock.getDelta();

        renderer.render(scene, camera);
        canvas.flush();

    }
}

function gtlfLoader(canvas) {
    var camera, scene, renderer;

    init();
    render();

    function init() {
        camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.25,
            20
        );
        camera.position.set(-1.8, 0.6, 2.7);

        scene = new THREE.Scene();

        new RGBELoader()
            .setDataType(THREE.UnsignedByteType)
            .setPath("~/assets/textures/equirectangular/")
            .load("royal_esplanade_1k.hdr", function (texture) {
                var envMap = pmremGenerator.fromEquirectangular(texture)
                    .texture;

                scene.background = envMap;
                scene.environment = envMap;

                texture.dispose();
                pmremGenerator.dispose();

                render();

                // model

                // use of RoughnessMipmapper is optional
                var roughnessMipmapper = new RoughnessMipmapper(renderer);

                var loader = new GLTFLoader().setPath(
                    "~/assets/models/gltf/DamagedHelmet/glTF/"
                );
                loader.load("DamagedHelmet.gltf", function (gltf) {
                    gltf.scene.traverse(function (child) {
                        if (child.isMesh) {
                            roughnessMipmapper.generateMipmaps(child.material);
                        }
                    });

                    scene.add(gltf.scene);

                    roughnessMipmapper.dispose();

                    render();
                });
            });

        const context = canvas.getContext("webgl");
        renderer = new THREE.WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.8;
        renderer.outputEncoding = THREE.sRGBEncoding;

        var pmremGenerator = new THREE.PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();
    }

    //

    function render() {
        renderer.render(scene, camera);
        canvas.flush();
    }
}

function fbxLoader(canvas) {
    var controls;
    var camera, scene, renderer, light;

    var clock = new THREE.Clock();

    var mixer;

    init();
    animate();

    function init() {
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );
        camera.position.set(100, 200, 300);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xa0a0a0);
        scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

        light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 200, 0);
        scene.add(light);

        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 200, 100);
        light.castShadow = true;
        light.shadow.camera.top = 180;
        light.shadow.camera.bottom = -100;
        light.shadow.camera.left = -120;
        light.shadow.camera.right = 120;
        scene.add(light);

        // scene.add( new CameraHelper( light.shadow.camera ) );

        // ground
        var mesh = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(2000, 2000),
            new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000) as any;
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        scene.add(grid);

        // model
        var loader = new FBXLoader();
        loader.load("~/assets/models/fbx/SambaDancing.fbx", function (object) {
            mixer = new THREE.AnimationMixer(object);

            var action = mixer.clipAction(object.animations[0]);
            action.play();

            object.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            scene.add(object);
        });

        const context = canvas.getContext("webgl");
        renderer = new THREE.WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;

        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 100, 0);
        controls.update();

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    function animate() {
        requestAnimationFrame(animate);

        var delta = clock.getDelta();

        if (mixer) mixer.update(delta);

        renderer.render(scene, camera);

        canvas.flush();
    }
}

function webGLHelpers(canvas) {
    var scene, renderer;
    var camera, light;
    var vnh;
    var vth;

    init();
    animate();

    function init() {
        const context = canvas.getContext("webgl");
        renderer = new THREE.WebGLRenderer({ context });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        //

        camera = new THREE.PerspectiveCamera(
            100,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 400;

        scene = new THREE.Scene();

        light = new THREE.PointLight();
        light.position.set(200, 100, 150);
        scene.add(light);

        scene.add(new THREE.PointLightHelper(light, 15));

        var gridHelper = new THREE.GridHelper(400, 40, 0x0000ff, 0x808080);
        gridHelper.position.y = -150;
        gridHelper.position.x = -150;
        scene.add(gridHelper);

        var polarGridHelper = new THREE.PolarGridHelper(
            200,
            16,
            8,
            64,
            0x0000ff,
            0x808080
        );
        polarGridHelper.position.y = -150;
        polarGridHelper.position.x = 200;
        scene.add(polarGridHelper);

        var loader = new GLTFLoader();
        loader.load(
            "~/assets/models/gltf/LeePerrySmith/LeePerrySmith.glb",
            function (gltf) {
                var mesh = gltf.scene.children[0];

                BufferGeometryUtils.computeTangents(mesh.geometry); // generates bad data due to degenerate UVs

                var group = new THREE.Group();
                group.scale.multiplyScalar(50);
                scene.add(group);

                // To make sure that the matrixWorld is up to date for the boxhelpers
                group.updateMatrixWorld(true);

                group.add(mesh);

                vnh = new VertexNormalsHelper(mesh, 5);
                scene.add(vnh);

                vth = new VertexTangentsHelper(mesh, 5);
                scene.add(vth);

                scene.add(new THREE.BoxHelper(mesh));

                var wireframe = new THREE.WireframeGeometry(mesh.geometry);
                var line = new THREE.LineSegments(wireframe) as any;
                line.material.depthTest = false;
                line.material.opacity = 0.25;
                line.material.transparent = true;
                line.position.x = 4;
                group.add(line);
                scene.add(new THREE.BoxHelper(line));

                var edges = new THREE.EdgesGeometry(mesh.geometry);
                var line = new THREE.LineSegments(edges) as any;
                line.material.depthTest = false;
                line.material.opacity = 0.25;
                line.material.transparent = true;
                line.position.x = -4;
                group.add(line);
                scene.add(new THREE.BoxHelper(line));

                scene.add(new THREE.BoxHelper(group));
                scene.add(new THREE.BoxHelper(scene));
            }
        );

        //

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        var time = -performance.now() * 0.0003;

        camera.position.x = 400 * Math.cos(time);
        camera.position.z = 400 * Math.sin(time);
        camera.lookAt(scene.position);

        light.position.x = Math.sin(time * 1.7) * 300;
        light.position.y = Math.cos(time * 1.5) * 400;
        light.position.z = Math.cos(time * 1.3) * 300;

        if (vnh) vnh.update();
        if (vth) vth.update();

        renderer.render(scene, camera);

        canvas.flush();
    }
}

function geoTextShapes(canvas) {
    var camera, scene, renderer;
    const context = canvas.getContext("webgl");
    init();
    animate();

    function init() {
        camera = new THREE.PerspectiveCamera(
            120,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.set(0, -400, 600);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        var loader = new THREE.FontLoader();
        loader.load(
            "~/assets/fonts/helvetiker_regular.typeface.json",
            function (font) {
                var xMid, text;

                var color = 0x006699;

                var matDark = new THREE.LineBasicMaterial({
                    color: color,
                    side: THREE.DoubleSide,
                });

                var matLite = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.4,
                    side: THREE.DoubleSide,
                });

                var message = "   Three.js\nSimple text.";

                var shapes = font.generateShapes(message, 100);

                var geometry = new THREE.ShapeBufferGeometry(shapes);

                geometry.computeBoundingBox();

                xMid =
                    -0.5 *
                    (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

                geometry.translate(xMid, 0, 0);

                // make shape ( N.B. edge view not visible )

                text = new THREE.Mesh(geometry, matLite);
                text.position.z = -150;
                scene.add(text);

                // make line shape ( N.B. edge view remains visible )

                var holeShapes = [];

                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i];

                    if (shape.holes && shape.holes.length > 0) {
                        for (var j = 0; j < shape.holes.length; j++) {
                            var hole = shape.holes[j];
                            holeShapes.push(hole);
                        }
                    }
                }

                shapes.push.apply(shapes, holeShapes);

                var lineText = new THREE.Object3D();

                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i];

                    var points = shape.getPoints();
                    var geometry = new THREE.BufferGeometry().setFromPoints(
                        points
                    );

                    geometry.translate(xMid, 0, 0);

                    var lineMesh = new THREE.Line(geometry, matDark);
                    lineText.add(lineMesh);
                }

                scene.add(lineText);
            }
        ); //end load function

        renderer = new THREE.WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        window.addEventListener("resize", onWindowResize, false);
    } // end init

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        render();
    }

    function render() {
        renderer.render(scene, camera);

        canvas.flush();
    }
}
function geoColors(args) {
    var camera, scene, renderer;

    var mouseX = 0,
        mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
        camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.z = 1800;

        scene = new Scene();
        scene.background = new Color(0xffffff);

        var light = new DirectionalLight(0xffffff);
        light.position.set(0, 0, 1);
        scene.add(light);

        // shadow

        var canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;

        var context = canvas.getContext("2d");
        var gradient = context.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2
        );
        gradient.addColorStop(0.1, "rgba(210,210,210,1)");
        gradient.addColorStop(1, "rgba(255,255,255,1)");

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        var shadowTexture = new CanvasTexture(canvas);

        var shadowMaterial = new MeshBasicMaterial({ map: shadowTexture });
        var shadowGeo = new PlaneBufferGeometry(300, 300, 1, 1);

        var shadowMesh;

        shadowMesh = new Mesh(shadowGeo, shadowMaterial);
        shadowMesh.position.y = -250;
        shadowMesh.rotation.x = -Math.PI / 2;
        scene.add(shadowMesh);

        shadowMesh = new Mesh(shadowGeo, shadowMaterial);
        shadowMesh.position.y = -250;
        shadowMesh.position.x = -400;
        shadowMesh.rotation.x = -Math.PI / 2;
        scene.add(shadowMesh);

        shadowMesh = new Mesh(shadowGeo, shadowMaterial);
        shadowMesh.position.y = -250;
        shadowMesh.position.x = 400;
        shadowMesh.rotation.x = -Math.PI / 2;
        scene.add(shadowMesh);

        var radius = 200;

        var geometry1 = new IcosahedronBufferGeometry(radius, 1);

        var count = geometry1.attributes.position.count;
        geometry1.setAttribute(
            "color",
            new BufferAttribute(new Float32Array(count * 3), 3)
        );

        var geometry2 = geometry1.clone();
        var geometry3 = geometry1.clone();

        var color = new Color();
        var positions1 = geometry1.attributes.position;
        var positions2 = geometry2.attributes.position;
        var positions3 = geometry3.attributes.position;
        var colors1 = geometry1.attributes.color;
        var colors2 = geometry2.attributes.color;
        var colors3 = geometry3.attributes.color;

        for (var i = 0; i < count; i++) {
            color.setHSL((positions1.getY(i) / radius + 1) / 2, 1.0, 0.5);
            colors1.setXYZ(i, color.r, color.g, color.b);

            color.setHSL(0, (positions2.getY(i) / radius + 1) / 2, 0.5);
            colors2.setXYZ(i, color.r, color.g, color.b);

            color.setRGB(1, 0.8 - (positions3.getY(i) / radius + 1) / 2, 0);
            colors3.setXYZ(i, color.r, color.g, color.b);
        }

        var material = new MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
            vertexColors: true,
            shininess: 0,
        });

        var wireframeMaterial = new MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
            transparent: true,
        });

        var mesh = new Mesh(geometry1, material);
        var wireframe = new Mesh(geometry1, wireframeMaterial);
        mesh.add(wireframe);
        mesh.position.x = -400;
        mesh.rotation.x = -1.87;
        scene.add(mesh);

        var mesh = new Mesh(geometry2, material);
        var wireframe = new Mesh(geometry2, wireframeMaterial);
        mesh.add(wireframe);
        mesh.position.x = 400;
        scene.add(mesh);

        var mesh = new Mesh(geometry3, material);
        var wireframe = new Mesh(geometry3, wireframeMaterial);
        mesh.add(wireframe);
        scene.add(mesh);
        const gl = args.getContext("webgl");
        renderer = new WebGLRenderer({ context: gl, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.addEventListener("mousemove", onDocumentMouseMove, false);

        //

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    //

    function animate() {
        requestAnimationFrame(animate);

        render();
    }

    function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);

        args.flush();
    }
}

var threeCube = function (args) {
    var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {
        canvas = args.object;
        const context = canvas.getContext("webgl");

        camera = new PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            1000
        );
        camera.position.z = 1;

        scene = new Scene();

        geometry = new BoxGeometry(0.2, 0.2, 0.2);
        material = new MeshNormalMaterial();

        mesh = new Mesh(geometry, material);
        scene.add(mesh);

        renderer = new WebGLRenderer({ context, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;

        renderer.render(scene, camera);

        canvas.flush();
    }
};

var animationKkinningblending = function (args) {
    canvas = args.object;
    const context = canvas.getContext("webgl") as any;
};

var threeCar = function (args) {
    canvas = args.object;
    const context = canvas.getContext("webgl") as any;
    var camera, scene, renderer;
    var stats, carModel, materialsLib;

    var bodyMatSelect = {
        selectedIndex: 0,
    };
    var rimMatSelect = {
        selectedIndex: 0,
    };
    var glassMatSelect = {
        selectedIndex: 0,
    };

    var carParts = {
        body: [],
        rims: [],
        glass: [],
    };

    var grid,
        wheels = [];

    function init() {
        camera = new PerspectiveCamera(
            40,
            window.innerWidth / window.innerHeight,
            0.1,
            200
        );

        scene = new Scene();
        // scene.fog = new THREE.Fog( 0xd7cbb1, 1, 80 );

        new RGBELoader()
            .setDataType(UnsignedByteType)
            .setPath(root + "textures/equirectangular/")
            .load("quarry_01_1k.hdr", function (texture) {
                var envMap = pmremGenerator.fromEquirectangular(texture)
                    .texture;
                pmremGenerator.dispose();

                scene.background = envMap;
                scene.environment = envMap;

                //

                initCar();
                initMaterials();
                initMaterialSelectionMenus();

                /*   function doRender(){
                            requestAnimationFrame(doRender)
                            render()
                        }
                       setTimeout(()=>{
                           console.log('render??')

                        requestAnimationFrame(doRender)
                       },5000)*/
            });

        var ground = new Mesh(
            new PlaneBufferGeometry(400, 400),
            new MeshBasicMaterial({ color: 0x6e6a62, depthWrite: false })
        );

        ground.rotation.x = -Math.PI / 2;
        ground.renderOrder = 1;
        scene.add(ground);

        grid = new GridHelper(400, 80, 0x000000, 0x000000);
        grid.material.opacity = 0.1;
        grid.material.depthWrite = false;
        grid.material.transparent = true;
        scene.add(grid);

        renderer = new WebGLRenderer({ context, antialias: true });

        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.setSize(window.innerWidth, window.innerHeight);

        console.log(window.innerWidth, window.innerHeight);

        renderer.outputEncoding = sRGBEncoding;
        renderer.toneMapping = ACESFilmicToneMapping;

        var pmremGenerator = new PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();

        /*stats = new Stats();
				container.appendChild( stats.dom );
*/
        window.addEventListener("resize", onWindowResize, false);

        renderer.setAnimationLoop(render);
    }

    function initCar() {
        // TODO support this
        var dracoLoader = new DRACOLoader();
        //dracoLoader.setDecoderPath( root + 'js/libs/draco/gltf/' );
        // dracoLoader.setDecoderConfig({ type: 'js' });

        var loader = new GLTFLoader();
        //loader.setDRACOLoader( dracoLoader );

        loader.load(
            root + "models/gltf/ferrari.glb",
            function (gltf) {
                carModel = gltf.scene.children[0];

                // shadow
                var texture = new TextureLoader().load(
                    root + "models/gltf/ferrari_ao.png"
                );
                var shadow = new Mesh(
                    new PlaneBufferGeometry(0.655 * 4, 1.3 * 4),
                    new MeshBasicMaterial({
                        map: texture,
                        opacity: 0.7,
                        transparent: true,
                    })
                );
                shadow.rotation.x = -Math.PI / 2;
                shadow.renderOrder = 2;
                carModel.add(shadow);

                scene.add(carModel);

                // car parts for material selection
                carParts.body.push(carModel.getObjectByName("body"));
                carParts.rims.push(
                    carModel.getObjectByName("rim_fl"),
                    carModel.getObjectByName("rim_fr"),
                    carModel.getObjectByName("rim_rr"),
                    carModel.getObjectByName("rim_rl"),
                    carModel.getObjectByName("trim")
                );

                carParts.glass.push(carModel.getObjectByName("glass"));

                wheels.push(
                    carModel.getObjectByName("wheel_fl"),
                    carModel.getObjectByName("wheel_fr"),
                    carModel.getObjectByName("wheel_rl"),
                    carModel.getObjectByName("wheel_rr")
                );

                updateMaterials();
            },
            null,
            (e) => {
                console.log("model load error", e);
            }
        );
    }

    function initMaterials() {
        materialsLib = {
            main: [
                new MeshStandardMaterial({
                    color: 0xff4400,
                    metalness: 1.0,
                    roughness: 0.2,
                    name: "orange",
                }),
                new MeshStandardMaterial({
                    color: 0x001166,
                    metalness: 1.0,
                    roughness: 0.2,
                    name: "blue",
                }),
                new MeshStandardMaterial({
                    color: 0x990000,
                    metalness: 1.0,
                    roughness: 0.2,
                    name: "red",
                }),
                new MeshStandardMaterial({
                    color: 0x000000,
                    metalness: 1.0,
                    roughness: 0.4,
                    name: "black",
                }),
                new MeshStandardMaterial({
                    color: 0xffffff,
                    metalness: 0.1,
                    roughness: 0.2,
                    name: "white",
                }),
                new MeshStandardMaterial({
                    color: 0xffffff,
                    metalness: 1.0,
                    roughness: 0.2,
                    name: "metallic",
                }),
            ],

            glass: [
                new (MeshPhysicalMaterial as any)({
                    color: 0xffffff,
                    metalness: 0,
                    roughness: 0,
                    transparency: 1.0,
                    transparent: true,
                    name: "clear",
                }),
                new (MeshPhysicalMaterial as any)({
                    color: 0x000000,
                    metalness: 0,
                    roughness: 0,
                    transparency: 0.7,
                    transparent: true,
                    name: "smoked",
                }),
                new (MeshPhysicalMaterial as any)({
                    color: 0x001133,
                    metalness: 0,
                    roughness: 0,
                    transparency: 0.7,
                    transparent: true,
                    name: "blue",
                }),
            ],
        };
    }

    function initMaterialSelectionMenus() {
        function addOption(name, menu) {
            var option = document.createElement("option");
            option.text = name;
            option.value = name;
            //menu.add( option );
        }

        materialsLib.main.forEach(function (material) {
            addOption(material.name, bodyMatSelect);
            addOption(material.name, rimMatSelect);
        });

        materialsLib.glass.forEach(function (material) {
            addOption(material.name, glassMatSelect);
        });

        bodyMatSelect.selectedIndex = 2;
        rimMatSelect.selectedIndex = 5;
        glassMatSelect.selectedIndex = 0;

        //	bodyMatSelect.addEventListener( 'change', updateMaterials );
        //	rimMatSelect.addEventListener( 'change', updateMaterials );
        //	glassMatSelect.addEventListener( 'change', updateMaterials );
    }

    // set materials to the current values of the selection menus
    function updateMaterials() {
        var bodyMat = materialsLib.main[bodyMatSelect.selectedIndex];
        var rimMat = materialsLib.main[rimMatSelect.selectedIndex];
        var glassMat = materialsLib.glass[glassMatSelect.selectedIndex];

        carParts.body.forEach((part) => (part.material = bodyMat));
        carParts.rims.forEach((part) => (part.material = rimMat));
        carParts.glass.forEach((part) => (part.material = glassMat));
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function render() {
        var time = -performance.now() / 1000;

        camera.position.x = Math.cos(time / 10) * 6;
        camera.position.y = 1.5;
        camera.position.z = Math.sin(time / 10) * 6;
        camera.lookAt(0, 0.5, 0);

        for (var i = 0; i < wheels.length; i++) {
            wheels[i].rotation.x = time * Math.PI;
        }

        grid.position.z = -time % 5;

        renderer.render(scene, camera);
        //	stats.update();
        canvas.flush();
    }

    init();
};

var nearestNeighbour = function (args) {
    const vertexShader = `//uniform float zoom;

    attribute float alpha;

    varying float vAlpha;

    void main() {

        vAlpha = 1.0 - alpha;

        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

        gl_PointSize = 4.0 * ( 300.0 / -mvPosition.z );

        gl_Position = projectionMatrix * mvPosition;

    }`;

    const fragmentShader = `uniform sampler2D tex1;

    varying float vAlpha;

    void main() {

        gl_FragColor = texture2D( tex1, gl_PointCoord );
        gl_FragColor.r = ( 1.0 - gl_FragColor.r ) * vAlpha + gl_FragColor.r;

    }`;

    canvas = args.object;
    const context = canvas.getContext("webgl") as any;

    var camera, scene, renderer;
    var controls;

    var amountOfParticles = 5000,
        maxDistance = Math.pow(120, 2);
    var positions, alphas, particles, _particleGeom;
    var kdtree;

    var clock = new Clock();

    function init() {
        camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000000
        );

        scene = new Scene();

        // add a skybox background
        var cubeTextureLoader = new CubeTextureLoader();

        cubeTextureLoader.setPath("~/assets/textures/cube/skyboxsun25deg/");

        var cubeTexture = cubeTextureLoader.load([
            "px.jpg",
            "nx.jpg",
            "py.jpg",
            "ny.jpg",
            "pz.jpg",
            "nz.jpg",
        ]);

        scene.background = cubeTexture;

        //

        renderer = new WebGLRenderer({ context });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        controls = new FirstPersonControls(camera, renderer.domElement);
        controls.movementSpeed = 100;
        controls.lookSpeed = 0.1;

        controls.lookAt(500, 500, 500);

        // create the custom shader

        var textureLoader = new TextureLoader();

        var imagePreviewTexture = textureLoader.load(
            "~/assets/textures/crate.gif"
        );

        imagePreviewTexture.minFilter = LinearMipmapLinearFilter;
        imagePreviewTexture.magFilter = LinearFilter;

        var pointShaderMaterial = new ShaderMaterial({
            uniforms: {
                tex1: { value: imagePreviewTexture },
                zoom: { value: 9.0 },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
        });

        //create particles with buffer geometry
        var distanceFunction = function (a, b) {
            return (
                Math.pow(a[0] - b[0], 2) +
                Math.pow(a[1] - b[1], 2) +
                Math.pow(a[2] - b[2], 2)
            );
        };

        positions = new Float32Array(amountOfParticles * 3);
        alphas = new Float32Array(amountOfParticles);

        _particleGeom = new BufferGeometry();
        _particleGeom.setAttribute(
            "position",
            new BufferAttribute(positions, 3)
        );
        _particleGeom.setAttribute("alpha", new BufferAttribute(alphas, 1));

        particles = new Points(_particleGeom, pointShaderMaterial);

        for (var x = 0; x < amountOfParticles; x++) {
            positions[x * 3 + 0] = Math.random() * 1000;
            positions[x * 3 + 1] = Math.random() * 1000;
            positions[x * 3 + 2] = Math.random() * 1000;

            alphas[x] = 1.0;
        }

        var measureStart = new Date().getTime();

        // creating the kdtree takes a lot of time to execute, in turn the nearest neighbour search will be much faster
        kdtree = new TypedArrayUtils.Kdtree(positions, distanceFunction, 3);

        console.log(
            "TIME building kdtree",
            new Date().getTime() - measureStart
        );

        // display particles after the kd-tree was generated and the sorting of the positions-array is done
        scene.add(particles);

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        controls.handleResize();
    }

    function animate() {
        requestAnimationFrame(animate);

        //
        displayNearest(camera.position);

        controls.update(clock.getDelta());

        renderer.render(scene, camera);

        canvas.flush();
    }

    function displayNearest(position) {
        // take the nearest 200 around him. distance^2 'cause we use the manhattan distance and no square is applied in the distance function
        var imagePositionsInRange = kdtree.nearest(
            [position.x, position.y, position.z],
            100,
            maxDistance
        );

        // We combine the nearest neighbour with a view frustum. Doesn't make sense if we change the sprites not in our view... well maybe it does. Whatever you want.
        var _frustum = new Frustum();
        var _projScreenMatrix = new Matrix4();

        _projScreenMatrix.multiplyMatrices(
            camera.projectionMatrix,
            camera.matrixWorldInverse
        );
        _frustum.setFromProjectionMatrix(_projScreenMatrix);

        for (var i = 0, il = imagePositionsInRange.length; i < il; i++) {
            var object = imagePositionsInRange[i];
            var objectPoint = new Vector3().fromArray(object[0].obj);

            if (_frustum.containsPoint(objectPoint)) {
                var objectIndex = object[0].pos;

                // set the alpha according to distance
                alphas[objectIndex] = (1.0 / maxDistance) * object[1];

                // update the attribute
                _particleGeom.attributes.alpha.needsUpdate = true;
            }
        }
    }

    init();
    animate();
};
var skinningAndMorphing = function (args) {
    canvas = args.object;
    const context = canvas.getContext("webgl") as any;

    const { drawingBufferWidth: width, drawingBufferHeight: height } = context;
    var container,
        stats,
        clock,
        gui,
        mixer,
        actions,
        activeAction,
        previousAction;
    var camera, scene, renderer, model, face;

    var api = { state: "Walking" };

    init();
    animate();

    function init() {
        camera = new PerspectiveCamera(45, width / height, 0.25, 100);
        camera.position.set(-5, 3, 10);
        camera.lookAt(new Vector3(0, 2, 0));

        scene = new Scene();
        scene.background = new Color(0xe0e0e0);
        scene.fog = new Fog(0xe0e0e0, 20, 100);

        clock = new Clock();

        // lights

        var light = new HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 20, 0);
        scene.add(light);

        light = new DirectionalLight(0xffffff) as any;
        light.position.set(0, 20, 10);
        scene.add(light);

        // ground

        var mesh = new Mesh(
            new PlaneBufferGeometry(2000, 2000),
            new MeshPhongMaterial({ color: 0x999999, depthWrite: false })
        );
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        var grid = new GridHelper(200, 40, 0x000000, 0x000000) as any;
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        scene.add(grid);

        // model

        var loader = new GLTFLoader();
        loader.load(
            root + "assets/models/gltf/RobotExpressive/RobotExpressive.glb",
            function (gltf) {
                model = gltf.scene;
                scene.add(model);

                createGUI(model, gltf.animations);
            },
            undefined,
            function (e) {
                console.error(e);
            }
        );

        renderer = new Renderer({ gl: context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.outputEncoding = sRGBEncoding;
        //container.appendChild( renderer.domElement );

        window.addEventListener("resize", onWindowResize, false);

        // stats
        /*stats = new Stats();
				container.appendChild( stats.dom );*/
    }

    function createGUI(model, animations) {
        var states = [
            "Idle",
            "Walking",
            "Running",
            "Dance",
            "Death",
            "Sitting",
            "Standing",
        ];
        var emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];

        //	gui = new GUI();

        mixer = new AnimationMixer(model);

        actions = {};

        for (var i = 0; i < animations.length; i++) {
            var clip = animations[i];
            var action = mixer.clipAction(clip);
            actions[clip.name] = action;

            if (
                emotes.indexOf(clip.name) >= 0 ||
                states.indexOf(clip.name) >= 4
            ) {
                action.clampWhenFinished = true;
                action.loop = LoopOnce;
            }
        }

        // states

        /*
				var statesFolder = gui.addFolder( 'States' );

				var clipCtrl = statesFolder.add( api, 'state' ).options( states );

				clipCtrl.onChange( function () {

					fadeToAction( api.state, 0.5 );

				} );

				statesFolder.open();

				// emotes

                var emoteFolder = gui.addFolder( 'Emotes' );

                */

        function createEmoteCallback(name) {
            api[name] = function () {
                fadeToAction(name, 0.2);

                mixer.addEventListener("finished", restoreState);
            };

            //emoteFolder.add( api, name );
        }

        function restoreState() {
            mixer.removeEventListener("finished", restoreState);

            fadeToAction(api.state, 0.2);
        }

        for (var i = 0; i < emotes.length; i++) {
            createEmoteCallback(emotes[i]);
        }

        //	emoteFolder.open();

        // expressions

        face = model.getObjectByName("Head_2");

        /*	var expressions = Object.keys( face.morphTargetDictionary );
				var expressionFolder = gui.addFolder( 'Expressions' );

				for ( var i = 0; i < expressions.length; i ++ ) {

					expressionFolder.add( face.morphTargetInfluences, i, 0, 1, 0.01 ).name( expressions[ i ] );

				}*/

        activeAction = actions["Walking"];
        activeAction.play();

        //expressionFolder.open();

        setTimeout(() => {
            fadeToAction("Punch", 0.2);
            setTimeout(() => {
                fadeToAction("Jump", 0.2);
                setTimeout(() => {
                    fadeToAction("Running", 0.2);
                }, 5000);
            }, 5000);
        }, 5000);
    }

    function fadeToAction(name, duration) {
        previousAction = activeAction;
        activeAction = actions[name];

        if (previousAction !== activeAction) {
            previousAction.fadeOut(duration);
        }

        activeAction
            .reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(duration)
            .play();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    var last = 0;
    function animate(d = 0) {
        var delta = 0;
        if (last != 0) {
            delta = (d - last) / 1000;
        }
        var dt = clock.getDelta();

        if (mixer) mixer.update(last == 0 ? 0 : delta);

        requestAnimationFrame(animate);

        renderer.render(scene, camera);

        //stats.update();
        canvas.flush();
        last = d;
    }
};
var threeOcean = function (args) {
    canvas = args.object;
    const context = canvas.getContext("webgl") as any;
    var container, stats;
    var camera, scene, renderer, light;
    var controls, water, sphere;
    const { drawingBufferWidth: width, drawingBufferHeight: height } = context;

    init();
    animate();

    function init() {
        //

        renderer = new WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(1);
        renderer.setSize(width, height);

        //

        scene = new Scene();

        //

        camera = new PerspectiveCamera(55, width / height, 1, 20000);
        camera.position.set(30, 30, 100);

        //

        light = new DirectionalLight(0xffffff, 0.8);
        scene.add(light);

        // Water

        var waterGeometry = new PlaneBufferGeometry(10000, 10000);

        water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new TextureLoader().load(
                "~/assets/textures/waternormals.jpg",
                function (texture) {
                    texture.wrapS = texture.wrapT = RepeatWrapping;
                }
            ),
            alpha: 1.0,
            sunDirection: light.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined,
        });

        water.rotation.x = -Math.PI / 2;

        scene.add(water);

        // Skybox

        var sky = new Sky();

        var uniforms = sky.material.uniforms;

        uniforms["turbidity"].value = 10;
        uniforms["rayleigh"].value = 2;
        uniforms["luminance"].value = 1;
        uniforms["mieCoefficient"].value = 0.005;
        uniforms["mieDirectionalG"].value = 0.8;

        var parameters = {
            distance: 400,
            inclination: 0.49,
            azimuth: 0.205,
        };

        var cubeCamera = new CubeCamera(0.1, 1, 512);
        cubeCamera.renderTarget.texture.generateMipmaps = true;
        cubeCamera.renderTarget.texture.minFilter = LinearMipmapLinearFilter;

        scene.background = cubeCamera.renderTarget;

        function updateSun() {
            var theta = Math.PI * (parameters.inclination - 0.5);
            var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

            light.position.x = parameters.distance * Math.cos(phi);
            light.position.y =
                parameters.distance * Math.sin(phi) * Math.sin(theta);
            light.position.z =
                parameters.distance * Math.sin(phi) * Math.cos(theta);

            sky.material.uniforms["sunPosition"].value = light.position.copy(
                light.position
            );
            water.material.uniforms["sunDirection"].value
                .copy(light.position)
                .normalize();

            cubeCamera.update(renderer, sky);
        }

        updateSun();

        //

        var geometry = new IcosahedronBufferGeometry(20, 1);
        var count = geometry.attributes.position.count;

        var colors = [];
        var color = new Color();

        for (var i = 0; i < count; i += 3) {
            color.setHex(Math.random() * 0xffffff);

            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));

        var material = new MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.0,
            flatShading: true,
            envMap: cubeCamera.renderTarget.texture,
            side: DoubleSide,
        });

        sphere = new Mesh(geometry, material);
        scene.add(sphere);

        //

        controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set(0, 10, 0);
        controls.minDistance = 40.0;
        controls.maxDistance = 200.0;
        controls.update();

        //
        /*
				stats = new Stats();
				container.appendChild( stats.dom );

				// GUI


				var gui = new GUI();

				var folder = gui.addFolder( 'Sky' );
				folder.add( parameters, 'inclination', 0, 0.5, 0.0001 ).onChange( updateSun );
				folder.add( parameters, 'azimuth', 0, 1, 0.0001 ).onChange( updateSun );
				folder.open();

				var uniforms = water.material.uniforms;

				var folder = gui.addFolder( 'Water' );
				folder.add( uniforms.distortionScale, 'value', 0, 8, 0.1 ).name( 'distortionScale' );
				folder.add( uniforms.size, 'value', 0.1, 10, 0.1 ).name( 'size' );
				folder.add( uniforms.alpha, 'value', 0.9, 1, .001 ).name( 'alpha' );
                folder.open();

                */

        //

        var uniforms = water.material.uniforms;
        uniforms.size.value = 0.1;
        uniforms.distortionScale.value = 0;
        uniforms.alpha.value = 0.9;
        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
        //stats.update();
    }

    function render() {
        var time = performance.now() * 0.001;
        sphere.position.y = Math.sin(time) * 20 + 5;
        sphere.rotation.x = time * 0.5;
        sphere.rotation.z = time * 0.51;

        water.material.uniforms["time"].value += 1.0 / 60.0;

        renderer.render(scene, camera);
        canvas.flush();
    }
};
var threeCrate = function (args) {
    var camera, scene, renderer;
    var mesh;
    canvas = args.object;
    const context = canvas.getContext("webgl") as any;
    const { drawingBufferWidth: width, drawingBufferHeight: height } = context;
    init();
    animate();

    function init() {
        camera = new PerspectiveCamera(70, width / height, 1, 1000);
        camera.position.z = 400;

        scene = new Scene();

        var texture = new TextureLoader().load("~/assets/textures/crate.gif");

        var geometry = new BoxBufferGeometry(200, 200, 200);
        var material = new MeshBasicMaterial({ map: texture });

        mesh = new Mesh(geometry, material);
        scene.add(mesh);

        renderer = new WebGLRenderer({ context, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }

    function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);

        canvas.flush();
    }
};

var threeDepth = function (args) {
    canvas = args.object;
    const gl = canvas.getContext("webgl") as any;
    const renderer = new WebGLRenderer({
        context: gl,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = BasicShadowMap;

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.setClearColor(0xffffff, 1.0);
    renderer.shadowMap.enabled = true;
    const vp = new Vector4();
    const size = new Vector2();

    // Standard Camera
    const camera = new PerspectiveCamera(
        100,
        gl.drawingBufferWidth / gl.drawingBufferHeight,
        0.1,
        1000
    );
    camera.position.set(10, 10, 0);
    camera.lookAt(0, 0, 0);

    const scene = new Scene();

    scene.add(new AmbientLight(0xffffff, 0.5));

    // Three's lights use depth and stencil buffers.
    const light = new DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 6, 0);
    light.castShadow = true;
    light.shadow.camera.left = -1;
    light.shadow.camera.right = 1;
    light.shadow.camera.top = -1;
    light.shadow.camera.bottom = 1;
    scene.add(light);

    const shadowHelper = new DirectionalLightHelper(light, 2, 0x0000ff);
    scene.add(shadowHelper);

    // Create a plane that receives shadows (but does not cast them).
    const planeGeometry = new PlaneBufferGeometry(10, 10, 32, 32);
    const planeMaterial = new MeshStandardMaterial({
        color: 0x00ff00,
        side: DoubleSide,
    });

    const plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = Math.PI / 2;
    plane.position.y = -2;
    scene.add(plane);

    const cube = new Mesh(
        new BoxGeometry(1.2, 1.2, 1.2),
        new MeshPhongMaterial({
            color: 0xffff00,
        })
    );
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.renderOrder = 3;
    scene.add(cube);

    const another = new Mesh(
        new BoxGeometry(1.4, 1.4, 1.4),
        new MeshPhongMaterial({
            color: 0xff0000,
        })
    );
    another.position.set(0, 2, 0);
    another.castShadow = true;
    another.receiveShadow = true;
    another.renderOrder = 1;
    scene.add(another);

    const helper = new CameraHelper(light.shadow.camera);
    scene.add(helper);

    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        canvas.flush();
    };

    animate();
    renderer.render(scene, camera);
    canvas.flush();
};
