<template>
    <div class="home page">
        <banner-com></banner-com>
        <nowplay-com></nowplay-com>
        <upcom-com></upcom-com>
    </div>
</template>

<script>
import banner from './banner.vue'
import nowPlay from './nowPlay.vue'
import upcoming from './upcoming.vue'
export default {
    components :{
        'banner-com' : banner,
        'nowplay-com' : nowPlay,
        'upcom-com' : upcoming
    }
}
</script>

<style>

</style>
