<template>
<div>
  <Navigation/>
    <div class="container spacer">
   <h1 class="product_title ">Location de matériel</h1>

     <div class="spacer ">
      <p class="product__description">
    Vous avez besoin d'ordinateurs pour une formation que vous allez bientôt dispenser. Il vous faut plusieurs portables ainsi qu'une imprimante pour vous et vos collaborateurs pour <br> une conférence au sommet ? PC, portables, écrans, imprimantes... vous trouverez tout ce qu'il vous faut ici !
    </p>
    <p class="product__description">
    Un parc matériel adapté à l'événementiel avec cinq postes principaux : l'informatique, la bureautique, l'affichage digital, l'audio, l'éclairage. <br>
<strong>Tous les produits ne sont pas sur le site. N'hésitez pas à nous faire savoir vos besoins particuliers </strong>. 
    </p>
     </div>

     <div class="search__form">
     <form class="flex__form">
     <div>
     <label class="label" for="product">Produit</label>
      <input type="text" name="" id="">
     </div>

     <div>
     <label class="label" for="réseau">Ordinateur</label>
       <select name="" id="">
        <option value="">--PC de bureau</option>
         <option value="">--PC Portable</option>
       </select>
     </div>

      <div>
     <label class="label" for="réseau">Impression, Numérisation, Télecopie
     </label>
       <select name="" id="">
        <option value="">--PC de bureau</option>
         <option value="">--PC Portable</option>
       </select>
     </div>

       <div>
     <label class="label" for="réseau">Réseau, Internet, Wi-Fi
     </label>
       <select name="" id="">
        <option value="">--PC de bureau</option>
         <option value="">--PC Portable</option>
       </select>
     </div>

     
    
      <input class="btn__submit" type="submit" value="Search" >

     </form>
     </div>

     <div class="product__cards spacer">
       
       <div class="product__card" v-for="(item) in items  " :key="item.id">
        <img class="card__image" :src="item.image" >
        <!-- <a href="" class="card__title">{{item.title}}</a>-->
        
         <router-link  class="card__title" :to="'/' + item.id">{{item.title}}</router-link>
         
       
        <div class="card__description">
         <p>{{item.info}}</p>
        </div>

       </div>

     </div>
    </div>
    <Footer/>
    </div>
</template>

<script>

    
        import productlist from '../assets/productlist.json';
        import Navigation from '../components/Navigation.vue';
        import Footer from '../components/Footer.vue';
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
            Navigation,
            Footer
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


.label{
    display: block;
    font-weight: bold;
    padding-top: .5rem;
}
input[type="text"], input[type="submit"], select{
    width: 100%;
    height: 35px;
    border: none;
    border: 2px solid #eee;
}

input[type="submit"]{
    border:none;
}
.btn__submit{
  
    margin-top: 1rem;
    
    background: #1a194d;
    color: #FFFFFF;
    
}

 @media(min-width: 64rem){
  .product__cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 4rem;
  }
  .flex__form{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
  }
  .btn__submit{
      align-self: end;
      
  }

 }
</style>