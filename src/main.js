import Vue from 'vue'
import App from './App.vue'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faLongArrowAltRight, faSearch } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Meta from 'vue-meta'

// Require the main Sass manifest file
// require('./assets/sass/main.scss');

// library.add(faCoffee, faLongArrowAltRight, faSearch)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
    // created() {
    //     AOS.init()
    // },
    render: h => h(App),
}).$mount('#app')
