<template>
    <div class="c">
   <Navigation/>
    <div class="productdetails container" >
       <div class="productimages">
       <h2 class="producttitle">{{product.title}}</h2>
        <img :src="product.image" alt="">
       </div>

       <div class="">
       <h2>Description</h2>
       <hr>
       <ul v-for="(p,index) in product.description"  :key="index">
       <li>{{p}}</li>
       </ul>
       <h2>Liens utiles</h2>
       <hr>
       <p>
       -Demander un devis <br>
       -Louer un grand ecran
       </p>

            <div class="icons">
<a class="icons__link" href="https://www.linkedin.com/company/sogesmi-net/about/?viewAsMember=true"><img  src="../assets/link2.png"
        alt="linkedin"></a>
<a class="icons__link" href="https://www.facebook.com/Sogesminet/"><img src="../assets/face2.png"  alt="facebbok" ></a>
    </div>
    
       
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

 .footer__logo{
       &__image{
            display: block;
        margin: 0 auto;
        padding-top: 2rem;
       }
    }

    .icons{
    display: flex;
   
   
    &__link{
        padding-left: 1rem;
    }
}
@media(min-width: 64rem){
    .productdetails{
        width: 70%;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .productimages{
        width: 45%;
    }
}
</style>