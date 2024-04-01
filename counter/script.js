Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    resetCounter: function () {
      this.count = 0;
    },
  },
}).mount("#app");
