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
                    <a href="index.html"><img src="img/logo.png" alt="" title=""/></a>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li class="menu-has-children"><a href="">Blog</a>
                            <ul>
                                <li><a href="blog-home.html">Blog Home</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                            </ul>
                        </li>
                        <li class="menu-has-children"><a href="">Pages</a>
                            <ul>
                                <li><a href="course-details.html">Course Details</a></li>
                                <li><a href="event-details.html">Event Details</a></li>
                                <li><a href="elements.html">Elements</a></li>
                                <li class="menu-has-children"><a href="">Level 2 </a>
                                    <ul>
                                        <li><a href="#">Item One</a></li>
                                        <li><a href="#">Item Two</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
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
