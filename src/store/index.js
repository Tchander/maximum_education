import Vue from "vue";
import Vuex from "vuex";
import cities from "./modules/cities";
import appeals from "./modules/appeals";
import description from "./modules/description";
import file from "@/store/modules/file";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    appeals,
    description,
    file,
  },
});
