// import './style.css'

import * as THREE from 'three';
import { MeshBasicMaterial, PointLightHelper, TetrahedronGeometry, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up a Scene, Camera, and a Renderer:
// Scene is a container
const scene = new THREE.Scene();
// perspective camera is the msot common, designed to mimic human perception
// args: fieldOfView *amount visible of 360deg, aspectRatio * users' browser window, viewFrustrum * which objects are visible relative to camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// assign which DOM element to use
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), 
});
// changed something
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);
// /* end of scene, camera, renderer setup */

// Geometry
// x,y,z set of vectors that define the shape
const geometry = new THREE.TorusGeometry(10,2,15,100);

// Material
// give it some color/texture
// there are many predefined materials, custom shaders(WebGL) are great too.
// basic materials do not require a lightsource
const material = new THREE.MeshStandardMaterial({color: 0xFF8347});
// const material = new THREE.MeshBasicMaterial({color: 0xFF8347, wireframe: true});

// The mesh is the combination of geometry and material
const torus = new THREE.Mesh(geometry, material);

// add the torus to the scene
scene.add(torus);

// lighting to all directions
// const pointLight1 = new THREE.PointLight(0xFFFFFF);
// position the light
// pointLight1.position.set(5,5,5);
// add the light to the scene
// scene.add(pointLight1);

// another light source
const pointLight2 = new THREE.PointLight(0xffd900);
pointLight2.position.set(8,8,20);
scene.add(pointLight2);

// visible light source indicator
const lightHelper = new PointLightHelper(pointLight2);
scene.add(lightHelper);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// show grid
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// orbit controls
const orbitControls = new OrbitControls(camera, renderer.domElement);

// scene can be rendered to the DOM statically, but avoid calling the render method frequently
// renderer.render(scene, camera);

function addPoint(){
  const geometry = new THREE.SphereBufferGeometry(0.25, 19, 19);
  let randomColor = Math.floor(Math.random()*16777215 - 42);
  const material = new THREE.MeshStandardMaterial({color: randomColor})
  const point = new THREE.Mesh( geometry, material );
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  point.position.set(x, y, z);
  scene.add(point);

}
// populate the stars
Array(180).fill().forEach(addPoint);

const nebulae = new THREE.TextureLoader().load('nebulae.jpg');
scene.background = nebulae;

// texture mapping

const globeEarthTexture = new THREE.TextureLoader().load('earth.jpg');
const globeEarth = new THREE.Mesh(
  new THREE.SphereGeometry(12),
  new THREE.MeshBasicMaterial({map: globeEarthTexture})
);
 globeEarth.position.set(20, 20, 20);

scene.add(globeEarth);

// "game loop" recursion, rerenders the browser and animates the subject
function animate(){
  // tells the browser to call the function everytime it repaints the screen
  requestAnimationFrame( animate );

  // each shape has properties, rotation, shape, scale
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  globeEarth.rotation.y += 0.0005;
  
  orbitControls.update();
  renderer.render(scene, camera);
}

animate();

