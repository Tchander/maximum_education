import Vue from "vue";
import Vuex from "vuex";
import cities from "./modules/cities";
import appeals from "./modules/appeals";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    appeals,
  },
});
