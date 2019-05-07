<template>
    <div>
    <Navigation/>
    <div class="container">
        <h1>Demander un devis</h1>
        <form action="">
           <div class="flex__input"> 
               <label for="informatique">Informatique</label>
               <input type="checkbox" name="informatique" id="informatique">
           </div>

           <div class="flex__input">
               <label for="photocopie">Impression - Numérisation - Photocopie</label>
               <input type="checkbox" name="" id="">
           </div>

           <div class="flex__input">
               <label for=""> Grand Ecran</label>
               <input type="checkbox" name="gradnecran" id="">
           </div>

           <div class="flex__input">
               <label for=""> Mur d'images</label>
               <input type="checkbox" name="" id="">
           </div>

           <div class="flex__input">
               <label for="vide">Vidéoprojection</label>
               <input type="checkbox" name="" id="">
           </div>

           <div class="flex__input">
               <label for="">Sonorisation</label>
               <input type="checkbox" name="" id="">
           </div>

           <div class="flex__input">
               <label for="">Eclairage</label>
               <input type="checkbox" name="" id="">
           </div>

            <div class="flex__input">
                <label for="">Assistance</label>
                <input type="checkbox">
            </div>

            <div class="flex__input">
                <label for="">Développement spécifique</label>
                <input type="checkbox" name="" id="">
            </div>
           
            <h5>Modalités de livraison</h5>
            <div class="flex__input">
                <label for="">
Modalités de livraison
 Je viens chercher le matériel en vos locaux</label>
  <input type="checkbox" name="" id="">
            </div>
            
            <div class="flex__input">
                <label for="">Je désire une livraison</label>
                <input type="checkbox" name="" id="">
            </div>

            <div>
                <label class="form__label" for="">Lieu de livraison</label>
                <input type="text" name="" id="">
            </div>

            <div>
                <label class="form__label" for="">Quel est votre projet ?</label>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
            </div>
            <div>
                <label class="form__label" for="">Date de début de l'événement</label>
                <input type="datetime" name="" id="">
            </div>
      <div>

            <input type="file" name="" id="">
      </div>
        </form>
    </div>

    </div>
</template>

<script>
import Navigation from '../components/Navigation';
    export default {
        components:{
         Navigation
        }
    }
</script>

<style lang="scss" scoped>
  .flex__input{
      display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;

  }

  label{
       padding-left: 1rem;
  }
  textarea{
      width: 100%;
  }
input[type="text"], input[type="datetime"]{
    height: 45px;
    width: 100%;
}
@media(min-width: 64rem){
    input[type="text"], input[type="datetime"],textarea{
     width: 30%;   
}
}

  input[type="text"], input[type="datetime"], textarea{
    background: #F2F2F2;
    border: none;
    
  }
  .form__label{
      display: block;
      margin-top: 1rem;
  }
</style>