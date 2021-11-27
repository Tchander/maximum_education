import { getCities } from "@/api/citiesApi";
import { CHOOSE_CITY } from "@/const";

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
      if (state.isOnline) {
        state.outputCityData = state.currentCity;
      } else {
        state.outputCityData = "Онлайн";
      }
      state.isOnline = payload;
    },
    updateCurrentCity(state, payload) {
      if (!state.isOnline) {
        state.outputCityData = payload;
      }
      state.currentCity = payload;
    },
  },
  getters: {
    cities: (state) => state.cities,
    currentCity: (state) => state.currentCity,
    isOnline: (state) => state.isOnline,
    outputCityData: (state) => state.outputCityData,
  },
  state: {
    cities: [],
    currentCity: CHOOSE_CITY,
    isOnline: false,
    outputCityData: CHOOSE_CITY,
  },
};
