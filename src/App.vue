<template>
  <div class="app">
    <div class="logo-wrapper">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <Canvas :currentColor="currentColor" />
    <DrawingTool :currentColor="currentColor" :updateColor="updateColor" />
    <Instruction />
  </div>
</template>

<style lang="scss">
@import './scss/index';

@font-face {
  font-family: 'DankMono';
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url('./assets/fonts/DankMono.woff') format('woff');
}

@font-face {
  font-family: 'DankMono';
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url('./assets/fonts/DankMono.woff2') format('woff2');
}

* {
  box-sizing: border-box;
  font-family: 'DankMono';
}

body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-size: 50px 50px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
}

canvas {
  cursor: url('assets/images/paintbrush.png'), auto;
}

p {
  margin: 0;
  line-height: 1.2;
}

ul {
  list-style: none;
}

button {
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  font-size: 1rem;
}

.app {
  max-width: 768px;
  width: 100%;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: $med) {
    padding: 2rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

h1 {
  font-family: 'DankMono';
}

.logo {
  width: 181px;

  @media (min-width: $med) {
    width: 288px;
  }

  &-wrapper {
    text-align: center;
  }
}

#shapes {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>

<script>
import Canvas from './components/Canvas.vue'
import DrawingTool from './components/DrawingTool.vue'
import Instruction from './components/Instruction.vue'
import logo from './assets/images/logo.svg'
import sphereSkin from './assets/images/markus-spiske-k0rVudBoB4c-unsplash.jpg'
import torusSkin from './assets/images/sharon-mccutcheon-ShhuLsZREvM-unsplash.jpg'
// import torusSkin from './assets/images/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg';

import shapes from './data/shapes'

export default {
  data() {
    return {
      currentColor: '000',
    }
  },
  components: {
    Canvas,
    DrawingTool,
    Instruction,
  },
  computed: {
    logo() {
      return logo
    },
  },
  mounted() {
    this.initiateThreeJS()
  },
  methods: {
    updateColor(e) {
      if (e.target.tagName === 'BUTTON') {
        this.currentColor = `${e.target.dataset.hex}`
      }
    },
    initiateThreeJS() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      const colors = {
        white: '#fff',
      }

      let clock = new THREE.Clock()
      let time = 0
      let delta = 0

      scene.background = new THREE.Color(colors.white)

      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)
      renderer.domElement.id = 'shapes' // canvas el

      const sphere = new THREE.Mesh(
        shapes().sphere.geometry,
        shapes(
          new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(sphereSkin),
          })
        ).sphere.material
      )
      const torus = new THREE.Mesh(
        shapes().torus.geometry,
        shapes(
          new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(torusSkin),
          })
        ).torus.material
      )

      sphere.translateX(-1)
      torus.translateX(4)
      torus.translateY(3)

      camera.position.z = 6

      document.body.appendChild(renderer.domElement)

      renderer.setAnimationLoop(() => {
        torus.rotation.x += 0.01
        torus.rotation.y += 0.01

        // Bouncing ball~
        // https://stackoverflow.com/questions/51429502/how-to-create-simple-vertical-bounce-animation-to-a-sphere
        delta = clock.getDelta()
        time += delta
        sphere.rotation.x = time * 4
        sphere.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 2
        sphere.position.z = Math.cos(time) * 4

        renderer.render(scene, camera)
      })

      scene.add(sphere)
      scene.add(torus)
    },
  },
}
</script>
