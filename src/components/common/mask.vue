<template>
    <div class="mask"  v-show="toggle">

    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
     computed : {
        ...Vuex.mapState({
            toggle : state => state.toggle,
        })
    }
}
</script>

<style scoped>
    .mask{
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:1rem;
        background:rgba(0,0,0,.5);
    }
</style>
