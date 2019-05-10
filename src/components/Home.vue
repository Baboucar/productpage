<template>
    <div>
  <HomeNav/>
   <section class="slider">
       <img src="productimage/neuropsychiatrie-congres-2017.jpg" alt="">
   </section>
    <section class="prestations">
        <h1 class="prestations__title center__text">NOS PRESTATIONS</h1>

  
<div class="responsive">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>		

    </section>
     <section class="container parles">
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

     </section>
     <HomeFooter/>
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
       $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
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
				
    } 
    
    }

    
</script>

<style lang="scss" scoped>

  .parles{
      width: 90%;
      margin: 0 auto;

      &__description{
          background:#F2F2F2;
      }
  }

@media(min-width:64rem){
    .prestations{
        &__title{
            font-size: 3rem;
        }
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