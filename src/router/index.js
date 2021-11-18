import Vue from "vue";
import VueRouter from "vue-router";


import ListProducts from "../views/Product.vue";
import CartItems from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import thankYou from '../views/Thankyou.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'products',
        component: ListProducts,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartItems,
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    },
    {
        path: '/thank-you',
        name: 'thankYou',
        component: thankYou,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;