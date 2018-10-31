<template>
    <div class="upcoming">
        <div class="line">
            <div class="tit">即将上映</div>
        </div>
        <ul>
            <li v-for="item in upMovie" @click="goDetail(item.id)">
                <img :src="item.cover.origin">
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.date}}</p>
                </div>
            </li>
        </ul>
        <div class="more">更多即将上映电影</div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    created () {
        this.getUpmovie()
    },
    methods : {
        ...Vuex.mapActions({
            getUpmovie : 'home/getUpmovie'
        }),
        goDetail (id) {
            this.$router.push({name:'detail',params:{id}})
        }
    },
    computed : {
        ...Vuex.mapState({
            upMovie : state => state.home.upMovie
        })
    }
}
</script>

<style scoped>
    .upcoming{
        background: #eee;
        overflow: hidden;
    }
    .line{
        height: .2rem;
        position: relative;
        margin-top: .3rem;
        margin-bottom: .6rem;
        border-bottom: 2px solid #a8a8a8;
    }
    .tit{
        width: 1.3rem;
        height: .4rem;
        margin: 0 auto;
        margin-bottom: -20px;
        border-radius: 10px;
        font-size: .2rem;
        line-height: .4rem;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
    }
    .upcoming>ul>li{
        margin: .34rem;
        background: #fff;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
    }
    .upcoming>ul>li>div{
        display: flex;
        height: .7rem;
        padding: 0 .2rem;
        justify-content: space-between;
        align-items: center;
    }
    .upcoming>ul>li>div>p:nth-child(2){
        font-size: .2rem;
        color: RGB(245, 162, 125);
    }
    .upcoming>.more{
        width: 3.2rem;
        height: .6rem;
        border: 2px solid #aaa;
        border-radius: 30px;
        margin: 20px auto 30px;
        text-align: center;
        line-height: .6rem;
        font-size: .24rem;
        color: #616161;
        cursor: pointer;
    }
</style>
