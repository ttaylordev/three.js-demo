// import './style.css';

import * as THREE from 'three';
import { MeshBasicMaterial, PointLightHelper, TetrahedronGeometry, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import D20 from './scripts/D20';
import Earth from './scripts/Earth';
// import Square from './scripts/square';



// Set up a Scene, Camera, and a Renderer:
// Scene is a container
const scene = new THREE.Scene();
// perspective camera is the most common, designed to mimic human perception
// args: fieldOfView *amount visible of 360deg, aspectRatio * users' browser window, viewFrustrum * which objects are visible relative to camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// assign which DOM element to use
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// light source
const pointLight2 = new THREE.PointLight(0xffffff); //#32cfff //ffd900
pointLight2.position.set(50, 20, 30);
scene.add(pointLight2);

// show grid
const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// orbit controls
const orbitControls = new OrbitControls(camera, renderer.domElement);

// scene can be rendered to the DOM statically, but avoid calling the render method frequently
// renderer.render(scene, camera);

// background
const nebulae = new THREE.TextureLoader().load('nebulae.jpg');
scene.background = nebulae;

// texture mapping example1 Earth
const globeEarthTexture = new THREE.TextureLoader().load('earth.png');
const normalEarthTexture = new THREE.TextureLoader().load('earth_NORM.png');
const normalVector = new THREE.Vector2(-.2,.1);
const globeEarth = new THREE.Mesh(
  new THREE.SphereGeometry(12, 64, 64),
  new THREE.MeshStandardMaterial({
    map: globeEarthTexture,
    normalMap: normalEarthTexture,
    normalScale: normalVector
  })
);
 globeEarth.position.set(0,0,0);
scene.add(globeEarth);

const d20 = new D20('d20.png', 10)
d20.setPosition(-20, -20, -20);

// console.log(d20.d20);
scene.add(d20.d20);


function animate() {
  requestAnimationFrame( animate );
  globeEarth.rotation.y += 0.0002;

  orbitControls.update();
  renderer.render(scene, camera);
}

animate();

