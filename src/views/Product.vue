<template>
    <div class="col-md-12 row-grid">
        <list-products :products="products"></list-products>
        <mini-cart></mini-cart>
    </div>
</template>
<script>
import ListProducts from "@/components/ListProducts.vue";
import MiniCart from "@/components/MiniCart.vue";
export default {
    name: "Product",
    components: {
        ListProducts,
        MiniCart
    },
    data(){
        return{
           products:{}
        }
    },
    mounted(){
        let self = this;
        this.axios.get('api/products').then(function(response){
           self.products = response.data.data;
        });
    }
}
</script>
