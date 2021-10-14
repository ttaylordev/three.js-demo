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


// "game loop" recursion, rerenders the browser and animates the subject
function animate(){
    // tells the browser to call the function everytime it repaints the screen
    requestAnimationFrame( animate );
  
    // each shape has properties, rotation, shape, scale
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
     
    orbitControls.update();
    renderer.render(scene, camera);
  }
  
  animate();
  