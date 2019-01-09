const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const state = {
  isLoggedIn: false,
  pending: false
}

const mutations = {
  [LOGIN](state) {
    state.pending = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
  }
}
const actions = {
  login({ commit }, creds) {
    commit(LOGIN); // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        // localStorage.setItem("token", "JWT");
        commit(LOGIN_SUCCESS);
        resolve();
      }, 1000);
    });
  },
  logout({ commit }) {
    // localStorage.removeItem("token");
    commit(LOGOUT);
  }
}

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
