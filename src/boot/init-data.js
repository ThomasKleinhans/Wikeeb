import { boot } from 'quasar/wrappers'
import firebaseServices from "./../services/firebase"

export default boot(async ({app, router, store, Vue}) => {
    store.dispatch("getInitalKeycapsFromDB")
})