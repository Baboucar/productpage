<template>
  <div>
  <Navigation/>
    <div class="expertise container">
      <h2 class="expertise__title">Eurolocation Expert en Logistique Evénementielle.</h2>
      <section class="ourexperts">
        <img class="expertise__image" src="productimage/expertise-1.jpeg" alt="expertise">
        <div class="expertise__details">
          <p>
            C'est une connaissance acquise au cours  de nos prestations réussies, lors de
            ces  dernières années, qui nous permet d'utiliser le terme d'Expert.
          </p>
          <h3 class="expertise__title--secondary">Notre expertise:</h3>
          <hr>
          <p>C'est de vous accompagner lors de votre événement du point de vue de la logistique.</p>
          <ul class="expertise__list">
            <li class="expertise__list--items">Conseil sur le matériel nécessaire.</li>
            <li
              class="expertise__list--items"
            >Fourniture, livraison et installation en temps et en heure</li>
            <li class="expertise__list--items">Assistance lors de l'utilisation.</li>
            <li class="expertise__list--items">Désinstallation et récupération en fin d'évènement.</li>
          </ul>
        </div>
      </section>
      <section class="ourexperts ourknowhow">
        <img class="expertise__image" src="productimage/expertise-2.jpeg" alt="expertise">
        <div class="ourknowhow__list">
          <h3 class="expertise__title">Nos savoir-faire</h3>
          <hr>
          <div>
            <ul>
              <li class="expertise__list--items">
                Comprendre les besoins
                Notre équipe a œuvré lors de congrès de toute nature (scientifiques, économiques, associatifs, médicaux, politiques…), d'événements d'entreprises (séminaires, assemblées générales, formations, lancements de produits…). Nous avons vu ce qu'il faut éviter et ce qu'il faut recommander grâce à notre expérience.
              </li>
              <li class="expertise__list--items">
                Proposer la solution
                Il y a toujours plusieurs solutions en fonction des objectifs désirés et des contraintes budgétaires. Nous vous aiderons à optimiser vos ressources par nos conseils à haute valeur ajoutée.
              </li>
              <li class="expertise__list--items">
                Exécuter la prestation
                Le côté intendance est de notre responsabilité. Vous savez que vous êtes entre de bonnes mains et que vous pouvez utiliser votre énergie sur les autres aspects de l'évènement.
              </li>
              <li class="expertise__list--items">Analyser et évaluer <br>
              Après la prestation, nous serons heureux d'analyser avec vous les résultats de notre intervention. 
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="goodarea">
        <h2>Nos domaines de compétence</h2>
        <hr>
        <ul>
          <li> <router-link to="/informatique" class="expertise__links">informatique</router-link> et <router-link to="" class="expertise__links">bureautique</router-link>, imprimantes, réseaux, photocopieurs…</li>
          <li><router-link to="/assistance" class="expertise__links">Assistance</router-link></li>
        </ul>
        <p>
          <strong>Décrivez vos besoins en cliquant sur le lien ci-dessous de demande de devis</strong>
          Vos données personnelles ne feront pas l'objet de traitement informatique et ne seront utilisées que dans le cadre du présent devis pour pouvoir vous contacter.
        </p>
      
           
     
      </section>
    </div>
             <router-link to="/demander" class="btn__devis container">Demander un devis</router-link>
<v-content>
    <Footer id="contact-section"/>
    </v-content>
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
.expertise {
     font-size: 1.2rem;
     &__links{
         color: #3f51b5;
         text-decoration: none;
         font-weight: bold;
     }
  &__details {
    background: #f2f2f2;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    padding: 2rem;
    position: relative;
    margin: -6rem 1rem;
  }

  &__list {
    &--items {
      padding-top: 1rem;
    }
  }
}
hr {
  background: #3f51b5;

  height: 2px;
  border: none;
}
.goodarea{
    background: #f2f2f2;
    padding: 2rem;
}
.ourknowhow {
  margin-top: 8rem;
 
}
@media (min-width: 64rem) {
    .goodarea{
        width: 50%;
    }
  .expertise {
    &__title {
      font-size: 3rem;

      &--secondary {
        font-size: 2rem;
      }
    }
    &__details {
      position: static;
      margin: 0;
      width: 50%;
    }
    &__image {
      margin: 3rem 0;
      width: 50%;
    }
  }
  .ourexperts {
    display: flex;
    flex-direction: row-reverse;
  }
  .ourknowhow {
    flex-direction: row;
    margin-top: 0;

    &__list {
      padding-left: 2rem;
      width: 50%;
    }
  }
}
</style>