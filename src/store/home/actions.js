import axios from 'axios'
export default {
    getBanner ({commit}) {
        axios({
            method : 'get',
            url : '/v4/api/billboard/home',
            data : {
                __t : new Date().getTime()
            }
        })
        .then((data) => {
            commit('getBanner',data.data.data.billboards)
        })
    },
    getnowPlay ({commit}) {
        axios({
            method : 'get',
            url : '/v4/api/film/now-playing?page=1&count=5',
            data : {
                __t : new Date().getTime()
            }
        })
        .then((data) => {
            commit('getnowPlay',data.data.data.films)
        })
    },
    getUpmovie ({commit}) {
        axios({
            method : 'get',
            url : '/v4/api/film/coming-soon?page=1&count=3',
        })
        .then((data) => {
            var data = data.data.data.films
            data.map(item => {
                var getTime = item.premiereAt
                var d = new Date(getTime)
                var m = d.getMonth() + 1
                var day = d.getDate()
                item.date = m + '月' + day + "日上映"
            })
            commit('getUpmovie', data)
        })
    }
}