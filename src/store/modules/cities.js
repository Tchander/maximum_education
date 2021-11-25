import { getCities } from "@/api/citiesApi";

export default {
  namespaced: true,
  actions: {
    async getCities({ commit }) {
      try {
        const { data } = await getCities();
        commit("updateCities", data);
      } catch (e) {
        console.log(e);
      }
    },
    changeIsOnline({ commit }, data) {
      try {
        commit("updateIsOnline", data);
      } catch (e) {
        console.log(e);
      }
    },
    changeCurrentCity({ commit }, data) {
      try {
        commit("updateCurrentCity", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateCities(state, payload) {
      state.cities = [...payload];
    },
    updateIsOnline(state, payload) {
      state.isOnline = payload;
    },
    updateCurrentCity(state, payload) {
      state.currentCity = payload;
    },
  },
  getters: {
    cities: (state) => state.cities,
    currentCity: (state) => state.currentCity,
    isOnline: (state) => state.isOnline,
  },
  state: {
    cities: [],
    currentCity: "Выберите город",
    isOnline: false,
  },
};
