<template>
  <div class="drawing-tool">
    <button class="black" data-hex="000" />
    <button class="red" data-hex="ff3131" />
    <button class="blue" data-hex="1434a4" />
    <button class="yellow" data-hex="fafa33" />
  </div>
</template>

<style lang="scss">
  @import '../scss/index';

  .drawing-tool {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;

    @media (min-width: $med) {
      margin-top: 2.5rem;
    }

    button {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;

      &.black {
        background-color: $black;
      }

      &.red {
        background-color: $red;
      }

      &.blue {
        background-color: $blue;
      }

      &.yellow {
        background-color: $yellow;
      }
    }
  }
</style>
