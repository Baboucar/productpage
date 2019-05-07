<template>
  <div>
    <Navigation/>
    <section class="container">
      <h2 class="assistance__title">Eurolocation développement et assistance</h2>
      <div class="assistance__grid">
        <img src="productimage/activities.jpg" alt="assistance">
        <div class="assistance__description">
          <p>Eurolocation Informatique avec son équipe de développeurs vous propose la</p>
          <ul class="assistance__listings">
            <li>Conception d'animations bornes et d'applications tactile diverses pour vos appareils en location : animation borne en boucle, application tactile interactive, formulaire de récupération de données, jeux, etc.</li>

            <li>
                Enregistrement vidéo ou sonore d'un spectacle vivant (conférence, spectacle, audition, table ronde, concert…) pour une réutilisation différée (sous forme de DVD, fichier informatique…) ou directe (streaming live).
            </li>
            <li>
                Installation et <router-link to="/">mise en réseau</router-link> filaire ou WiFi de matériel informatique

            </li>
            <li>
                L'assistance technique en la personne d'un spécialiste présent sur toute la durée de votre événement pour assurer le bon fonctionnement des installations ainsi qu'une intervention rapide en cas de problèmes. 
            </li>
          </ul>

          <p>
              Nos designers sont également à votre disposition pour habiller votre borne en concevant un visuel autocollant aux couleurs de votre charte graphique


          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  components: {
    Navigation,
    Footer
  }
};
</script>

<style lang="scss" scoped>

.assistance{
&__description{
    font-size: 1.3rem;
     background: #F2F2F2;
     padding: 1.5rem;
}
&__listings li{
   padding-top: 2rem;  
}
}

@media (min-width: 64rem) {
  .assistance {
    &__title {
      font-size: 3rem;
    }

    &__grid{
       display: grid;
       grid-template-columns: 1fr 1fr;
    }
  }
}
</style>