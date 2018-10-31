<template>
    <div id="app">
        <header-com></header-com>
        <mask-com></mask-com>
        <sidebar-com></sidebar-com>
        <router-view></router-view>
    </div>
</template>

<script>
import header from './components/common/header.vue'
import sidebar from './components/common/sidebar.vue'
import mask from './components/common/mask.vue'

export default {
    components : {
        'header-com' : header,
        'sidebar-com' : sidebar,
        'mask-com' : mask
    }
}
</script>

<style>
    #app{
        width:100%;
        height:100%;
    }
    .left{
        float:left;
    }
    .right{
        float: right;
    }
    .page{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top:1rem;
        overflow: auto;
    }
</style>
