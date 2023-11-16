import { createStore } from 'vuex'
import AuthModule from "./Auth";
import UserModule from "./User";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth: AuthModule,
    User: UserModule,
  }
})
