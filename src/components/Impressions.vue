<template>
    <div>
     <Navigation/>
  
     <div class="product__cards spacer container">
       
       <div class="product__card" v-for="(item, index) in search" :key="index">
         <!-- remove the height from the images ! -->
        <img class="card__image" :src="item.image" >
     
        
          <router-link  class="card__title" :to="'/' + item.id">{{item.title}}</router-link> 
         
       
        <div class="card__description">
         <p>{{item.info}}</p>
        </div>

       </div>

     </div>
     <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import productlist from '../assets/productlist.json';
import Footer from '../components/Footer';
import '../assets/card.css';
    export default {
        data(){
           return{
                 items: productlist.object,
           }
        },
        components:{
            Navigation,
            Footer

        },
        computed:{
            search:function(){
                return this.items.filter((d)=>{
                   return d.type== "printer" ||  d.type =="photocopieurs";
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>