// texture mapping example2 d20
// const d20Texture = new THREE.TextureLoader().load('dd20.png');
// const d20 = new THREE.Mesh(
//   new THREE.IcosahedronGeometry(10),
//   new THREE.MeshBasicMaterial({map: d20Texture})
// );

// d20.position.set(-20, -20, -20);
// scene.add(d20);

import * as THREE from 'three';

const D20 = class { 
  
  constructor(texture, size){
    this.d20Texture = new THREE.TextureLoader().load(texture);
    this.d20 = new THREE.Mesh(
        new THREE.IcosahedronGeometry(size),
        new THREE.MeshBasicMaterial({map: this.d20Texture})
      );
  }

  // getters and setters are used to define methods on a class which are then used as if they are properties
  // they look like props, but are actually methods of that class.
  
  // get d20(){
  //   return this.d20;
  // }

  // set d20(size){
    // this.d20Texture = new THREE.TextureLoader().load(this.d20texture);
    // this.d20.IcosahedronGeometry(size)
    // new THREE.MeshBasicMaterial({map: this.d20Texture})
  // }

  // log = [];
  // // needs a setter if it has a getter, I assumed the constructor qualified as a setter
  // language = {
  //   set current(name) {
  //     this.log.push(name);
  //   },
  //   log: []
  // };

  setPosition(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this.d20.position.set(x, y, z);
  }  
}

export default D20;

// example
// const d20 = new D20('./../dd20.png', 10);
// scene.add(d20.setPosition(-20, -20, -20));