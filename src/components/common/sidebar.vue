<template>
    <transition name="side">
        <div class="sidebar" v-show="toggle" @click="changToggle()">
            <ul>
                <li v-for="(item,index) in bar">
                    <router-link :to="item.path">
                        {{item.title}}
                        <i class="iconfont right">&#xe616;</i>
                    </router-link>
                    
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
import Vuex from 'vuex'
export default {
    computed : {
        ...Vuex.mapState({
            toggle : state => state.toggle,
            bar : state =>state.bar
        })
    },
    methods : {
        ...Vuex.mapMutations({
            changToggle : 'changToggle'
        })
    }
}
</script>

<style scoped>
    .side-enter-to{
        transform: translateX(0)
    }
    .side-enter,.side-leave-to{
        transform: translateX(-100%)
    }
    .side-enter-active,.side-leave-active{
        transition: all 300ms;
    }
    .sidebar{
        width: 5.3rem;
        height:100%;
        position: absolute;
        left:0;
        top:1rem;
        border-top : .02rem solid #222;
        background:#282828;
        z-index: 10;
    }
    .sidebar>ul>li{
        width:5.3rem;
        height:1rem;
        box-sizing: border-box;
        padding: 0 .3rem 0 .35rem;
        border-bottom:.02rem dotted #333; 
        line-height: 1rem;
    }
    .sidebar>ul>li i{
        color: #666;
    }
    .sidebar a {
        display: block;
        width:100%;
        height: 100%;
        color : #9a9a9a;
        font-size : .28rem;
    }
</style>
