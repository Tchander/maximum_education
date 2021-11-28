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
      state.inputAppeal = "";
      state.selectedAppeal = payload;
      state.outputAppealData = state.selectedAppeal;
    },
    updateInputAppeal(state, payload) {
      if (state.selectedAppeal !== "") {
        state.selectedAppeal = "";
      }
      state.inputAppeal = payload;
      state.outputAppealData = state.inputAppeal;
    },
  },
  getters: {
    selectedAppeal: (state) => state.selectedAppeal,
    inputAppeal: (state) => state.inputAppeal,
    outputAppealData: (state) => state.outputAppealData,
  },
  state: {
    selectedAppeal: "",
    inputAppeal: "",
    outputAppealData: "",
  },
};
