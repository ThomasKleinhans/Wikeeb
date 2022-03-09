const state = {
  allKeycaps: [],
  filteredKeycaps:[],
  lastKeycapsId: null
};

const getters = {
  getAllKeycaps: (state) => state.allKeycaps,
  getLastKeycaps: (state) => state.lastKeycapsId,
  getFavoriteKeycaps: (state, getters) => state.allKeycaps.filter(item => getters.getFavoritesKeycaps.includes(item.id)),
  getFilteredKeycaps: (state) => state.filteredKeycaps,
  getKeycapsById: (state) => (id) => {
    return state.allKeycaps.filter(item => item.id == id)[0]
  }
};

const actions = {
  async getKeycapsFromDB({ commit }) {
    const $fb = this.$fb;
    commit("resetKeycaps")
    $fb.getCollection("keycaps").then((response) => {
      response.forEach((doc) => {
        const data = {id: doc.id, data: doc.data()}
        commit("addKeycaps", data)
      });
    });
  },
  async getInitalKeycapsFromDB({commit}){
    commit("resetKeycaps")
    this.$fb.getBeginningOfCollection("keycaps").then((response) =>{
      const responseSize = response?.docs.length
      if(responseSize > 2){
        response.forEach((doc) => {
          const data = {id: doc.id, data: doc.data()}
          commit("addKeycaps", data)
        });
        commit("setLastKeycapsVisible", response.docs[responseSize - 1].id)
      }
    })
  },
  async getNextKeycapsFromDB({commit, getters}){
    this.$fb.getNextItemsOfCollection("keycaps", getters.getLastKeycaps).then((response) => {
      const responseSize = response?.docs.length
      if(responseSize > 2){
        response.forEach((doc) => {
          const data = {id: doc.id, data: doc.data()}
          commit("addKeycaps", data)
        });
        commit("setLastKeycapsVisible", response.docs[responseSize - 1].id)
      }
    })
  },
  async fetchFilteredKeycaps({commit}, filters){
    commit("resetFilteredKeycaps")
    this.$fb.getFilteredItemsOfCollection("keycaps", filters)
    .then((response) =>{
      const responseSize = response?.docs.length
      if(responseSize > 0){
        response.forEach((doc) => {
          const data = {id: doc.id, data: doc.data()}
          commit("addFilteredKeycaps", data)
        });
      }
      else{
        "No result to the request"
      }
    })
  }
};

const mutations = {
  addKeycaps(state, response) {
    response.data.id = response.id
    state.allKeycaps.push(response.data)
  },
  addFilteredKeycaps(state, response) {
    response.data.id = response.id
    state.filteredKeycaps.push(response.data)
  },
  resetKeycaps(state){
    state.allKeycaps = []
  },
  resetFilteredKeycaps(state){
    state.filteredKeycaps = []
  },
  setLastKeycapsVisible(state, data){
    state.lastKeycapsId = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
