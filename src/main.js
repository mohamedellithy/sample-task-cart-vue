import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'jquery/src/jquery.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/css/style.css';

Vue.use(VueAxios, axios);


//  Bootstrap-Vue 
Vue.use(IconsPlugin, BootstrapVue);

import { ModalPlugin } from 'bootstrap-vue';
Vue.use(ModalPlugin);

var randomToken = require('random-token');
axios.defaults.baseURL = 'https://blog.mohamedouf.online/';

if (!window.localStorage.getItem('s_token')) {
    window.localStorage.setItem('s_token', randomToken(16));
}

axios.defaults.headers.common['SESSION-TOKEN'] = window.localStorage.getItem('s_token');

store.dispatch('GetCart');

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");