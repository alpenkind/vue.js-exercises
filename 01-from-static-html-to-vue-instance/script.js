Vue.createApp({
  data() {
    return {
      userName: "Jon Doe",
      currentDate: new Date(),
    };
  },
  methods: {
    updateDate() {
      this.currentDate = new Date();
    },
  },
}).mount("#app");
