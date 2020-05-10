import Axios from 'axios'

const state = {
  users: [],
  user: {},
  loading: false,
}

const getters = {
  allUsers: (state) => state.users,
  statusLoading: (state) => state.loading,
}

const actions = {
  async fetchUsers({ commit }) {
    commit('setLoading', true)

    const response = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )

    commit('displayUsers', response.data)
    commit('setLoading', false)
  },

  async searchUsers({ commit }, text) {
    commit('clearUsers')
    commit('setLoading', true)

    const response = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )

    commit('displayUsers', response.data.items)
    commit('setLoading', false)
  },

  clearResults({ commit }) {
    commit('clearUsers')
  },
}

const mutations = {
  setLoading: (state, status) => (state.loading = status),
  displayUsers: (state, users) => (state.users = users),
  clearUsers: (state) => (state.users = []),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
