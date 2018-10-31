import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import home from './home'
import movie from './movie'

Vue.use(Vuex)

const state = {
    toggle : false,
    title : '卖座电影',
    film : {},
    bar : [
        {
            path : '/home',
            title : '首页'
        },
        {
            path : '/movie',
            title : '影片'
        },
        {
            path : '/cinema',
            title : '影院'
        },
        {
            path : '#',
            title : '商城'
        },
        {
            path : '#',
            title : '我的'
        },
        {
            path : '#',
            title : '卖座卡'
        }
    ]
}

const mutations = {
    changToggle (state) {
        state.toggle = !state.toggle
    },
    changeTitle (state) {
        state.title = '卖座电影'
    },
    getMovieById (state,film) {
        state.title = film.name
        state.film = film
    },

}

const getters = {

}

const actions = {
    getMovieById ({commit},id) {
        axios({
            method : 'get',
            url : '/v4/api/film/'+id,
            data : {
                __t : new Date().getTime()
            }
        })
        .then((data) => {
            var data = data.data.data.film
            var getTime = data.premiereAt
            var d = new Date(getTime)
            var m = d.getMonth() + 1
            var day = d.getDate()
            data.date = m + '月' + day + '日上映'
            commit('getMovieById',data)
        })
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules : {
        home,
        movie
    }
})

export default store