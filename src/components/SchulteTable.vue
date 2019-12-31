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
        :class="'cell-' + number.length"
        @click="checkNumber(innerNumber)"
      >
        {{innerNumber}}
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
    }
  }
}
</script>

<style lang="scss">
  .game-field {
    border-collapse: collapse;
    margin: auto;

    .cell-5 {
      padding: 40px;
      border: 1px solid #ababab;
      cursor: pointer;
      text-align: center;
      font-size: 36px;
      font-weight: 700;
      color: #333;
    }
  }
</style>
