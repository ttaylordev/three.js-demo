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