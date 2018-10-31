<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgs" @click="goDetail(item.id)">
                    <img :src="item.imageUrl">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
export default {
    created () {
        this.getBanner()
    },
    computed : {
        ...Vuex.mapState({
            imgs : state => state.home.imgs
        })
    },
    methods : {
        ...Vuex.mapActions({
            getBanner : 'home/getBanner'
        }),
        goDetail (id) {
            this.$router.push({name:'detail',params:{id}})
        }
    },
    watch:{
          imgs(){
              this.$nextTick(()=>{
                   //swiper的使用
                    var mySwiper = new Swiper ('.swiper-container', {
                        loop: true, 
                        autoplay:{
                            disableOnInteraction: false,
                        },
                        pagination: {
                        el: '.swiper-pagination',
                        },
                    })  
              })
           }
    },
}
</script>

<style>
    img{
        width:100%;
    }
</style>
