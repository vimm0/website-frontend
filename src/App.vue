<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    // import LandingContent from './components/LandingContent.vue'
    import Footer from './components/Footer.vue'

    import axios from 'axios'

    export default {
        name: 'app',
        components: {
            Navbar,
            // LandingContent,
            'page-footer': Footer
        },
        created() {
            axios.defaults.baseURL = 'http://client1.nepexgroup.com:8000';
            axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            // PER CLIENT CONFIG
            axios.defaults.auth = {
                username: 'client1',
                password: 'admin'
            }
        }
    }
</script>

<style lang="scss">

</style>
