<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <!--brand image-->
                <h1>Brand</h1>
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
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Gallery
                </a>
                <a class="navbar-item">
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
            </div>

            <!--<div class="navbar-end">-->
            <!--<div class="navbar-item">-->
            <!--<div class="buttons">-->
            <!--<a class="button is-primary">-->
            <!--<strong>Sign up</strong>-->
            <!--</a>-->
            <!--<a class="button is-light">-->
            <!--Log in-->
            <!--</a>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
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
    .navbar-end {
        padding-right: 3.2rem;
    }
</style>
