<template>
    <div class="movielist wrapper">
        <ul class="content">
            <li v-for="item in nowplay" @click="goDetail(item.id)">
                <img :src="item.poster.origin" class="left">
                <div class="info left">
                    <p>{{item.name}}</p>
                    <p>{{item.intro}}</p>
                    <p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
                </div>
                <div class="grade right">{{item.grade}}<span>></span></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
import BScroll from 'better-scroll'
export default {
    created () {
        this.getNowPlay()
    },
    mounted () {
        this.scroll = new BScroll('.wrapper',{
            click : true
        })
    },
    updated () {
        this.scroll.refresh()
        this.scroll.on('scrollEnd',() => {
            if (this.page<7 && this.bStop) {
                this.bStop = false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                setTimeout(()=>{
                    this.updateMovie(this.page++)
                    this.bStop = true 
                },3000)
            }
        })  
    },
    data () {
        return {
            page : 2,
            bStop : true
        }
    },
    methods : {
        ...Vuex.mapActions({
            getNowPlay : 'movie/getNowPlay',
            updateMovie : 'movie/updateMovie'
        }),
        goDetail (id) {
            this.$router.push({name:'detail',params:{id}})
        }
    },
    computed : {
        ...Vuex.mapState({
            nowplay : state => state.movie.nowplay
        })
    }
}
</script>

<style scoped>
    .wrapper{
        height: 100%;
        overflow: hidden;
    }
    .movielist>ul>li{
        height:1.7rem;
        padding:.4rem 0;
        border-bottom: dashed 1px #c9c9c9;
        position : relative;
    }
    .movielist>ul>li>img{
        width : 1.2rem;
        height: 1.68rem;
    }
    .movielist>ul>li .info{
        height: 1.68rem;
    }
    .movielist>ul>li .info>p{
        text-indent: .3rem;
        height: .48rem;
        line-height: .48rem;
        color: #8e8e8e;
    }
    .movielist>ul>li .info>p:nth-child(1){
        height: .64rem;
        color: #000;
        font-size: .32rem;
    }
    .movielist>ul>li>.grade{
        position: absolute;
        right : .3rem;
        font-size: .32rem;
        line-height: .64rem;
        color: #fc7103;
        font-weight: bold;
    }
    .movielist>ul>li>.grade>span{
        color: #c6c6c6;
        line-height: .58rem;
        margin-left:.1rem;
    }
</style>
