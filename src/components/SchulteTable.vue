<template>
<table class="game-field">
  <tbody>
    <tr
      v-for="(number, index) in numbers"
      :key="index"
    >
      <td
        v-for="(innerNumber, innerIndex) in number"
        :key="innerIndex * 10"
        class="game-field__cell"
        :class="passed(innerNumber)"
        @click="checkNumber(innerNumber)"
      >
        {{innerNumber.value}}
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'SchulteTable',
  props: {
    numbers: {
      type: Array,
      default () {
        return [[]];
      }
    }
  },

  methods: {
    checkNumber (number) {
      this.$emit('checkNumber', number);
    },
    passed (item) {
      const classBase = `game-field__cell--passed-${this.$store.state.level}`;
      return item.checked ? classBase : '';
    }
  }
}
</script>

<style lang="scss">
  .game-field {
    border-collapse: collapse;
    margin: auto;

    .game-field__cell {
      padding: 50px;
      border: 1px solid #ababab;
      cursor: pointer;
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      color: #333;
    }
    .game-field__cell--passed-easy {
      color: #ffffff;
    }
    .game-field__cell--passed-medium {
      background: #ababab;
    }
    .game-field__cell--passed-hard {
      &:hover {
        color: #00AA00;
      }
    }
  }
  @media (max-width: 375px) {
    .game-field {
      .game-field__cell {
        padding: 20px;
        font-size: 32px;
      }
    }
  }
</style>
