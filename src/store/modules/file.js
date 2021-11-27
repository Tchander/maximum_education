export default {
  namespaced: true,
  actions: {
    changeFile({ commit }, data) {
      try {
        commit("updateFile", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateFile(state, payload) {
      state.file = payload;
    },
  },
  getters: {
    file: (state) => state.file,
  },
  state: {
    file: null,
  },
};
