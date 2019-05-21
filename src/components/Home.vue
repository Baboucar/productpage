<template>
    <div>
  <HomeNav/>
   <section class="slider">
       <img src="productimage/neuropsychiatrie-congres-2017.jpg" alt="">
   </section>
    <section class="prestations">
        <h1 class="prestations__title center__text">NOS PRESTATIONS</h1>

   <div class="presentation__cards container">
         
         <div class="presentation__card">
             <img class="card__image" src="productimage/louer un pc 2.jpg" alt="">
              <p class="presentation__description">
            <router-link to="/ordinatures">    Louer des ordinateurs portables longue <br> et courte duree</router-link>
              </p>
             
         </div>

           <div class="presentation__card">
             <img class="card__image" src="productimage/business center copy_0.jpg" alt="">
              <p class="presentation__description">
                 <router-link to="/informatique"> Louer l'équipement <br> informatique</router-link>
              </p>
             
         </div>

          <div class="presentation__card">
             <img class="card__image" src="productimage/installation_evenement.jpg" alt="">
              <p class="presentation__description">
              <router-link to="/instillation">            Livraison et <br> installation</router-link>
              </p>
             
         </div>

         
         
    </div>  

    </section>
     <!-- <section class="container parles">
         <div class="parles__description">
             <h1 class="parles__title">Ils parlent de nous</h1>
             <p>
                 Cher tous,<br>

Juste un petit mot pour vraiment vous remercier. <br>

Merci pour votre professionalisme, votre disponibilité, parfois même votre patience et votre <br>
 bonne humeur à toute épreuve. <br>

Nous n'avons pas eu le débriefe client, mais les équipes de Lever de Rideau sont ravies.

             </p>


             <a href="http://" class="btn">VOIR TOUT</a>
         </div>
         <img class="parles__image" src="productimage/image.png" alt="">

     </section> -->
     <v-content>
     <HomeFooter id="contact-footer"/>
     </v-content>
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav';
import HomeFooter from '../components/HomeFooter';
import Slick from 'vue-slick';
 import $ from 'jquery';



		

		
    export default {

        components:{
            HomeNav,
            HomeFooter,
            

        },
        data(){
            return{
                slickOptions:{
                    slickOptions:3,
                }
            }
        },
       
       mounted: function() {
           $(document).ready(function(){
       $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
   autoplay: true,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	})			
    } 
    
    }

    
</script>

<style lang="scss" scoped>

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