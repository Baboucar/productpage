<template>
    <div class="c">
   <Navigation/>
    <div class="productdetails container" >
       <div class="productimages">
       <h2 class="producttitle">{{product.title}}</h2>
        <img :src="product.image" alt="">
       </div>
       <div class="productdetails">
       <h2>Description</h2>
       <ul v-for="(p,index) in product.description"  :key="index">
       <li>{{p}}</li>
       </ul>
       </div>
    </div>
    <Footer/>
    </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
   import productlist from '../assets/productlist.json';
    export default {
        data() {
            return{
                id:this.$route.params.id,
                product:{}
            }
        },
        components:{
            Navigation,
            Footer
        },
       
        
        mounted(){
            this.product = productlist.object.find(item => item.id == this.id);
             
        }
    }
</script>

<style lang="scss" scoped>

</style>