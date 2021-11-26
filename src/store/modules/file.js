export default {
  namespaced: true,
  actions: {
    changeFileUrl({ commit }, data) {
      try {
        commit("updateFileUrl", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateFileUrl(state, payload) {
      state.fileUrl = payload;
    },
  },
  getters: {
    fileUrl: (state) => state.fileUrl,
  },
  state: {
    fileUrl: "",
  },
};
