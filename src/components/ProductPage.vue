<template>
<div>
  <Navigation/>
    <div class="container spacer">
   <h1 class="product_title ">Location de matériel</h1>

     <div class="spacer ">
      <p class="product__description">
    Vous avez besoin d'ordinateurs pour une formation que vous allez bientôt dispenser. Il vous faut plusieurs portables ainsi qu'une imprimante pour vous et vos collaborateurs pour une conférence au sommet ? PC, portables, écrans, imprimantes... vous trouverez tout ce qu'il vous faut ici !
    </p>
    <p class="product__description">
    Un parc matériel adapté à l'événementiel avec cinq postes principaux : l'informatique, la bureautique, l'affichage digital, l'audio, l'éclairage.
Tous les produits ne sont pas sur le site. N'hésitez pas à nous faire savoir vos besoins particuliers. 
    </p>
     </div>

     <div class="product__cards spacer">
       
       <div class="product__card" v-for="(item,index) in items  " :key="item.id">
        <img class="card__image" :src="item.image" >
        <!-- <a href="" class="card__title">{{item.title}}</a>-->
        
         <router-link  class="card__title" :to="'/' + item.id">{{item.title}}</router-link>
         
       
        <div class="card__description">
         <p>{{item.info}}</p>
        </div>

       </div>

     </div>
    </div>
    </div>
</template>

<script>

    
        import productlist from '../assets/productlist.json';
        import Navigation from '../components/Navigation.vue';
    export default {
    
        data(){
            return{
              items: productlist.object,
            }
        },
        computed:{
  
        },
        created: function(){
            // console.log(this.items);
        },
        components:{
            Navigation
        }
       
        
    }
</script>

<style lang="css" scoped>
 .product__card{
     box-shadow: 5px 5px 10px 0 rgba(141,132,234,0.1);
     margin-top: 2rem;
 }

 .card__image{
     display: block;
     margin: 0 auto;
 }
 .card__title{
     display: block;
     text-decoration: none;
     color:#1a194d;
     font-weight: bold;
     padding: 1rem;
 }
 .card__description{
     padding: 1rem;
     
 }

 @media(min-width: 64rem){
  .product__cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 4rem;
  }
 }
</style>