<template>
    <div>
     <Navigation/>
     <section class="container">
         <h2 class="informatique__title">L'équipement informatique</h2>
         <div class="informatique__grid">
             <img src="productimage/network-698598_1280.jpg" alt="">
             <div>
                 <p>L'équipement informatique est un vaste sujet puisqu'il comporte aussi bien</p>
             <ul>
                 <v-content>
                 <li><router-link to="/ordinatures">les ordinateurs portables</router-link></li>
                 </v-content>
                 <li>les <router-link to="/printers">imprimantes</router-link>, <router-link to="">scanners</router-link>, <router-link to="/photocopy">photocopieurs</router-link>, mais aussi toute la partie</li>
                 <li><router-link to="/router">réseau et internet.</router-link></li>
                 <li>Et cette liste n'est pas exhaustive! </li>
             </ul>

             <p>La bonne nouvelle, nous avons ce qu'il vous faut!</p>
             <p class="spacer decrives">Décrivez vos besoins en cliquant sur le lien ci-dessous de demande de devis</p>
             <p>Vos données personnelles ne feront pas l'objet de traitement informatique et ne seront utilisées que dans le cadre du présent devis pour pouvoir vous contacter.</p>
             </div>
         </div>
     </section>

         <router-link to="/demander" class="btn__devis container">Demander un devis</router-link>
  <v-content>
    <Footer id="contact-section"/>
    </v-content>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

    export default {
        components:{
            Navigation,
            Footer
        }
        
    }
</script>

<style lang="scss" scoped>


@media(min-width: 64rem){
 .informatique{
      &__title{
          font-size: 3rem;
      }
      &__grid{
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4rem;
      }
  }
  .decrives{
      font-size: 1.2rem;
  }

 
}
 
</style>