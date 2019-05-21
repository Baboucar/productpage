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
         <h3>Eurolocation Informatique couvre non seulement toute la France mais intervient aussi dans l'Europe entière.</h3>
         <p>
             Avec nos agences dans le nord et le sud de la France, nous intervenons sur Paris et sa région et les principales métropoles telles que Lille, Nantes, Strasbourg, Nice, Cannes, Monaco, etc.
Nous nous déplaçons aussi régulièrement sur le continent Européen afin de répondre aux exigences de notre clientèle. 
         </p>
         <h3>
Paris, région parisienne et Nord de la France:</h3>
<p>
    Ayant son siège social et son stock principal à Paris, Eurolocation intervient aisément sur des évènements dans la partie nord de l'hexagone. Nos équipes connaissent par coeur le Paris expo Porte de Versailles, Paris Nord Villepinte, le Carrousel du Louvre, le CNIT Paris La Défense et se déplacent régulièrement à Lille Grand Palais, à la Cité des congrès de Nantes, au Strasbourg Convention & Exhibition Centre et au Centre International de Deauville (CID).
</p>
    </section>

    <section class="info container">
    <h2 class="info__title">Infos pratiques</h2>
    <hr>
    <p>
        Ayant son siège social et son stock principal à Paris, Eurolocation intervient aisément sur des évènements dans la partie nord de l'hexagone. Nos équipes connaissent par coeur le Paris expo Porte de Versailles, Paris Nord Villepinte, le Carrousel du Louvre, le CNIT Paris La Défense et se déplacent régulièrement à Lille Grand Palais, à la Cité des congrès de Nantes, au Strasbourg Convention & Exhibition Centre et au Centre International de Deauville (CID).
    </p>
      
      <p>
          Vos données personnelles ne feront pas l'objet de traitement informatique et ne seront utilisées que dans le cadre du présent devis pour pouvoir vous contacter.
      </p>

      <h2>Liens utiles</h2>
      <hr>
       <router-link to="/demander">Demander</router-link>
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


@media (min-width:64rem){
  .grid__instillation{
      display: grid;
      grid-template-columns: 2fr 1fr;
  }
}
</style>