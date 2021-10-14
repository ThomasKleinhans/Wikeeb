import { firestoreAction } from 'vuexfire'
import FirebaseServices from "../../services/firebase"

const state = {
    currentUser: {
      favoritesKeycaps: []
    }
  };
  
  const getters = {
    getFavoritesKeycaps: (state) => state.currentUser.favoritesKeycaps,
  };
  
  const actions = {
    async addKeycapsToFavorties({commit, state}, data){
      const $fb = this.$fb
      const { keycapsUID, userUID } = data
      if(state.currentUser.favoritesKeycaps.includes(keycapsUID)){
        $fb.removeFavoriteKeycapsToUser(state.currentUser.id, keycapsUID)
        .then(()=>{
          commit('removeKeycapToFavorite', keycapsUID)
          console.log('rempve from your favorites')
        })
      }
      else{
        $fb.addFavoriteKeycapsToUser(state.currentUser.id, keycapsUID)
        .then(()=>{
          commit('addKeycapToFavorite', keycapsUID)
          console.log('add to your favorites')
        })
      }
    },
    bindCurrentUser : firestoreAction(({ bindFirestoreRef }, userId) => {
      return bindFirestoreRef('currentUser', FirebaseServices.docRef("users", userId))
    })
  }
  
  const mutations = {
    addKeycapToFavorite(state, keycapsUID) {
      state.currentUser.favoritesKeycaps.push(keycapsUID)
    },
    removeKeycapToFavorite(state, keycapsUID){
      state.currentUser.favoritesKeycaps = state.currentUser.favoritesKeycaps.filter(e => e != keycapsUID)
    },
    setFavoritesKeycaps(state, favorites) {
      state.currentUser.favoritesKeycaps = favorites
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  }