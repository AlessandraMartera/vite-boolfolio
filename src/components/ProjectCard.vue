<script>

export default {
    name: 'PorjectCard',
    props: {
        details: Object
    },

}



</script>

<template>
    <div>

        <router-link :to="{ name: 'about' }">more details</router-link>

        {{ details.id }} --
        {{ details.name }}



        <ul>
            <li v-for=" technology in details.technologies">
                {{ technology.name }}
            </li>
        </ul>

    </div>
</template>

<style scoped></style>
