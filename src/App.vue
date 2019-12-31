<template>
  <div
    id="app"
    class="app-wrap"
  >
    <actions
      @resetGame="resetGame"
      @setLevel="setLevel"
    />
    <p>
      {{currentNumberCollected}}
    </p>
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
      numbers: [],
      selectedNumbers: [],
      currentNumber: 1
    }
  },

  components: {
    SchulteTable,
    Actions
  },

  created () {
    this.numbers = gameService.mixNumbers(25);
  },

  computed: {
    currentNumberCollected () {
      return this.selectedNumbers.length === 25 ? 'All collected!' : `Now select ${this.selectedNumbers.length + 1}`;
    }
  },

  methods: {
    resetGame () {
      this.numbers = gameService.mixNumbers(25);
      this.selectedNumbers = [];
      this.currentNumber = 1;
    },
    setLevel (level) {
      this.$store.commit('setLevel', level);
      this.resetGame();
    },
    checkNumber (number) {
      console.log(number);
      if (number.value === this.selectedNumbers.length + 1) {
        number.checked = true;
        this.selectedNumbers.push(number);
      }
    }
  }
}
</script>

<style lang="scss">
  .app-wrap {
    max-width: 750px;
    margin: auto;
  }
</style>
