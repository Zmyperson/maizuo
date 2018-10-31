<template>
    <div id="header">
        <div class="header_left left">
            <a href="##" @click="changToggle()">
                <div class="left"><i class="iconfont">&#xe66d;</i></div>
                <h3 class="left">{{title}}</h3>
            </a>
        </div>
        <div class="header_right right">
            <a href="##" class="left">
                <span>北京</span>
                <i class="iconfont">&#xe612;</i>
            </a>
            <a href="##" class="right"><i class="iconfont">&#xe61a;</i></a>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    methods : {
        ...Vuex.mapMutations({
            changToggle : 'changToggle'
        })
    },
    computed : {
        ...Vuex.mapState({
            title : state => state.title
        })
    }
}
</script>

<style scoped>
    #header{
        width : 100%;
        height: 1rem;
        position: fixed;
        left : 0;
        top : 0;
        background : #282828;
        z-index: 2;
    }
    .header_left{
        width : 5rem;
        height:100%;
        line-height: 1rem;
        text-align: center;
    }
    .header_left>a>div{
        width : .96rem;
        height: 1rem;
        border-right:.02rem solid #222;
    }
    .header_left>a>div>i{
        font-size:.38rem;
        color:#999;
    }
    .header_left>a>h3{
        width : 2.16rem;
        padding:0 .28rem;
        height: 1rem;
        font-size : .28rem;
        color : #efefef;
        font-weight:normal;
    }
    .header_right{
        width : 2.08rem;
        height:100%;
    }
    .header_right>a:nth-child(1){
        width : .88rem;
        padding : 0 .12rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#999;
        font-size: .28rem;
    }
    .header_right>a:nth-child(2){
        width:.96rem;
        height:100%;
        text-align: center;
        line-height: 1rem;
        color: #999;
    }
    .header_right>a:nth-child(2)>i{
        font-size: .38rem;
        font-weight: bold;
    }
</style>
