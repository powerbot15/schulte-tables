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
    <timer />
    <schulte-table
      :numbers="numbers"
      @checkNumber="checkNumber"
    />
  </div>
</template>

<script>
import { gameService } from './services/game-service';
import { eventBus } from './services/event-bus';
import SchulteTable from './components/SchulteTable';
import Timer from './components/Timer';
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
    Actions,
    Timer
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
      eventBus.$emit('startTimer');
    },
    setLevel (level) {
      this.$store.commit('setLevel', level);
      this.resetGame();
    },
    checkNumber (number) {
      if (number.value === this.selectedNumbers.length + 1) {
        number.checked = true;
        this.selectedNumbers.push(number);
      }
      if (this.selectedNumbers.length === 25) {
        eventBus.$emit('stopTimer');
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
