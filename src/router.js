import Vue from 'vue'
import Router from 'vue-router'

import LandingContent from './components/LandingContent.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import Courses from './components/Courses.vue'
import Events from './components/Events.vue'
import Gallery from './components/Gallery.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LandingContent,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/courses',
            component: Courses,
        },
        {
            path: '/events',
            component: Events,
        },
        {
            path: '/gallery',
            component: Gallery,
        },
        {
            path: '/blog',
            component: Blog,
        },
        {
            path: '/pages',
            component: About,
        }
    ]
})
export default router
