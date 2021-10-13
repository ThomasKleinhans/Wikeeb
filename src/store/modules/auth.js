const state = {
  isAuthenticated: false,
  uid: null,
};

const getters = {
  getAuthStatus: (state) => state.isAuthenticated,
  getUserUID: (state) => state.uid
};

const actions = {
  async loginUser({commit}, data){
    const $fb = this.$fb
    const { email, password } = data
    return new Promise((resolve) => {
      $fb.loginWithEmail(email, password)
      .then((response) => {
          commit('setUserToken', response)
          console.log("Successfully logged in")
          resolve("/private")
      })
      .catch((error) => {
        console.error(error)
        resolve("/")
      })
    })
  },
  async registerUser({commit}, data) {
    const $fb = this.$fb
    const {name, email, password} = data
    return new Promise((resolve) => {
      $fb.registerUser(email, password)
      .then((response) => $fb.addUserData(response.user.uid, name, email)
      .then(() => {
        console.log("Account successfully added")
        this.loginUser({email, password})
        .then(() => resolve('/private'))
        .catch(() => resolve('/'))
      }))
      .catch((error) => {
        resolve('/')
        console.error(error)
      })
    })
  },  
  async logoutUser({commit}){
    const $fb = this.$fb
    $fb.logOut()
    .then((response) => {
        commit('destroyUser')
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

const mutations = {
  setUserToken(state, user) {
    state.isAuthenticated = true
    state.uid = user.uid
  },
  destroyUser(state) {
    state.isAuthenticated = false
    state.uid = ""
  },  
};

export default {
  state,
  getters,
  actions,
  mutations
}