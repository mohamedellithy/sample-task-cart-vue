<template>
    <div class="col-md-12 row-grid">
        <div class="row-checkout">
            <h3> 
               <span> CHECKOUT </span> 
            </h3>
            <div class="col-md-8 description-checkout">
                 YOUR PERSONAL AND FINANCIAL INFORMATION ARE TRANSIMATED OVER SSL SECURED CONNECTION 
                 USING 256 BIT BANK LEVEL ENCRYPTION 
            </div>
            <div class="col-md-8 container-pay-buttons">
                <button v-if="this.$store.state.cart_count != 0 " v-b-modal.modal-1 class="btn pay-with-strip-btn"> Pay with Stripe Checkout </button>
                <div class="container-payment-images">
                    <img class="image-payment-method" src="../assets/img/visa.jpg"/>
                    <img class="image-payment-method" src="../assets/img/am-ex.png"/>
                    <img class="image-payment-method" src="../assets/img/discovery.png"/>
                    <img class="image-payment-method" src="../assets/img/master.jpg"/>
                </div>
            </div>
        </div>
            <b-modal id="modal-1" title="" hide-footer="true">
                <form-checkout v-if="this.$store.state.cart_count != 0 "></form-checkout>
            </b-modal>
    </div>
</template>
<script>
import FormCheckout from "@/components/FormCheckout.vue";
export default {
    name:'Checkout',
    components:{
        FormCheckout
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
        }).catch(function(error){});
    }
}
</script>
