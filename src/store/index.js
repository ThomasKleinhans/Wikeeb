import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from "./modules/auth"
import keycaps from "./modules/keycaps"
import user from "./modules/user"
import { vuexfireMutations } from 'vuexfire'

export default store(function () {
  const Store = createStore({
    modules: {
      auth,
      keycaps,
      user
    },
    mutations: {
      ...vuexfireMutations
    },
    strict: process.env.DEV
  })

  return Store
})
