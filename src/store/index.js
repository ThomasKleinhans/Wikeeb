import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from "./modules/auth"
import keycaps from "./modules/keycaps"

// import example from './module-example'

export default store(function () {
  const Store = createStore({
    modules: {
      auth,
      keycaps
    },
    strict: process.env.DEV
  })

  return Store
})
