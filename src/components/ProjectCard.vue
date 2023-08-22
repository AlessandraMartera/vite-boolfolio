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

        {{ details.id }} --
        {{ details.name }}

        <ul>
            <li v-for="technology in details.technologies">
                {{ technology.name }}
            </li>
        </ul>

    </div>
</template>

<style scoped></style>
