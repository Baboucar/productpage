<template>
  <div>
    <Navigation/>
    <div class="container">
      <h1>Demander un devis</h1>
      <form method="POST" action="https://formspree.io/bwtech.contact@gmail.com">
        <div class="flex__input">
          <label for="informatique">Informatique</label>
          <input type="checkbox" name="informatique" id="informatique">
        </div>

        <div class="flex__input">
          <label for="photocopie">Impression - Numérisation - Photocopie</label>
          <input type="checkbox" name="photocopie" id>
        </div>

        <div class="flex__input">
          <label for>Assistance</label>
          <input type="checkbox" name="assistance">
        </div>

        <h5>Modalités de livraison</h5>
        <div class="flex__input">
          <label for>
            Modalités de livraison
            Je viens chercher le matériel en vos locaux
          </label>
          <input type="checkbox" name=" matériel en vos locaux" id>
        </div>

        <div class="flex__input">
          <label for>Je désire une livraison</label>
          <input type="checkbox" name="Je désire une livraison" id>
        </div>

        <div>
          <label class="form__label" for>Lieu de livraison</label>
          <input type="text" name="Lieu de livraison" id>
        </div>

        <div>
          <label class="form__label" for>Quel est votre projet ?</label>
          <textarea name="project" id cols="30" rows="10"></textarea>
        </div>
        <div>
          <label for class="form__label">Date de début de l'événement</label>
          <input type="date" name="date de debut" id>
        </div>

        <div>
          <label class="form__label" for>Date de fin de l'événement</label>
          <input type="date" name="date de fin" id>
        </div>
        <div class="file__upload">
          <input
                        type="hidden"
                        role="uploadcare-uploader"/>
        </div>

        <h3>Vos coordonnées</h3>
        <div>
          <label class="form__label">Nom</label>
          <input type="text" name="nom" id>
        </div>
        <div>
          <label class="form__label">Telephone</label>
          <input type="text" name="telephone" id>
        </div>
        <div>
          <label class="form__label">Email</label>
          <input type="text" name="email" id>
        </div>
        <div>
          <label class="form__label">Société</label>
          <input type="text" name="société" id>
        </div>

        <div>
          <input class="btn__submit" type="submit" value="Soumettre">
        </div>
      </form>
    </div>
   
      <Footer id="contact-section"/>
   
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
.flex__input {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

label {
  padding-left: 1rem;
}
textarea {
  width: 100%;
}
.file__upload {
   
    margin-top: 1rem ;
}
input[type="text"],
input[type="date"] {
  height: 45px;
  width: 100%;
}
.btn__submit {
  margin-top: 1.5rem;
  padding: 0.8rem;
  border-radius: 4px;
  background: #02003a;
  border: none;
  color: #ffffff;
}
@media (min-width: 64rem) {
  input[type="text"],
  input[type="date"],
  textarea {
    width: 30%;
  }
}

input[type="text"],
input[type="date"],
textarea {
  background: #f2f2f2;
  border: none;
}
.form__label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}
</style>