<template>
  <div>
    <Navigation/>
    <section class="container">
      <h1>Louer l'équipement informatique</h1>
      <div class="grid__info">
        <img src="productimage/business center copy_1.jpg" alt="info">

        <div class="info__details">
          <p>Vous vous trouvez face à un imprévu en termes de photocopies, d'impression, de numérisation de documents : nous proposons à la location des équipements à usage bureautique dans un cadre professionnel. Nous sommes si réactifs que, selon votre localisation, vous pourrez utiliser le matériel à peine deux heures après votre commande.</p>
          <p>Autre cas de figure : vous êtes en prestation loin de vos bureaux et ne pouvez pas vous déplacer avec tout votre matériel informatique et bureautique, nous vous fournissons :</p>
          <ul>
            <li
              class="info__list"
            ><router-link to="/ordinatures" class="nav__links">Ordinateurs portables</router-link>, <router-link to="/printers" class="nav__links">imprimantes </router-link>, <router-link to="/router" class="nav__links">router</router-link> , <router-link to="/scanner" class="nav__links"> scanners</router-link> et <router-link to="/asscories" class="nav__links">accessoires</router-link></li>
            <li class="info__list">Installation et mise en <span class="bold__text">réseau filaire</span> ou <span class="bold__text"> WiFi</span> du matériel</li>
            <li
              class="info__list"
            >     L'assistance technique en la personne d'un spécialiste présent sur toute la durée de votre événement pour assurer le bon fonctionnement des installations ainsi qu'une intervention rapide en cas de problèmes. 
</li>
          </ul>

          <h2>Demande de devis</h2>
          <hr>
          <p>BW TECH informatique, se fera un plaisir de répondre à votre demande de devis.</p>
        </div>
      </div>
    </section>

    <div class="icons container">
      <a
        class="icons__link"
        href="https://www.linkedin.com/company/sogesmi-net/about/?viewAsMember=true"
      >
        <img src="../assets/link2.png" alt="linkedin">
      </a>
      <a class="icons__link" href="https://www.facebook.com/Sogesminet/">
        <img src="../assets/face2.png" alt="facebbok">
      </a>
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
.info__details {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
}
.bold__text{
  font-weight: bold;
}
.pc__links {
  background: #3f51b5;
}
.ul {
  margin-top: 6rem;
}
.li {
  list-style-type: none;
  text-align: center;
  padding-top: 1rem;
}
li a {
  color: #ffffff;
}

.icons {
  display: flex;

  &__link {
    padding-left: 1rem;
    margin-top: 1rem;
  }
}
.icons {
  display: flex;

  &__link {
    padding-left: 1rem;
    margin-top: 1rem;
  }
}

.nav__links{
    color: #3f51b5;
         text-decoration: none;
         font-weight: bold;
         font-size: 1.2rem;
}
@media (min-width: 64rem) {
  .container {
    width: 80%;
  }

  .info__list {
    padding-top: 2rem;
  }
  .grid__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
  }
}
</style>