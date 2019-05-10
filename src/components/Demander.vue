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
                <label for="">Assistance</label>
                <input type="checkbox">
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
                <label for="" class="form__label">Date de début de l'événement</label>
                   <input type="date" name="" id="">
            </div>
            
            <div>
                <label class="form__label" for="">Date de fin de l'événement</label>
                <input type="date" name="" id="">
            </div>
      <div>

            <input type="file" name="" id="">
      </div>
      

        </form>

        <form action="">
         <h3>Vos coordonnées</h3>
         <div>
             <label class="form__label">Nom</label>
               <input type="text" name="" id="">
         </div>
         <div>
             <label class="form__label">Telephone</label>
               <input type="text" name="" id="">
         </div>
         <div>
             <label class="form__label">Email</label>
               <input type="text" name="" id="">
         </div>
        <div>
             <label class="form__label">Email</label>
               <input type="text" name="" id="">
        </div>

        <div>
          <input class="btn__submit" type="submit" value="Soumettre">
      </div>

        </form>
    </div>
  <Footer/>

    </div>
</template>

<script>
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
input[type="text"], input[type="date"]{
    height: 45px;
    width: 100%;
}
.btn__submit{
margin-top: 1.5rem;
    padding: .8rem;
    border-radius: 4px;
    background: #02003A;
    border: none;
    color: #FFFFFF;
}
@media(min-width: 64rem){
    input[type="text"], input[type="date"],textarea{
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
      font-weight: bold;
  }
</style>