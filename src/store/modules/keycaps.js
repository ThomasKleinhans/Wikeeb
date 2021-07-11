const state = {
  allKeycaps: [],
};

const getters = {
  getAllKeycaps: (state) => state.allKeycaps,
};

const actions = {
  async getKeycapsFromDB({ commit }) {
    const $fb = this.$fb;
    commit("resetKeycaps")
    $fb.getCollection("keycaps").then((response) => {
      response.forEach((doc) => {
        commit("addKeycaps", doc.data());
      });
    });
  },
};

const mutations = {
  addKeycaps(state, data) {
    state.allKeycaps.push(data)
  },
  resetKeycaps(state){
    state.allKeycaps = []
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
