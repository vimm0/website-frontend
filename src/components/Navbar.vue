<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <!--brand image-->
                <h1 class="navbar-brand-custom">Brand</h1>
            </a>
            <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" aria-label="menu"
               aria-expanded="false"
               v-on:click="isActive = !isActive"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
            <div class="navbar-end">
                <a class="navbar-item navbar-custom-item">
                    Home
                </a>
                <a class="navbar-item navbar-custom-item">
                    Gallery
                </a>
                <a class="navbar-item navbar-custom-item">
                    Contact
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Notice
                        </a>

                        <a class="navbar-item">
                            Research
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Admission
                        </a>
                    </div>
                </div>
                <div class="navbar-item">
                    <font-awesome-icon icon="search"></font-awesome-icon>
                </div>
            </div>
        </div>
    </nav>
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
    nav {
        margin-top: .5rem;
    }

    .navbar-end {
        padding-right: 3.2rem;
    }

    div.navbar-item, a.navbar-item, a.navbar-custom-item, a.navbar-link {
        display: inline-block;
        background-color: transparent;
    }

    h1.navbar-brand-custom, a.navbar-custom-item, a.navbar-link {
        /*color: #333 !important;*/
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 14px;
    }

    .navbar-custom-item::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #3273dc;
        transition: width .3s;
    }

    .navbar-custom-item:hover::after {
        width: 100%;
    }

    a.navbar-link {
        background-color: transparent !important;
    }

    a.navbar-link:hover, a.navbar-item:hover {
        background-color: transparent !important;
        color: #3273dc !important;
    }

    .navbar-link:not(.is-arrowless)::after {
        border-color: #333 !important;
    }

    .navbar-link:not(.is-arrowless):hover::after {
        border-color: #3273dc !important;
    }

    .navbar-dropdown > .navbar-item {
        /*font-size: 0.5rem;*/
    }
</style>
