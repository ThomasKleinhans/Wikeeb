import { getNextItemsOfCollection } from "src/services/firebase/db";

const state = {
  allKeycaps: [],
  lastKeycapsId: null
};

const getters = {
  getAllKeycaps: (state) => state.allKeycaps,
  getLastKeycaps: (state) => state.lastKeycapsId
};

const actions = {
  async getKeycapsFromDB({ commit }) {
    const $fb = this.$fb;
    commit("resetKeycaps")
    $fb.getCollection("keycaps").then((response) => {
      response.forEach((doc) => {
        commit("addKeycaps", doc.data())
      });
    });
  },
  async getInitalKeycapsFromDB({commit}){
    commit("resetKeycaps")
    this.$fb.getBeginningOfCollection("keycaps").then((response) =>{
      const responseSize = response?.docs.length
      if(responseSize > 2){
        response.forEach((doc) => {
          commit("addKeycaps", doc.data())
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
          commit("addKeycaps", doc.data())
        });
        commit("setLastKeycapsVisible", response.docs[responseSize - 1].id)
      }
    })
  }
};

const mutations = {
  addKeycaps(state, data) {
    state.allKeycaps.push(data)
  },
  resetKeycaps(state){
    state.allKeycaps = []
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
