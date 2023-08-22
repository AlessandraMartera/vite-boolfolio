
<script>
export default {
    name: "About",
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/show-api/${this.$route.params}`).then((response) => {
        })

    }
}

</script>

<template>
    <div>
        <h1>
            About
        </h1>
        <router-link :to="{ name: 'home' }">return to Home</router-link>
    </div>
</template>