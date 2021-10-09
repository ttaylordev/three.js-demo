// import './style.css'

import * as THREE from 'three';

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

// The mesh is the combination of geometry and material
const torus = new THREE.Mesh(geometry, material);

// add the torus to the scene
scene.add(torus);

// lighting to all directions
const pointLight1 = new THREE.PointLight(0xFFFFFF);
// position the light
pointLight1.position.set(5,5,5);
// add the light to the scene
scene.add(pointLight1);

// another light source
const pointLight2 = new THREE.PointLight(0xffd900);
pointLight2.position.set(8,8,20);
scene.add(pointLight2);

// scene can be rendered to the DOM statically, but avoid calling the render method frequently
// renderer.render(scene, camera);

// "game loop" recursion, rerenders the browser and animates the subject
function animate(){
  // tells the browser to call the function everytime it repaints the screen
  requestAnimationFrame( animate );

  // each shape has properties, rotation, shape, scale
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();

