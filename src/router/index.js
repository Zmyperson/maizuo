import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import cinema from '../components/cinema/cinema.vue'
import movie from '../components/movie/movie.vue'
import playing from '../components/movie/playing.vue'
import coming from '../components/movie/coming.vue'
import detail from '../components/common/detail.vue'

Vue.use(Router)

export default new Router({
  routes : [
    {
      path : '/',
      redirect : '/home'
    },
    {
      path : '/home',
      name : 'home',
      component : home
    },
    {
      path : '/movie',
      name : 'movie',
      component : movie,
      redirect : '/movie/playing',
      children : [
        {
          name : 'playing',
          path : 'playing',
          component : playing
        },
        {
          name : 'coming',
          path : 'coming',
          component : coming
        }
      ]
    },
    {
      path : '/cinema',
      name : "cinema",
      component : cinema
    },
    {
      name : 'detail',
      path : '/detail/:id',
      component : detail
    }
  ]
})
