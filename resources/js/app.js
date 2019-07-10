import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js'
import 'jquery'
import 'bootstrap'
import Vue from 'vue'

let appElement = document.querySelector('#app')

new Vue({
    components: {
        'about': () => import('./components/About'),
        'home': () => import('./components/Home'),
    },

    el: appElement,
    render: h => h(appElement.dataset.component, {
        props: JSON.parse(appElement.dataset.props),
    }),
})
