export default {
  namespaced: true,
  actions: {
    changeSelectedAppeal({ commit }, data) {
      try {
        commit("updateSelectedAppeal", data);
      } catch (e) {
        console.log(e);
      }
    },
    changeInputAppeal({ commit }, data) {
      try {
        commit("updateInputAppeal", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateSelectedAppeal(state, payload) {
      state.selectedAppeal = payload;
    },
    updateInputAppeal(state, payload) {
      state.inputAppeal = payload;
    },
  },
  getters: {
    selectedAppeal: (state) => state.selectedAppeal,
    inputAppeal: (state) => state.inputAppeal,
  },
  state: {
    selectedAppeal: "",
    inputAppeal: "",
  },
};
