import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Me from './views/Me.vue';
import Contact from './views/Contact.vue';
import './style.css';

const routes = [
    {
        path: '/',
        redirect: '/home' 
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/me',
        name: 'Me',
        component: Me
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');