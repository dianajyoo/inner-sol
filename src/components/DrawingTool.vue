<template>
  <div class="drawing-tool" @click="updateColor">
    <button class="black active" data-hex="000" />
    <button class="red" data-hex="ff3131" />
    <button class="blue" data-hex="1434a4" />
    <button class="yellow" data-hex="fafa33" />
  </div>
</template>

<style lang="scss">
@import '../scss/index';

@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

.drawing-tool {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (min-width: $med) {
    margin-top: 2.5rem;
  }

  button {
    position: relative;

    &:before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url('../assets/images/brush.svg') center / contain no-repeat;
      font-size: 1.5rem;
      display: block;
      transition: filter 0.1s ease;
    }

    &.active {
      // animation: spin 4s linear infinite;
    }

    &.red:before {
      filter: invert(34%) sepia(77%) saturate(4001%) hue-rotate(342deg)
        brightness(98%) contrast(100%);
    }

    &.blue:before {
      filter: invert(10%) sepia(97%) saturate(4161%) hue-rotate(231deg)
        brightness(99%) contrast(92%);
    }

    &.yellow:before {
      filter: invert(98%) sepia(34%) saturate(4630%) hue-rotate(328deg)
        brightness(115%) contrast(102%);
    }

    &:hover {
      &:before {
        filter: invert(31%) sepia(36%) saturate(599%) hue-rotate(248deg)
          brightness(91%) contrast(93%);
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    currentColor: String,
    updateColor: Function
  },
  watch: {
    currentColor(currColor, prevColor) {
      if (currColor !== prevColor && currColor && prevColor) {
        document
          .querySelector(`[data-hex="${prevColor}"]`)
          .classList.remove('active');

        document
          .querySelector(`[data-hex="${currColor}"]`)
          .classList.add('active');
      }
    }
  }
};
</script>
