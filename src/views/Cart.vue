<template>
    <div class="col-md-12">
        <cart-list :cart_items="cart_items"></cart-list>
    </div>
</template>
<script>
import CartList from "@/components/CartList.vue";
export default {
    name: "Cart",
    components: {
        CartList,
    },
    data(){
        return{
           cart_items:{}
        }
    },
    mounted(){
        let self = this;
        this.axios.get('api/carts').then(function(response){
           self.cart_items = response.data.data;
        });
    }
}
</script>
