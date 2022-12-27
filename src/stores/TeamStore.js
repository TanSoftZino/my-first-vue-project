import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    slots: 0,
    members: [],
  }),
  actions: {
    // fill() {
    //     import('../team.json').then(r=> {
    //         let data = r.default;
    //         this.name = data.name;
    //         this.spots = data.spots;
    //     });
    async fill() {
      let r = await import('../team.json');
      this.$state = r.default;
    },

    growTo25() {
      this.slots = 25;
    }
  },
  getters: {
    spotsAvailable() {
      return this.spots - this.members.length;
    },
  }

});
