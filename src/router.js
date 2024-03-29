import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import About from './pages/About.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/about/:id',
name: 'about',
component: About
},
]
});
export { router };