<template>
  <div class="instruction">
    <p
      v-if="currentInstruction"
      v-html="currentInstruction"
    />
    <button
      type="button"
      @click="getNewInstruction"
    >
      Get New Instruction
    </button>
  </div>
</template>

<style lang="scss">
  @import '../scss/index';

  .instruction {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media (min-width: $med) {
      margin-top: 2.5rem;
      flex-direction: row;
      align-items: flex-start;
    }

    p {
      flex-basis: 65%;
    }

    button {
      flex-basis: 35%;
      padding: 1rem;
      border-radius: 4px;
      color: $white;
      box-shadow: 4px 4px 10px $chartreuse;
      background-image: linear-gradient(90deg, $lilac, $heliotrope);

      &:hover {
        box-shadow: 4px 4px 10px $violet;
      }
    }
  }
</style>

<script>
  import instructions from '../data/instructions';

  export default {
    data() {
      return {
        currentInstruction: null
      }
    },
    computed: {
      instructions() {
        return instructions;
      },
      numOfInstructions() {
        return this.instructions.length;
      },
    },
    mounted() {
      this.currentInstruction = this.getCurrentInstuction(this.getIndex());
    },
    methods: {
      getIndex() {
        return Math.floor(Math.random() * this.numOfInstructions);
      },
      getCurrentInstuction(index) {
        return this.instructions[index].text;
      },
      getNewInstruction() {
        this.currentInstruction = this.getCurrentInstuction(this.getIndex());
      }
    }
  }
</script>
