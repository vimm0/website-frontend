<template>
    <header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                        <a href="tel:+953 012 3654 896"><span class="lnr lnr-phone-handset"></span> <span
                                class="text">+953 012 3654 896</span></a>
                        <a href="mailto:support@colorlib.com"><span class="lnr lnr-envelope"></span> <span
                                class="text">support@colorlib.com</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container main-menu">
            <div class="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <router-link :to="{name: 'Home'}"><img src="img/logo.png" alt="" title=""/></router-link>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/courses">Courses</router-link></li>
                        <li><router-link to="/events">Events</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li class="menu-has-children"><router-link to="#">Blog</router-link>
                            <ul>
                                <li><router-link to="/blog-home">Blog Home</router-link></li>
                                <li><router-link to="/blog-detail">Blog Detail</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-has-children"><router-link to="#">Pages</router-link>
                            <ul>
                                <li><router-link to="/course-detail">Course Detail</router-link></li>
                                <li><router-link to="/event-detail">Event Detail</router-link></li>
                                <!--<li><router-link to="/elements">Elements</router-link></li>-->
                                <!--<li class="menu-has-children"><router-link to="#">Level 2 </router-link>-->
                                    <!--<ul>-->
                                        <!--<li><router-link to="#">Item One</router-link></li>-->
                                        <!--<li><router-link to="#">Item Two</router-link></li>-->
                                    <!--</ul>-->
                                <!--</li>-->
                            </ul>
                        </li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                isActive: false
            }
        }
    }
</script>
<style lang="scss">
    /*nav {*/
    /*margin-top: .5rem;*/
    /*}*/

    /*.navbar-end {*/
    /*padding-right: 3.2rem;*/
    /*}*/

    /*div.navbar-item, a.navbar-item, a.navbar-custom-item, a.navbar-link {*/
    /*display: inline-block;*/
    /*background-color: transparent;*/
    /*}*/

    /*h1.navbar-brand-custom, a.navbar-custom-item, a.navbar-link {*/
    /*!*color: #333 !important;*!*/
    /*font-family: "Open Sans", sans-serif;*/
    /*font-weight: 600;*/
    /*text-transform: uppercase;*/
    /*font-size: 14px;*/
    /*}*/

    /*.navbar-custom-item::after {*/
    /*content: '';*/
    /*display: block;*/
    /*width: 0;*/
    /*height: 2px;*/
    /*background: #3273dc;*/
    /*transition: width .3s;*/
    /*}*/

    /*.navbar-custom-item:hover::after {*/
    /*width: 100%;*/
    /*}*/

    /*a.navbar-link {*/
    /*background-color: transparent !important;*/
    /*}*/

    /*a.navbar-link:hover, a.navbar-item:hover {*/
    /*background-color: transparent !important;*/
    /*color: #3273dc !important;*/
    /*}*/

    /*.navbar-link:not(.is-arrowless)::after {*/
    /*border-color: #333 !important;*/
    /*}*/

    /*.navbar-link:not(.is-arrowless):hover::after {*/
    /*border-color: #3273dc !important;*/
    /*}*/

    /*.navbar-dropdown > .navbar-item {*/
    /*!*font-size: 0.5rem;*!*/
    /*}*/
</style>
