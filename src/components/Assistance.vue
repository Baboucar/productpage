<template>
  <div>
    <Navigation/>
    <section class="container">
      <h2 class="assistance__title">Eurolocation développement et assistance</h2>
      <div class="assistance__grid">
        <img src="productimage/assistance.jpg" alt="assistance">
        <div class="assistance__description">
          
          <ul class="assistance__listings">
            <li>L'assistance technique en la personne d'un spécialiste présent sur toute la durée de votre événement pour assurer le bon fonctionnement des installations ainsi qu'une intervention rapide en cas de problèmes.</li>

            
          </ul>

          <p>
             Vous organisez un événement de petite taille (séminaire ou convention en hôtellerie, salon, réunion plénière…) et vous avez besoin de matériel informatique ? Vous devez fournir à vos participants une connexion internet ?
Je vous apporte la solution : du matériel adapté et un service sur mesure pour répondre à vos exigences de fiabilité et de performance.
Je m’occupe de la fourniture, de l’installation, de la gestion et de la maintenance pour l’ensemble des prestations informatiques suivantes :
 </p>
 <ul class="list">
   <li>– Location d’ordinateurs,</li>
   <li>– Câblage de salles ou de stands, </li>
   <li>– Création de réseaux privés et sécurisés,</li>
   <li>– Connexion internet via un réseau filaire ou Wi-Fi sécurisé, sur une partie ou sur la totalité de la surface exploitée,</li>
   <li>– Outil vous permettant d’accréditer les utilisateurs du réseau Wi-Fi,
etc.</li>
 </ul>
 



<p>
  Pendant votre événement, je reste entièrement disponible, soit à distance soit sur site.
Toutes mes prestations événementielles font l’objet d’un devis détaillé et personnalisé réalisé après déplacement sur site. Lors de ma visite sur place, nous aurons déterminé ensemble les besoins liés à votre événement : évaluation du volume de connexions, étude de la configuration des locaux…
</p>

<ul>
  <li>– Location de matériel informatique et réseau ; </li>
  <li></li>
</ul>


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

li{
  list-style-type: none;
}
.list{
  font-weight: bold;
}
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