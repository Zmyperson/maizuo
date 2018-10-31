import axios from 'axios'
export default {
    //https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
    getNowPlay ({commit}) {
        axios({
            method : 'get',
            url : '/v4/api/film/now-playing?page=1&count=7'
        })
        .then((data) => {
            commit('getNowPlay',data.data.data.films)
        })
    },
    updateMovie ({commit},page) {
        axios({
            method : 'get',
            url : '/v4/api/film/now-playing?page='+page+'&count=7'
        })
        .then((data) => {
            commit('getNowPlay',data.data.data.films)
        })
    },
    //https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
    comingMovie ({commit},page) {
        axios({
            method : 'get',
            url : '/v4/api/film/coming-soon?page='+page+'&count=7'
        })
        .then((data) => {
            var data = data.data.data.films
            data.map(item => {
                var getTime = item.premiereAt
                var d = new Date(getTime)
                var m = d.getMonth() + 1
                var day = d.getDate()
                item.date = m + '月' + day + "日上映"
                var week = d.getDay()
                switch (week) {
                    case 0 : {
                        item.week = '星期日'
                        break
                    }
                    case 1 : {
                        item.week = '星期一'
                        break
                    }
                    case 2 : {
                        item.week = '星期二'
                        break
                    }
                    case 3 : {
                        item.week = '星期三'
                        break
                    }
                    case 4 : {
                        item.week = '星期四'
                        break
                    }
                    case 5 : {
                        item.week = '星期五'
                        break
                    }
                    case 6 : {
                        item.week = '星期六'
                        break
                    }
                }
            })
            commit('comingMovie',data)
        })
    }
}