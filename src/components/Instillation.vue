<template>
  <div>
    <Navigation/>
    <div class="grid__instillation">
    <section class="instillation container">
      <h2 class="instillation__title">Livraison et installation</h2>
      <img src="productimage/installation_evenement.jpg" alt="public">
      <p>
        Nos équipes techniques se chargent de la livraison, de l'installation
        et de la mise en marche du matériel ainsi que de sa reprise à l'issue de
        l'événement en soignant les points forts suivants:
      </p>
      <ul>
        <li>Ponctualité</li>
        <li>Compétence</li>
        <li>Amabilité</li>
        <li>Disponibilité</li>
      </ul>
        
    </section>

    <section class="info container">
    <h2 class="info__title">Infos pratiques</h2>
    <hr>
    <p>
       Ayant son siège social et son stock principal à Temara, BW TECH intervient aisément sur des évènements. 
    </p>
  
      <ul class="instillation__listing">
          <li> Conseil sur le matériel nécessaire.</li>
          <li>Fourniture, livraison et installation en temps et en heure</li>
          <li>Assistance lors de l'utilisation.</li>
          <li> Désinstallation et récupération en fin d'évènement</li>
      </ul>
<p>
    Vos données personnelles ne feront pas l'objet de traitement informatique et ne seront utilisées que dans le cadre du présent devis pour pouvoir vous contacter. 

</p>
      <h2>Liens utiles</h2>
      <hr>
       <router-link to="/demander">Demander</router-link>
          <div class="icons">
<a class="" href="https://www.linkedin.com/company/sogesmi-net/about/?viewAsMember=true"><img  src="../assets/link2.png"
        alt="linkedin"></a>
<a class="icons__link" href="https://www.facebook.com/Sogesminet/"><img src="../assets/face2.png"  alt="facebbok" ></a>
    </div>
    </section>
</div>
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
 .icons{
    display: flex;
   
   
    &__link{
        padding-left: 1rem;
    }
}
.instillation__listing{
    font-weight: bold;
}
.info{
    background: #f2f2f2;
    padding: 1rem;
}

@media (min-width:64rem){
    .info{
        margin-left: 0;
        margin-top: 2rem;
        height: 700px;
      
    }
  .grid__instillation{
      display: grid;
      grid-template-columns: 2fr 1fr;
  }
  .container{
      width: 70%;
  }
}
</style>