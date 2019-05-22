<template>
    <div>
  <HomeNav/>
  
   <section class="slider">
       <!-- <img src="productimage/neuropsychiatrie-congres-2017.jpg" alt=""> -->
       <vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
      <flux-pagination slot="pagination"></flux-pagination>
</vue-flux>

   </section>
    <section class="prestations">
        <h1 class="prestations__title center__text">NOS PRESTATIONS</h1>

   <div class="presentation__cards container">
         
         <div class="presentation__card">
             <img class="card__image" src="productimage/louer un pc 2.jpg" alt="">
              <p class="presentation__description">
            <router-link to="/pcdetails" class="home__links">Louer des ordinateurs portables longue <br> et courte duree</router-link>
           
              </p>
               
             
         </div>

           <div class="presentation__card">
             <img class="card__image" src="productimage/business center copy_0.jpg" alt="">
              <p class="presentation__description">
                 <router-link to="/informatiquedetails" class="home__links"> Louer l'équipement <br> informatique</router-link>
              </p>
            
         </div>

          <div class="presentation__card">
             <img class="card__image" src="productimage/installation_evenement.jpg" alt="">
              <p class="presentation__description">
              <router-link to="/instillation" class="home__links">     Livraison et <br> installation</router-link>
              </p>
             
         </div>

         
         
    </div>  

    </section>
    
     <HomeFooter/>
    
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav';
import HomeFooter from '../components/HomeFooter';
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';



		

		
    export default {

        components:{
            HomeNav,
            HomeFooter,
            VueFlux,
            FluxPagination
            

        } ,
        data(){
            return{
                fuxOptions:{
                    autoplay:true
                },
                fluxImages:['productimage/neuropsychiatrie-congres-2017.jpg','productimage/macbook.jpg'],
                fluxTransitions:{
                    transitionBook: Transitions.transitionBook
                }
            }
        }
    }

    
</script>

<style lang="scss" scoped>

.home__links{
    font-weight: bold;
    color: #3f51b5;
}
  .parles{
      width: 90%;
      margin: 0 auto;

      &__description{
          background:#F2F2F2;
          padding: 1rem;
      }
      &__image{
          width: 150px;
      }
  }


.presentation__card{
    box-shadow: 5px 5px 10px 0 rgba(141,132,234,0.1);
    margin: 0 auto;
        border: 1px solid #dcdcdc;
    margin-top: 2rem;
}

.presentation__description{
    color: #3f51b5;
    padding: .7rem;
}

.card__image{
    margin: 0 auto;
    display: block;
}

 .btn{
        background: #3f51b5;
    border: none;
    color: #FFFFFF;

    border-radius: 4px;
    display: inline-block;
    margin-top: 2rem;
    padding: .7rem 2.5rem;
    }
@media(min-width:64rem){
    .prestations{
        &__title{
            font-size: 3rem;
        }
        
    }
   .presentation__cards{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin-bottom: 4rem;
        
   }
   .parles{
       width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
       &__title{
           font-size: 3rem;
       }
        &__description{
            padding: 4rem;
        }

        &__image{
            width: 100%;
        }

    }
}
   
</style>