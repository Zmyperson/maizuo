<template>
    <div class="coming wrapper">
        <ul class="content">
            <li v-for="item in moremovie" @click="goDetail(item.id)">
                <img :src="item.poster.origin" class="left">
                <div class="info left">
                    <p>{{item.name}}</p>
                    <p>{{item.intro}}</p>
                    <p>{{item.date}} {{item.week}}</p>
                </div>
                <div class="grade right"><span>></span></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
import BScroll from 'better-scroll'
export default {
    created () {
        this.comingMovie()
    },
    mounted () {
        this.scroll = new BScroll('.wrapper',{
            click : true
        })
    },
    updated () {
        this.scroll.refresh()
        this.scroll.on('scrollEnd',() => {
            if (this.page<11 && this.bStop) {
                this.bStop = false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                setTimeout(()=>{
                    this.comingMovie(this.page++)
                    this.bStop = true 
                },1000)
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
            comingMovie : 'movie/comingMovie'
        }),
        goDetail (id) {
            this.$router.push({name:'detail',params:{id}})
        }
    },
    computed : {
        ...Vuex.mapState({
            moremovie : state => state.movie.moremovie
        })
    }
}
</script>

<style scoped>
    .wrapper{
        height: 100%;
        overflow: hidden;
    }
    .coming>ul>li{
        height:1.7rem;
        padding:.4rem 0;
        border-bottom: dashed 1px #c9c9c9;
        position : relative;
    }
    .coming>ul>li>img{
        width : 1.2rem;
        height: 1.68rem;
    }
    .coming>ul>li .info{
        width:5.2rem;
        height: 1.68rem;
    }
    .coming>ul>li .info>p{
        text-indent: .3rem;
        height: .48rem;
        line-height: .48rem;
        color: #8e8e8e;
        text-overflow: ellipsis;
        white-space : nowrap;
        overflow: hidden;
    }
    .coming>ul>li .info>p:nth-child(1){
        height: .64rem;
        color: #000;
        font-size: .32rem;
    }
    .coming>ul>li .info>p:nth-child(3){
        color: #ffb375;
    }
    .coming>ul>li>.grade{
        position: absolute;
        right : .3rem;
    }
    .coming>ul>li>.grade>span{
        color: #c6c6c6;
        line-height: .58rem;
        margin-left:.1rem;
    }
</style>
