<template>
  <nav class="app-nav">
    <ul class="actions">
      <li class="btn-wrap">
        <button
          type="button"
          class="btn btn-reset"
          @click="resetGame()"
        >
          Reset
        </button>
      </li>
      <li class="btn-wrap">
        <button
          type="button"
          class="btn btn-easy"
          @click="setLevel('easy')"
          :class="{active: $store.state.level === 'easy'}"
        >
          Easy
        </button>
      </li>
      <li class="btn-wrap">
        <button
          type="button"
          class="btn btn-medium"
          @click="setLevel('medium')"
          :class="{active: $store.state.level === 'medium'}"
        >
          Medium
        </button>
      </li>
      <li class="btn-wrap">
        <button
          type="button"
          class="btn btn-hard"
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
    padding: 20px 0;

    .actions {
      display: flex;
      align-items: center;
      list-style: none;
    }
    .btn-wrap:first-child {
      padding-right: 100px;
    }
    .active {
      background-color: #00aa00;
    }

    .btn {
      background: none;
      cursor: pointer;
      border-radius: 4px;
      padding: 10px 0;
      text-align: center;
      width: 85px;
      border: 1px solid #888888;
      &.active,
      &:hover {
        background-color: #21bf73;
        color: #ffffff;
        font-weight: 700;
      }
      &.btn-easy {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &.btn-hard {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &.btn-medium {
        border-radius: 0;
      }
    }
  }
  @media (max-width: 375px) {
    .app-nav {
      .btn-wrap:first-child {
        padding-right: 10px;
        padding-left: 10px;
      }
    }
  }
</style>
