<script >
import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios'
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],

        };
    },


    mounted() {



        axios.get('http://127.0.0.1:8000/api/project-api')
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
    <div class="container">
        <ProjectCard v-for="(project, idx)  in projects" :details="project" :key="idx" />
    </div>
</template>

<style scoped></style>
