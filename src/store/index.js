import Vue from 'vue'
import Vuex from 'vuex'
import githubFinder from './modules/githubFinder'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: { githubFinder },
})
