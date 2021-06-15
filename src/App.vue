<template>
  <div class="app">
    <div class="logo-wrapper">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <Canvas />
    <Instruction />
    <DrawingTool />
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

  body, html {
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
    cursor: pointer;
    font-size: 1rem;
  }

  .app {
    max-width: 768px;
    width: 100%;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;

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
    components: {
      Canvas,
      DrawingTool,
      Instruction
    },
    computed: {
      logo() {
        return logo;
      }
    }
  }
</script>
