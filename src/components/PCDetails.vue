<template>
  <div>
    <Navigation/>
    <h1 class="expertise__title container">Louer un PC en courte durée</h1>

    <section class="ourexperts container">
      <img class="expertise__image" src="productimage/louer un pc 3.jpg" alt="expertise">
      <div class="expertise__details">
        <h2 class="expertise__title">Louer un PC en courte durée chez Eurolocation Informatique</h2>

        <hr>
        <p>
          Eurolocation Informatique est spécialisé dans la location événementielle (courte durée) de tout le matériel informatique et bureautique.
          Nous pouvons répondre à des besoins aussi différents que:
        </p>
        <ul class="expertise__list">
          <li
            class="expertise__list--items"
          >Une prestation loin de vos bureaux où vous ne pouvez pas vous déplacer avec tout votre matériel,</li>
          <li class="expertise__list--items">Une salle de cours équipée ponctuellement</li>
          <li class="expertise__list">Un séminaire</li>

          <li class="expertise__list">Un stand sur une exposition.</li>
        </ul>

        <p>Nous fournissons ordinateurs, écrans, portables, imprimantes A3 et A4, photocopieurs avec ou sans trieuse, fax, destructeurs de documents, téléphones, polycoms.</p>

        <p>Nous les livrons, les installons, les mettons en réseau à votre convenance.</p>
        <p>Nous proposons aussi l'assistance technique lors de votre événement.</p>
        <h2>Demande de devis</h2>

        <hr>
        <p>Eurolocation Informatique, toujours présent sur les grandes villes de congrès comme Paris, Nice, Cannes, Monaco ou Marseille, mais aussi dans les grands congrès européens, se fera un plaisir de répondre à votre demande de devis.</p>
      </div>
    </section>

    <section class="container pc__links">
        <ul>
            <li><router-link to="/demander">Demander un devis</router-link></li> 
            <li><router-link to="">Louer un Mac en courte duree</router-link></li>
            <li><router-link to="">Louer un Mac en courte duree</router-link></li>
            <li><router-link to="">Louer un Mac en courte duree</router-link></li>
            <li><router-link to="">Louer un Mac en courte duree</router-link></li>
        </ul>
    </section>
    <router-link to="/demander" class="btn__devis container">Demander un devis</router-link>
      <div class="icons container">
<a class="icons__link" href="https://www.linkedin.com/company/sogesmi-net/about/?viewAsMember=true"><img  src="../assets/link2.png"
        alt="linkedin"></a>
<a class="icons__link" href="https://www.facebook.com/Sogesminet/"><img src="../assets/face2.png"  alt="facebbok" ></a>
    </div>
    <Footer/>
  </div>
</template>

<script>
import "../assets/expertise.scss";
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
.pc__links{
    background: #3f51b5;
    
}
ul{
    margin-top: 6rem;
}
li{
    list-style-type: none;
    text-align: center;
    padding-top: 1rem;
}
li a{
    color: #FFFFFF;
}

.icons {
  display: flex;

  &__link {
    padding-left: 1rem;
    margin-top: 1rem;
  }
}
@media(min-width: 64rem){
     a{
         font-size: 1.2rem;
     }
}
</style>