<template>
  <div
    id="app"
    class="app-wrap"
  >
    <actions
      @resetGame="resetGame"
      @setLevel="setLevel"
    />
    <div class="game-info">
      <span>
        {{currentNumberCollected}}
      </span>
      <timer />
    </div>
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
      currentNumber: 1,
      gameStarted: false
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
      this.gameStarted = false;
      eventBus.$emit('stopTimer');
    },
    setLevel (level) {
      this.$store.commit('setLevel', level);
      this.resetGame();
    },
    checkNumber (number) {
      if (!this.gameStarted) {
        this.gameStarted = true;
        eventBus.$emit('startTimer');
      }
      if (number.value === this.selectedNumbers.length + 1) {
        number.checked = true;
        this.selectedNumbers.push(number);
      }
      if (this.selectedNumbers.length === 25) {
        eventBus.$emit('stopTimer', true);
      }
    }
  }
}
</script>

<style lang="scss">
  .app-wrap {
    max-width: 750px;
    margin: auto;

    .game-info {
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
