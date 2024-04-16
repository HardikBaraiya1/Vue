import { createWebHistory,createRouter } from 'vue-router';

import  binding  from './pages/binding.vue';
import  methodsEvents  from './pages/methodsAndEvent.vue';
import  rendering  from './pages/rendering.vue';
import homePage from './pages/home.vue';

const routes = [
    {
        name: 'home',
        path : '/',
        component: homePage
    },
    {
        name: 'render',
        path : '/rendering-practice',
        component: rendering
    },
    {
        name: 'methods-events',
        path : '/methods-events',
        component: methodsEvents
    },
    {
        name: 'binding-practice',
        path : '/binding-practice',
        component: binding
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes
});

// Log route information
// router.beforeEach((to, from, next) => {
//     console.log('Navigating to:', to.name, 'from:', from.name);
//     console.log('To route:', to);
//     console.log('From route:', from);
//     next();
// });

export default router;