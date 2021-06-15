<template>
  <canvas id="canvas"></canvas>
</template>

<style lang="scss">
  @import '../scss/index';

  @keyframes pulse {
    0% { box-shadow: 0 0 10px #7fce31; }
    25% {  box-shadow: 0 0 10px #7fd827; }
    50% { box-shadow: 0 0 10px #7fe21d; }
    75% {  box-shadow: 0 0 10px #7fd827; }
    100% { box-shadow: 0 0 10px #7fce31; }
  }

  canvas {
    width: 100%;
    height: 300px;
    margin-top: 1.5rem;
    animation: pulse 4s infinite;

    @media (min-width: $med) {
      margin-top: 4rem;
    }
  }
</style>

<script>
</script>
