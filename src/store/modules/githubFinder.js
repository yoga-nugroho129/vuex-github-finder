import Axios from 'axios'

const state = {
  users: [],
  user: {},
  loading: false,
}

const getters = {
  allUsers: (state) => state.users,
  statusLoading: (state) => state.loading
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
}

const mutations = {
  setLoading: (state, status) => (state.loading = status),
  displayUsers: (state, users) => (state.users = users)
}

export default {
  state,
  getters,
  actions,
  mutations,
}
