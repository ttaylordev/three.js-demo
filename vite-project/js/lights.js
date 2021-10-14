
// lighting to all directions from one positionable source
const pointLight1 = new THREE.PointLight(0xFFFFFF);
// position the light
pointLight1.position.set(5,5,5);

// add the light to the scene
scene.add(pointLight1);

// visible light source indicator
const lightHelper = new PointLightHelper(pointLight2);
scene.add(lightHelper);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// another light source
const pointLight2 = new THREE.PointLight(0xffffff); //#32cfff //ffd900
pointLight2.position.set(50, 20, 30);
scene.add(pointLight2);

