import Vue from 'vue'
import Router from 'vue-router'

import LandingContent from './components/LandingContent.vue'
import About from './components/About.vue'
import Blog from './components/Blog/Blog.vue'
import BlogDetail from './components/Blog/BlogDetail.vue'
import Courses from './components/Course/Courses.vue'
import CourseDetail from './components/Course/CourseDetail.vue'
import Events from './components/Event/Events.vue'
import EventDetail from './components/Event/EventDetail.vue'
import Gallery from './components/Gallery.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
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
            path: '/blog-home',
            component: Blog,
        },
        {
            path: '/blog-detail',
            component: BlogDetail,
        },
        {
            path: '/course-detail',
            component: CourseDetail,
        },
        {
            path: '/event-detail',
            component: EventDetail,
        }
    ]
})
export default router
