import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    namespaced: true,
    state: {
        cart_count: 0,
        cart_total: 0,
        cart: {}
    },
    mutations: {
        SET_Cart_Count: function(state, value) {
            value.map(function(value) {
                state.cart_count += value.quantity;
            });
        },
        SET_Cart_items: function(state, value) {
            state.cart = value;
        },
        SET_Cart_total: function(state, value) {
            state.cart_total = value.total;
        },
        cart_count_increment: function(state) {
            state.cart_count++;
        },
        cart_total_increment: function(state, value) {
            state.cart_total += Number(value);
        }
    },
    actions: {
        // . You can do api call here to login
        async GetCart(_, credentials) {
            let response = await axios.get('api/carts', credentials);
            this.commit('SET_Cart_Count', response.data.data.items);
            this.commit('SET_Cart_items', response.data.data);
            this.commit('SET_Cart_total', response.data.data);
            console.log(response.data.data);
        },
    }
});