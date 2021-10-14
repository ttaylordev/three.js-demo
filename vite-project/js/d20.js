// texture mapping example2 d20
const d20Texture = new THREE.TextureLoader().load('dd20.png');
const d20 = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10),
  new THREE.MeshBasicMaterial({map: d20Texture})
);

d20.position.set(-20, -20, -20);
scene.add(d20);