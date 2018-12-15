<template>
    <div id="app">
        <!--<navbar></navbar>-->
        <landing-content></landing-content>
        <!--<page-footer></page-footer>-->
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import LandingContent from './components/LandingContent.vue'
    import Footer from './components/Footer.vue'

    import axios from 'axios'

    export default {
        name: 'app',
        components: {
            Navbar,
            LandingContent,
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
    #app {
        font-family: 'Roboto', sans-serif;
    }

    .image-container {
        position: relative;
    }

    .content-over > * {
        position: absolute !important;
    }

    p.title-text-over {
        top: .2rem;
        padding-left: 2rem
    }

    p.content-text-over {
        top: 4rem;
        padding: 2rem 2rem;
    }

    .content-over-read-more {
        top: 9rem;
        right: .5rem;
    }

    div.share-links {
        position: absolute;
        top: 12rem;
        right: 1rem;
    }

    a.social-button {
        padding: .5rem;
    }

    /*svg.social-media path {*/
    /*fill: #fff;*/
    /*}*/

    .card-content {
        height: 18rem;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);

        &-1 {
            background: #4886ff !important;
        }

        &-2 {
            background: #b5d56a !important;
        }

        &-3 {
            background: #ff6f6f !important;
        }
    }

    .landing-card-columns {
        position: absolute;
        top: -2.5rem;
    }

    .btm-item-icon {
        vertical-align: middle;
        height: 120px;
        width: 90px;
        padding-bottom: 30px;
    }
</style>
