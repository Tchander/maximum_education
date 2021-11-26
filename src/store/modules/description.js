export default {
  namespaced: true,
  actions: {
    changeDescription({ commit }, data) {
      try {
        commit("updateDescription", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateDescription(state, payload) {
      state.description = payload;
    },
  },
  getters: {
    description: (state) => state.description,
  },
  state: {
    description: "",
  },
};
