<template>
  <div>
    <footer class="footer spacer" id="contact">
    
      <div class="footer__logo">
        <img
          class="footer__logo__image"
          src="../assets/bw-b-w-logo.png"
          alt="footer logo"
        />
      </div>

      <div class="footer__address container">
        <h3 class="">Contact</h3>
        <p class="">
          1135 Hay,Massira 1 - Temara - Maroc<br />
          Tél:+2123756 10 39/037 56 13 08 <br />
          Heure de fonctionnement <br />
          Du Lundi au Vendredi:8H – 18h
        </p>
     </div>

      <form
        class="form container"
        action="https://formspree.io/bwtech.contact@gmail.com"
        method="POST"
      >
        <h2 class="form__title ">Contact</h2>
       <div class="flex-inputs">
        <div class="form__input">
          <input type="text" name="nom" placeholder="Nom" id="" />
        </div>

        <div class="form__input">
          <input type="text" name="societe" placeholder="Societe" id="" />
        </div>
       </div>
       <div class="flex-inputs">
        <div class="form__input">
          <label for="telephone">Phone <span class="require">*</span></label>
          <input
            type="text"
            name="telephone"
            placeholder="Votre Telephone"
            id="telephone"
            required
          />
        </div>

        <div class="form__input">
          <label for="email">Email <span class="require">*</span></label>
          <input type="text" name="email" placeholder="email" id="email" />
        </div>
      </div>
        <div class="form__input">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Votre Message"
          ></textarea>
        </div>
        <div class="form__input">
          <input type="submit" value="Soumettre" />
        </div>

       
      </form>
      
    </footer>

     <div class="down">
        <router-link to=""> Mentions légales</router-link>
         <router-link to="">Nos références</router-link>
         <router-link to="">Demander un devis </router-link>
         <router-link to="">S'identifier </router-link>
         <router-link to="">Conditions générales de location </router-link>

        
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.require {
  color: red;
}
.footer {
  background: #1a194d;

  &__address {
    color: #ffffff;
    text-align: center;
  }
  &__logo {
    &__image {
      display: block;
      margin: 0 auto;
      padding-top: 2rem;
      width: 200px;
    }
  }
}
.down{
     background: #3f51b5;
}
.down a{
    display: block;
   
    color: white;;
    padding: 1rem;
    text-decoration: none;
    margin-top: 0;
}
input[type="text"],
textarea {
  width: 100%;
  border: none;
  border: 2px solid #eee;

  border-radius: 1px;
}
input[type="text"] {
  height: 40px;
}

input[type="submit"] {
  background: #3f51b5;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.7rem 2.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.form__input {
  margin-top: 1.5rem;
}

.form__title {
  color: #ffffff;
}

::placeholder {
  padding-left: 0.5rem;
}
label {
  color: #ffffff;
  display: inline-block;
  padding-bottom: 0.5rem;
}
.icons {
  display: flex;
  justify-content: center;

  &__link {
    padding-left: 1rem;
  }
}

@media (min-width: 64rem) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
  }

  .down a{
      display: inline-block;
      font-weight: bold;
      
  }
  .flex-inputs{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
  }
}
</style>
