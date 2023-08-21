<script >
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
    components: {
        HelloWorld
    },
    data: function () {
        return {
            projects: [],

        }
    },

    mounted() {

        axios.get("http://127.0.0.1:8000/api/project-api")
            .then(response => {

                this.projects = response.data.result.data;
                console.log(this.projects);
                // const data = response;

                // this.projects = data.data.result;
                // console.log(data);
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <div v-for="project in projects">

        {{ project.id }} --
        {{ project.name }}

        <ul>
            <li v-for="technology in project.technologies">
                {{ technology.name }}
            </li>
        </ul>

    </div>
    <HelloWorld />
</template>

<style scoped></style>
