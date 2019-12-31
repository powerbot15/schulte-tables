<template>
  <nav class="app-nav">
    <ul class="actions">
      <li>
        <button
          type="button"
          @click="resetGame()"
        >
          Reset
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="setLevel('easy')"
          :class="{active: $store.state.level === 'easy'}"
        >
          Easy
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="setLevel('medium')"
          :class="{active: $store.state.level === 'medium'}"
        >
          Medium
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="setLevel('hard')"
          :class="{active: $store.state.level === 'hard'}"
        >
          Hard
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Actions',

  methods: {
    resetGame () {
      this.$emit('resetGame');
    },
    setLevel (level) {
      this.$emit('setLevel', level);
    }
  }
}
</script>

<style lang="scss">
  .app-nav {
    .actions {
      display: flex;
      align-items: center;
      list-style: none;
    }

    .active {
      background-color: #00aa00;
    }
  }
</style>
