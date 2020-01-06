<template>
  <span>{{time}}</span>
</template>

<script>
import { eventBus } from '../services/event-bus';

export default {
  name: 'Timer',

  data () {
    return {
      timer: {
        seconds: 0,
        minutes: 0,
        hours: 0
      }
    }
  },

  created () {
    eventBus.$on('startTimer', this.startTimer.bind(this));
    eventBus.$on('stopTimer', this.stopTimer.bind(this));
  },

  computed: {
    time () {
      const seconds = this.timer.seconds < 10 ? `0${this.timer.seconds}` : this.timer.seconds;
      const minutes = this.timer.minutes < 10 ? `0${this.timer.minutes}` : this.timer.minutes;
      // const hours = this.timer.hours < 10 ? `0${this.timer.hours}` : this.timer.hours;
      return `${minutes} : ${seconds}`;
    }
  },

  methods: {
    startTimer () {
      if (this.timeInterval) {
        clearInterval(this.timeInterval);
      }
      this.timeInterval = setInterval(() => {
        this.timer.seconds++;
        if (this.timer.seconds >= 60) {
          this.timer.seconds = 0;
          this.timer.minutes++;
          if (this.timer.minutes >= 60) {
            this.timer.minutes = 0;
            this.timer.hours++;
          }
        }
      }, 1000);
    },

    stopTimer (keepResults) {
      if (this.timeInterval) {
        !keepResults && this.resetTime();
        clearInterval(this.timeInterval);
      }
    },

    resetTime () {
      this.timer.seconds = 0;
      this.timer.minutes = 0;
      this.timer.hours = 0;
    }
  }
}
</script>

<style lang="scss">

</style>
