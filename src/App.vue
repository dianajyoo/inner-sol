<template>
  <div class="app">
    <div class="logo-wrapper">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <Canvas :currentColor="currentColor" />
    <DrawingTool
      :currentColor="currentColor"
      :updateColor="updateColor"
    />
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
</style>

<script>
import Canvas from './components/Canvas.vue';
import DrawingTool from './components/DrawingTool.vue';
import Instruction from './components/Instruction.vue';
import logo from './assets/images/logo.svg';

export default {
  data() {
    return {
      currentColor: '000',
    };
  },
  components: {
    Canvas,
    DrawingTool,
    Instruction,
  },
  computed: {
    logo() {
      return logo;
    },
  },
  methods: {
    updateColor(e) {
      if (e.target.tagName === 'BUTTON') {
        this.currentColor = `${e.target.dataset.hex}`;
      }
    }
  }
};
</script>
