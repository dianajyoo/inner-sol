function shapes(material) {
  return {
    sphere: {
      geometry: new THREE.SphereBufferGeometry(1, 64, 64),
      material,
    },
    torus: {
      geometry: new THREE.TorusKnotBufferGeometry(),
      material,
    },
  };
}

export default shapes;
