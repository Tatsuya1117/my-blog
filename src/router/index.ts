import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/HomeView.vue')
// const About = () => import('../views/Aboutview.vue')
const ArticleDetail = () => import('../views/ArticleDetail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/About',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/articles/:id',
    name: 'article-detail',
    component: ArticleDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
