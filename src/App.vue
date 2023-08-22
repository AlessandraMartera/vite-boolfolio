<script >
import HeaderCompo from './components/HeaderCompo.vue'

export default {
    components: {
        HeaderCompo
    },
}
</script>

<template>
    <div class="container-fluid align-center">
        <HeaderCompo />

        <router-view></router-view>
    </div>
</template>
