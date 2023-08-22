import { createRouter, createWebHistory } from 'vue-router';


import About from './pages/About.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        }
    ]
});
 
export { router };