const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      hold: true,
      interval: 0,
    };
  },
  methods: {
    increase() {
      this.count();
    },
    decrease() {
      this.count(up=false);
    },
    reset() {
      this.counter = 0;
    },
    count(up=true) {
      // toggle is as we need the hold to be true (even if set false)
      if (this.hold === false) this.hold = true;
      // we store the interval so that we can clean it further
      this.interval = setInterval(() => {
        if(up === true && this.counter < 10000) {
          this.counter++;
        } else if(up === false) {
          this.counter--;
        }
      }, 100);
    },
    stop() {
      // to stop intervals that stack in the background
      // we remove it
      clearInterval(this.interval);
      this.hold = false;
    }
  },
});

app.mount("#events");
