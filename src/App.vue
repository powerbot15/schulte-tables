<template>
  <div
    id="app"
    class="app-wrap"
  >
    <nav>
      <ul>
        <li>
          <button
            type="button"
            @click="resetGame()"
          >
            Reset
          </button>
        </li>
      </ul>
    </nav>
    <schulte-table
      :numbers="numbers"
    />
  </div>
</template>

<script>
import { gameService } from './services/game-service';
import SchulteTable from './components/SchulteTable';

export default {
  name: 'app',

  data () {
    return {
      numbers: []
    }
  },

  components: {
    SchulteTable
  },

  created () {
    this.numbers = gameService.mixNumbers(25);
  },

  methods: {
    resetGame () {
      this.numbers = gameService.mixNumbers(25);
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
