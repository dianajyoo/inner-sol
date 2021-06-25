const shapes = {
  sphere: {
    geometry: new THREE.SphereBufferGeometry(1, 64, 64),
    material: new THREE.MeshNormalMaterial(),
  },
  torus: {
    geometry: new THREE.TorusKnotBufferGeometry(),
    material: new THREE.MeshNormalMaterial(),
  }
};

export default shapes;
