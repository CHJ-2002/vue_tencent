import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Introduce from '../views/Introduce.vue'
import Business from '../views/Business.vue'
import Staff from '../views/Staff.vue'
import ESG from '../views/ESG.vue'
import Investor from '../views/Investor.vue'
import Media from '../views/Media.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Home' },
  {
    path: '/', component: Main, children: [
      { path: '/Home', component: Home, name: 'home' },
      { path: '/Introduce', component: Introduce, name: 'Introduce' },
      { path: '/Business', component: Business, name: 'Business' },
      { path: '/Staff', component: Staff, name: 'Staff' },
      { path: '/ESG', component: ESG, name: 'ESG' },
      { path: '/Investor', component: Investor, name: 'Investor' },
      { path: '/Media', component: Media, name: 'Media' },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
