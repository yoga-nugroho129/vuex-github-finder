import Axios from 'axios'

const state = {
  users: [],
  user: {},
  repos: [],
  loading: false,
}

const getters = {
  allUsers: (state) => state.users,
  statusLoading: (state) => state.loading,
  userDetails: (state) => state.user,
  userRepos: (state) => state.repos,
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

  async getUserDetails({ commit }, username) {
    commit('clearUser')
    commit('setLoading', true)

    const response = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )

    commit('setUser', response.data)
    commit('setLoading', false)
  },

  async getUserRepos({ commit }, username) {
    commit('setLoading', true)

    const response = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )

    commit('setRepos', response.data)
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
  setUser: (state, user) => (state.user = user),
  clearUser: (state) => (state.user = {}),
  setRepos: (state, repos) => (state.repos = repos),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
