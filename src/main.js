import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init()
    },
    render: h => h(App),
}).$mount('#app')
