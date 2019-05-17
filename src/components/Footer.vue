<template>
    <div>
      <footer class="footer spacer" id="contact">
      <div class="footer__logo">
      <img class="footer__logo__image" src="../assets/bw-b-w-logo.png" alt="footer logo">
      </div>

     <div class="footer__address container">
        <h3 class="">Contact</h3>
        <p class="">
1135 Hay,Massira 1 - Temara - Marco<br>
Tél:+2123756 10 39/037 56 13 08  <br>
Heure de fonctionnement <br>
Du Lundi au Vendredi:8H – 18h
        </p>
      <!--  <div class="icons">
<a class="icons__link" href="https://www.linkedin.com/company/sogesmi-net/about/?viewAsMember=true"><img  src="../assets/link2.png"
        alt="linkedin"></a>
<a class="icons__link" href="https://www.facebook.com/Sogesminet/"><img src="../assets/face2.png"  alt="facebbok" ></a>
    </div>  -->
    
</div>

  <form class="form container" action="">
  <h2 class="form__title ">Contact</h2>
   <div class="form__input">
   <input type="text" name="" placeholder="Nom" id="">
   </div>

   <div class="form__input">
   <input type="text" name="" placeholder="Societe" id="">
   </div>
   
   <div class="form__input">
     <label for="telephone">Phone</label>
   <input type="text" name="" placeholder="Votre Telephone" id="telephone" required>
   </div>

   <div class="form__input">
   <label for="email">Email</label>
   <input type="text" name="" placeholder="email" id="email">
   </div>

   <div class="form__input">
   <textarea name="" id="" cols="30" rows="10" placeholder="Votre Message"></textarea>
   </div>
   <div class="form__input">
   <input type="submit" value="Submit">
   </div>
  </form>
      </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    background: #1a194d;

  &__address{
      color: #FFFFFF;
      text-align: center;
  }
    &__logo{
       &__image{
            display: block;
        margin: 0 auto;
        padding-top: 2rem;
            width: 200px;
       }
    }
}
input[type="text"],textarea{
    width: 100%;
    border: none;
    border: 2px solid #eee;
    
    border-radius: 1px;
}
input[type="text"]{
    height: 40px;
}

input[type="submit"]{
    background: #3f51b5;
    border: none;
    color: #FFFFFF;
    font-size: 1.2rem;
    padding: .7rem 2.5rem;
    border-radius: 4px;
}
.form__input{
    margin-top: 1.5rem;
}

.form__title{
    color: #FFFFFF;
}

::placeholder{
    padding-left: .5rem;
}
label{
    color: #FFFFFF;
    display: inline-block;
    padding-bottom: .5rem;
}
.icons{
    display: flex;
    justify-content: center;
   
    &__link{
        padding-left: 1rem;
    }
}

@media(min-width:64rem){
   .footer{
       display: grid;
       grid-template-columns: 1fr 1fr 2fr ;
   }
}
</style>