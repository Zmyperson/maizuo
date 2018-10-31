<template>
    <div class="nowplay">
        <ul>
            <li v-for="(item,index) in nowPlay" @click="goDetail(item.id)">
                <img :src="item.cover.origin">
                <div class="info">
                    <div class="info_left">
                        <p>{{item.name}}</p>
                        <p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
                    </div>
                    <div class="info_right">{{item.grade}}</div>
                </div>
            </li>
            <div class="more">更多热映电影</div>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    created () {
        this.getnowPlay()
    },
    methods : {
        ...Vuex.mapActions({
            getnowPlay : 'home/getnowPlay'
        }),
        goDetail (id) {
            this.$router.push({name:'detail',params:{id}})
        }
    },
    computed : {
       ...Vuex.mapState({
           nowPlay : state => state.home.nowPlay
       }) 
    },
}
</script>

<style scoped>
    .nowplay{
        background: #eee;
        overflow: hidden;
    }
    .nowplay li {
        margin: .34rem;
        width: 6.82rem;
        height: 4.84rem;
        background: #fff;
        box-shadow: 0.5px 0.5px 1px #a8a8a8
    }
    .info{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info_left>p{
        text-indent: .2rem;
    }
    .info_left>p:nth-child(2){
        padding-top: .1rem;
        color: #9a9a9a;
    }
    .info_right{
        color: #f78360;
        line-height: 1rem;
        margin-right: .3rem;
        font-size: .36rem;
    }
    .more{
        width: 3.2rem;
        height: .6rem;
        border: 2px solid #aaa;
        border-radius: 30px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: .6rem;
        font-size: .24rem;
        color: #616161;
        cursor: pointer;
    }
</style>
