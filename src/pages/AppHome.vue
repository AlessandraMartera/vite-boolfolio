<script >
import ProjectCard from '../components/ProjectCard.vue'
import axios from 'axios'
export default {
    name: 'AppHome',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            pages: [],
        };
    },

    methods: {

        loadPage(target) {

            if (target == null) return;

            this.loadProjects(target);
        },
        loadProjects(i) {
            axios.get(i)
                .then(response => {

                    this.projects = response.data.result.data;
                    // console.log(this.projects);
                    // const data = response;

                    this.pages = response.data.result.links
                    // this.projects = data.data.result;
                    // console.log(this.pages);
                }).catch(error => {
                    console.log(error);
                })

        }

    },
    mounted() {
        this.loadProjects('http://127.0.0.1:8000/api/project-api');
    }
}
</script>

<template>
    <div class="m-5 d-flex justify-content-between p-5">
        <ProjectCard class="card" v-for="(project, idx)  in projects" :details="project" :key="idx" />
    </div>
    <div class="my-5">
        <ul class="pageList">
            <li v-for="page in pages">

                <div :class="(page.url === null) ? 'hidden' : ''" v-html="page.label" role="button"
                    @click="loadPage(page.url)">
                </div>
            </li>
        </ul>

    </div>
</template>

<style scoped lang="scss">
.container {
    margin: 20px;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    .card {
        padding: 10px;
        border: 1px gray solid;
        border-radius: 15px;
    }
}

.pageList {
    width: fit-content;
    margin: 5px auto;
    list-style: none;
    display: flex;

    li {
        margin: 0 20px;
        cursor: pointer;
    }

    .hidden {
        display: none;
    }
}
</style>