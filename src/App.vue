<template>
  <div
    id="app"
    class="app-wrap"
  >
    <actions
      @resetGame="resetGame"
      @setLevel="setLevel"
    />
    <schulte-table
      :numbers="numbers"
      @checkNumber="checkNumber"
    />
  </div>
</template>

<script>
import { gameService } from './services/game-service';
import SchulteTable from './components/SchulteTable';
import Actions from './components/Actions';

export default {
  name: 'app',

  data () {
    return {
      numbers: []
    }
  },

  components: {
    SchulteTable,
    Actions
  },

  created () {
    this.numbers = gameService.mixNumbers(25);
  },

  methods: {
    resetGame () {
      this.numbers = gameService.mixNumbers(25);
    },
    setLevel (level) {
      this.$store.commit('setLevel', level);
    },
    checkNumber (number) {
      console.log(number);
    }
  }
}
</script>

<style lang="scss">
  .app-wrap {
    max-width: 600px;
    margin: auto;
  }
</style>
