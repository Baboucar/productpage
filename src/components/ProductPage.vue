<template>
<div>
  <Navigation/>
    <div class="container spacer">
   <h1 class="product_title ">Location de matériel</h1>

     <div class="spacer ">
      <p class="product__description">
    Vous avez besoin d'ordinateurs pour une formation que vous allez bientôt dispenser. Il vous faut plusieurs portables ainsi qu'une imprimante pour vous et vos collaborateurs pour <br> une conférence au sommet ? PC, portables,  imprimantes... vous trouverez tout ce qu'il vous faut ici !
    </p>
    <p class="product__description">
    Un parc matériel adapté à l'événementiel à savoir : l'informatique, la bureautique. <br>
<strong>Tous les produits ne sont pas sur le site. N'hésitez pas à nous faire savoir vos besoins particuliers </strong>. 
    </p>
     </div>

     <div class="search__form">
     <form class="flex__form">
    
     <div class="flex__inputs">
     <label class="label" for="product">Produit</label>
      <input type="text" name="" id="" v-model="searchinput">
     </div>

     <div  class="flex__inputs">
     <label class="label" for="réseau">Ordinateur</label>
       <select name="" id="" @change="searchbyCatogery($event)">
         <option value="" >-Tout-</option>
        <option value="pcdebureau" >--PC de bureau</option>
         <option value="pcportable" >--PC Portable</option>
         
         <option value="accessoiresinformatique">--accessoires informatique</option>
       </select>
     </div>

      <div  class="flex__inputs">
     <label class="label" for="réseau">Impression, Numérisation, Télecopie
     </label>
       <select name="" id="" @change="   secondsearchbyCatogery($event)">
           <option value="">-Tout-</option>
        <option value="printer">--Imprimantes</option>
         <option value="photocopieurs">--photocopieurs</option>
          <option value="scanners">--scanners</option>
       </select>
     </div>

       <div  class="flex__inputs">
     <label class="label" for="réseau">Réseau, Internet, Wi-Fi
     </label>
       <select name="" id="" @change=" thirdsearchbyCatogery($event)">
           <option value="">-Tout-</option>
        <option value="routeurs" >--routeurs</option>
         <option value="switch">--switch</option>
         <option value="wifi"> --wifi </option>
       </select>
     </div>

     
    
      <!-- <input class="btn__submit" type="submit" value="Search" > -->

     </form>
     </div>

     <div class="product__cards spacer">
       
       <div class="product__card" v-for="(item, index) in search" :key="index">
         <!-- remove the height from the images ! -->
        <img class="card__image" :src="item.image" >
        <!-- <a href="" class="card__title">{{item.title}}</a>-->
        
         <router-link  class="card__title" :to="'/' + item.id">{{item.title}}</router-link>
         
       
        <div class="card__description">
         <p>{{item.info}}</p>
        </div>

       </div>

     </div>
    </div>
   
    <Footer id="contact-section"/>
   

    </div>
</template>

<script>

    
        import productlist from '../assets/productlist.json';
        import Navigation from '../components/Navigation.vue';
        import Footer from '../components/Footer.vue';
        // import v-content from 'vue-scrollto';
    export default {
    
        data(){
            return{
              items: productlist.object,
              searchinput: "",
              selectedtype:"",
            
            }
        },
        computed:{
          search:function(){
              const re = new RegExp(this.searchinput.trim(),'gi');
            return this.items.filter(d => {
              
                //return  d.type === this.searchinput || d.catogery === this.searchinput;
                  //console.log(d.type);
                  //console.log(d.category);
                 // return match(re);
                 return  d.type.match(re) || d.category.match(re);
                  
               
            });
          },
         

        },
        created: function(){
            // console.log(this.items);

        },
        methods:{
             searchbyCatogery(event){
               this.searchinput = event.target.value;
              this.search;  
              
         
          },
          secondsearchbyCatogery(event){
                this.searchinput = event.target.value;
              this.search; 
          },
          thirdsearchbyCatogery(event){
             this.searchinput = event.target.value;
              this.search; 
          },
          //  listallproduct(event){
          //    this.searchinput = event.target.value;
          //    this.search;
          //  }
        },
        components:{
            Navigation,
            Footer
        }
       
        
    }
</script>

<style lang="css" scoped>


 .product__card{
      box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
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
    font-size: .8rem;
}
input[type="text"], input[type="submit"], select{
    width: 100%;
    height: 45px;
    border: none;
    border: 2px solid #eee;
    background-color: #F2F2F2;
      box-shadow: 0px 5px 6px -4px rgba(0,0,0,0.3);

}

input[type="submit"]{
    border:none;
}
.btn__submit{
  
    margin-top: 1rem;
    
    background: #1a194d;
    color: #FFFFFF;
    
}

.flex__inputs{
  display: grid;
  align-self: flex-end;
}
 @media(min-width: 64rem){
  .product__cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
  }
  .flex__inputs{

  }
  .flex__form{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr ;
      grid-gap: 2rem;
  }
  .btn__submit{
      align-self: end;
      
  }

 }
</style>