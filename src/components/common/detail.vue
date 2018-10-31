<template>
    <div class="detail page" v-if="film.name">
        <div class="pic">
            <img :src="film.cover.origin">
        </div>
        <div class="info">
            <h3 class="film-info">影片简介</h3>
            <p class="filmword">
                <span>导&nbsp;&nbsp;演:</span>
                <span>{{film.director}}</span>
            </p>
            <p class="filmword">
                <span>主&nbsp;&nbsp;演:</span>
                <span v-for="item in film.actors">{{item.name}}</span>
            </p>
            <p class="filmword">
                <span>地区语言:</span>
                <span>{{film.nation}}({{film.language}})</span>
            </p>
            <p class="filmword">
                <span>类&nbsp;&nbsp;型:</span>
                <span>{{film.category}}</span>
            </p>
            <p class="filmword">
                <span>上映日期:</span>
                <span>{{film.date}}</span>
            </p>
            <p class="filmcons">{{film.synopsis}}</p>
        </div>
        <div class="buyticket">
            <button class="buy">立即购票</button>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    created () {
        var id = this.$route.params.id
        this.getMovieById(id)
    },
    data () {
        return {

        }
    },
    methods : {
        ...Vuex.mapActions({
            getMovieById : 'getMovieById'
        }),
        ...Vuex.mapMutations({
            changeTitle : 'changeTitle'
        })
    },
    computed : {
        ...Vuex.mapState({
            title : state => state.title,
            film : state => state.film
        })
    },
    beforeRouteLeave (to,from,next) {
        this.changeTitle()
        next()
    }
}
</script>

<style scoped>
    .detail{
        background: #eee;
    }
    .pic{
        width: 100%;
        height : 4.2rem;
    }
    .pic>img{
        width : 100%;
        height: 100%;
    }

    .info{
        overflow: hidden;
    }
    .film-info{
        margin: .32rem auto;
        border-left: .32rem solid RGB(228, 200, 156);
        font-size: .32rem;
        padding-left: .08rem;
        font-weight: normal;
        line-height: .48rem;
    }
    .filmword{
        height: .36rem;
        overflow: hidden;
        margin-bottom: .2rem;
        padding-left: .2rem;
        line-height: .36rem;
    }
    .filmcons{
        text-overflow: ellipsis;
        margin-bottom: 80px;
        padding-left: 20px;
        padding-right: 20px
    }

    .buyticket{
        position: fixed;
        left: 0;
        bottom: .4rem;
        width: 100%;
        text-align: center;
    }
    .buyticket>.buy{
        font-size: .28rem;
        min-width: 3.12rem;
        height: .72rem;
        line-height: .72rem;
        border: none;
        background-color: #fe8233;
        padding: 0;
        margin: 0;
        border-radius: 36px;
        color: #fff;
        transition: 0.5s ease;
        outline: none;
    }
</style>
