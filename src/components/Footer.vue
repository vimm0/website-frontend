<template>
    <footer class="footer">
        <div class="columns">
            <div class="column is-one-fifth">
                <p class="is-size-5">Brand</p>
                <p class="brand-quote">We are Educatios, creat your passion and inspiration. And hope success
                    will come for your dream.
                    Please send email and get latest news.</p>
                <div class="address mt-1">
                    <p class="is-size-7">0123-456-789</p>
                    <p class="is-size-7">hello@education.com</p>
                    <p class="is-size-7">01 Central Park, NPJ</p>
                </div>
            </div>
            <div class="column is-one-fifth">
                <p class="is-size-5">Courses</p>
                <ul class="footer-links">
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
                <ul class="footer-links">
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
                <ul class="footer-links">
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
                <p class="email-content">Enter your email and we'll send you more information</p>
                <input class="email-input" placeholder="Your Email" required>
                <br>
                <a class="button is-info mt-1 subscribe-button">Subscribe</a>
            </div>
        </div>
    </footer>
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
    .brand-quote, .email-content {
        font-family: "Open Sans", sans-serif;
        font-size: 0.8rem;
        padding-bottom: 10px;
        color: #a0a0a0;
    }

    ul > li {
        font-size: 0.8rem;
        line-height: 1.8rem;
        color: #a0a0a0;
    }

    ul.footer-links {
        margin-top: -0.255rem;
    }

    div.address > * {
        /*color: #a0a0a0;*/
        line-height: 1.4rem;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .subscribe-button {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2) !important;
    }

    .email-input {
        background: #e6e6e6;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        height: 45px;
        font-size: 16px;
        border: none;
        color: #a0a0a0;
        padding-left: 15px;
        width: 100%;
        margin-bottom: 15px;
        outline: none;
    }

    .footer {
        /*margin: 0 auto;*/
        /*width: 100%;*/
        /*height: auto;*/
        /*overflow: hidden;*/
        /*position: relative;*/
        /*bottom: 0;*/
    }
</style>
