<template>
  <canvas
    id="canvas"
    width="525"
    height="300"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  />
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
  width: 300px;
  margin: 1.5rem auto 0 auto;
  animation: pulse 4s infinite;

  @media (min-width: $med) {
    margin-top: 4rem;
    width: 525px;
  }
}
</style>

<script>
export default {
  props: {
    currentColor: String
  },
  data() {
    return {
      isDrawing: false,
      x: 0,
      y: 0,
      context: null
    }
  },
  mounted() {
    this.context = document.getElementById('canvas').getContext('2d');
  },
  methods: {
    handleMouseDown(e) {
      this.isDrawing = true;
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleMouseUp() {
      if (this.isDrawing === true) {
        this.isDrawing = false;
        this.x = 0;
        this.y = 0;
      }
    },
    handleMouseMove(e) {
      if (this.isDrawing === true) {
        this.draw(this.context, this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    draw(context, x1, y1, x2, y2) {
      context.beginPath();
      context.strokeStyle = `#${this.currentColor}`;
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
  }
}
</script>
