
<script>
import axios from 'axios';
export default {
    name: "About",
    data() {
        return {
            projects: {},
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/show-api/${this.$route.params.id}`)
            .then((response) => {

                this.projects = response.data.result;
                console.log(this.projects);

            })


    }
}

</script>

<template>
    <div>
        <h3>
            About
        </h3>
        <h1>
            {{ projects.name }}
        </h1>


        <div v-if="projects.completed" class="badge text-bg-success">
            completed
        </div>

        <div v-else class="badge text-bg-warning">
            work in progress...
        </div>

        <hr>
        <h3>description:</h3>
        <p>{{ projects.decription }}</p>
        <hr>

        <!-- Relationship many to many -->
        this project implemented by technologies:
        <ul>
            <li v-for="  technology   in   projects.technologies  ">
                {{ technology.name }}
            </li>
        </ul>

        <router-link :to="{ name: 'home' }">return to Home</router-link>
    </div>
</template>