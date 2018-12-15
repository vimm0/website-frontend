<template>
    <div>
        <!--<form>-->
        <!--<input class="input" type="text" placeholder="Your Name" v-model="name">-->
        <!--<input class="input" type="email" placeholder="Your Email" v-model="email">-->
        <!--<input class="input" type="text" placeholder="Subject" v-model="subject">-->
        <!--<textarea class="textarea" placeholder="e.g. Hello world" v-model="message"></textarea>-->
        <!--<a class="button" @click="sendMessage">Send Message</a>-->
        <!--</form>-->
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'landing-content',
        data() {
            return {
                url: 'https://vimm0.github.io/',
                name: '',
                email: '',
                subject: '',
                message: '',
            }
        },
        methods: {
            sendMessage() {
                // console.log(this.name + ' ' + this.email + ' ' + this.subject + ' ' + this.message)
                axios.post('/message/', {
                    name: 'FASDFASD',
                    email: 'vimmrana0@gmail.com',
                    subject: 'FlintsFASDFASFtone',
                    message: 'FlintAFSDFASstone'
                })
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style lang="scss">
    a.read-more {
        border: 0;
    }

    a.read-more:hover {
        color: #3273dc;
    }

    p.content-text-over {
        margin-right: 25rem;
    }

    div.social-media {

    }
</style>
