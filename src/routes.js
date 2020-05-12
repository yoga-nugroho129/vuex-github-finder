import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import UserDetails from './components/pages/UserDetails.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:username', component: UserDetails },
]
