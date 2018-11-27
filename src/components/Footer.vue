<template>
    <div class="footer">
        <div class="columns">
            <div class="column is-one-fifth">
                <p class="is-size-5">Brand</p>
                <p class="brand-quote">We are Educatios, creat your passion and inspiration. And hope success
                    will come for your dream.
                    Please send email and get latest news.</p>
                <p class="is-size-7">0123-456-789</p>
                <p class="is-size-7">hello@education.com</p>
                <p class="is-size-7">01 Central Park, NYC</p>
            </div>
            <div class="column is-one-fifth">
                <p class="is-size-5">Courses</p>
                <ul>
                    <li>Web Design</li>
                    <li>Apps Developer</li>
                    <li>Graphic Design</li>
                    <li>Php Training</li>
                    <li>IOS Developer</li>
                    <li>App Design</li>
                </ul>
            </div>
            <div class="column is-one-fifth">
                <p class="is-size-5">Links</p>
                <ul>
                    <li>About Us</li>
                    <li>Teacher</li>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="column is-one-fifth">
                <p class="is-size-5">Support</p>
                <ul>
                    <li>Documentation</li>
                    <li>Froums</li>
                    <li>Language Packs</li>
                    <li>Release Status</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="column is-one-fifth">
                <p class="is-size-5">Get in touch</p>
                <p class="is-size-7">Enter your email and we'll send you more information</p>
                <input placeholder="Your Email" required>
                <br>
                <a class="button is-primary">Subscribe</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'page-footer',
        data() {
            return {}
        }
    }
</script>
<style lang="scss">
    .brand-quote {
        font-family: "Open Sans", sans-serif;
        font-size: 0.8rem;
        padding-bottom: 10px;
        color: #a0a0a0;
    }
    ul > li {
        font-size:0.8rem;
    }
</style>
