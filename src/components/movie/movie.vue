<template>
    <div class="movie page">
        <div class="tab">
            <router-link :to="{name:'playing'}">正在热映</router-link>
            <router-link :to="{name:'coming'}">即将上映</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .movie{
        padding: 1rem .3rem 0;
        background: #f9f9f9;
    }
    .tab{
        height: .9rem;
        border-bottom : 2px solid #fe6e00;
        display:flex;
    }
    .tab>a{
        display:block;
        width: 50%;
        text-align: center;
        line-height: .9rem;
        font-size:.32rem;
        font-weight: bold;
    }
    .router-link-active{
        color: #fe6e00;
        border-bottom : 2px solid #fe6e00;
    }
</style>
