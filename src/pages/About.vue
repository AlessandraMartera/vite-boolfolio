
<script>
export default {
    name: "About"
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