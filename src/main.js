import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Import the App component
import Home from './views/Home.vue';
import Me from './views/Me.vue';
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');