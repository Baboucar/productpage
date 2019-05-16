<template>
    <div class="c">
   <Navigation/>
    <div class="productdetails container" >
       <div class="productimages">
       <h2 class="producttitle">{{product.title}}</h2>
            <ul v-for="(p,index) in product.specifications"  :key="index">
       <li >{{p}}</li>
       </ul>
        <img :src="mainimage" alt="">
          
          <ul class="thumbnails">
           
          <li class="thumbnail__list"  v-for=" (thumbnails, index) in product.thumbnamils" :key="index"> <img class="thumbnail__image" :src="thumbnails" alt="thumbnail" @click="showImage(thumbnails)"> </li>

       </ul>
       </div>

     

       <div class="">
       <h2 class="title">Description</h2>
       <hr>
       <ul v-for="(p,index) in product.description"  :key="index">
       <li class="description__item">{{p}}</li>
       </ul>
       <h2 class="title">Liens utiles</h2>
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
  <v-content>
    <Footer id="contact-section"/>
    </v-content>
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
                product:{},
                mainimage: ""
            }
        },
        components:{
            Navigation,
            Footer
        },
       
        
        mounted(){
            this.product = productlist.object.find(item => item.id == this.id);
             this.mainimage =this.product.image;
             
        },
        methods:{
            showImage(thumbnail){
                this.mainimage = thumbnail;
            }
        }
    }
</script>

<style lang="scss" scoped>
.title{
    color: #3f51b5;
}
hr{
    height: 3px;
    background: #000000;
}
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

    .thumbnail__list{
        list-style-type: none;
    
    }
   .thumbnail__image{
     width: 300px;
    height: 150px;
   }
   .description__item{
       list-style-type: none;
   }
     .thumbnails{
        display: grid;
        grid-template-columns:  1fr 1fr 1fr;
    }
@media(min-width: 64rem){
    .productdetails{
        width: 70%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3rem;
    }
    .productimages{
       
    }

   

}
</style>