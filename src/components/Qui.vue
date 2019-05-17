<template>
    <div>
        <Navigation/>
   <h1 class="expertise__title container" >Qui sommes-nous?</h1>

    <section class="ourexperts container">
        <img class="expertise__image" src="productimage/idemia-barcelone-2018.jpg" alt="expertise">
        <div class="expertise__details">
          <h1 class="expertise__title">
           Depuis 1995, Eurolocation intervient sur le marché des salons et de l'événementiel.
          </h1>
  
          <hr>
          <p>
              Nous sommes fiers d'avoir su fidéliser, dans un contexte concurrentiel, une clientèle exigeante qui nous appelle pour notre
               gamme de produits de pointe et la compétence de nos équipes.
          </p>
          <ul class="expertise__list">
            <li class="expertise__list--items">
                À partir de nos deux agences situées à Paris et à Nice, les équipes 
                d'Eurolocation se déploient activement sur la quasi totalité des salons 
                français et accompagnent les clients dans la gestion de leurs événements nationaux et européens.
            </li>

         
          </ul>
        </div>
      </section>
      
         <section class="ourexperts ourknowhow container">
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
    <Footer/>
    </div>
</template>

<script>
import '../assets/expertise.scss';
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

</style>