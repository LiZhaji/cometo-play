import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import action from "./action"
import mutation from "./mutation"
import getter from "./getter"

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  action,
  mutation,
  getter
})
