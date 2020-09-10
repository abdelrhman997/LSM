import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from '../components/Create.vue';
import Edit from '../components/Edit.vue';
import Index from '../components/Index.vue';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit',
        component: Edit
    },
    {
        name: 'Index',
        path: '/index',
        component: Index
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;