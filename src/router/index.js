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
import Videos from '../components/Media/Videos.vue'
import Images from '../components/Media/Images.vue'
import Activities from '../components/Media/Activities.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Home' },
  {
    path: '/', component: Main, children: [
      { path: '/home', component: Home, name: 'home' },
      { path: '/introduce', component: Introduce, name: 'introduce' },
      { path: '/business', component: Business, name: 'business' },
      { path: '/staff', component: Staff, name: 'staff' },
      { path: '/esg', component: ESG, name: 'esg' },
      { path: '/investor', component: Investor, name: 'investor' },
      { path: '/media', component: Media, name: 'media', },
      { path: '/media/videos', component: Videos, name: 'videos' },
      { path: '/media/images', component: Images, name: 'images' },
      { path: '/media/activities', component: Activities, name: 'activities' },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
