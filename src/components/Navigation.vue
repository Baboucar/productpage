<template>
    <div>
      <header>
        
       

         <div>
          <header class="header" >
          <div>
                 
        <router-link to = "/"> <img class="logo__image" src="../assets/bw-b-w-logo.png" alt="logo"></router-link>
       
    
          </div>
          <div class="header__nav">
        <router-link to="/product" class="header__nav__link" >PARC LOCATION</router-link>
          <router-link to="/expertise" class="header__nav__link" >NOTRE EXPERTISE</router-link>
            <router-link to="/demander" class="  request" >DEMANDER UN DEVIS</router-link>
        <router-view></router-view>
        </div>
               <span class="menu__button" @click="openmenu">&#9776;</span>
          </header>
    
         </div>
      </header>
      <nav class="nav" v-if="seen">
        
        <router-link to="/qui" class="first__link links ">Qui sommes-nous?</router-link>
          <button @click="openfirstdropdown" class="dropdownbutton">Prestations de service</button>
          <hr>
           <div class="drop-downcontainer" v-if="visible">
              
             
    
               <router-link to="/instillation"  class="sub__links">Livraison et instllation</router-link>
           </div>
          
           
       
        
           <button @click="openseconddropdown" class="dropdownbutton">Parc location</button>
          <hr>
           <div class="drop-downcontainer" v-if="visibleLocation">
              
               <router-link to="/ordinatures" class="sub__links">Ordinateurs</router-link>
               <router-link to="/router" class="sub__links">Reseaux,internet,wifi</router-link>
               <router-link to="/asscories" class="sub__links">accessoires informatique</router-link>
               <router-link to="/impressions" class="sub__links">Impression, Numérisation, Télecopie</router-link>
            
           </div>

         
           <router-link class="links" to="#" v-scroll-to="'#contact-section'">Contact</router-link>
             <router-link to="/demander" class="links">Demander un devis</router-link>
        
     
   
   
     
     
      </nav>
      <div class="subnav">
         <router-link to="/" class="subnav__links">Accuel>>></router-link>
         <router-link to="/demander" class="subnav__links">Demander un devis</router-link>
      </div>
    </div>
</template>

<script>
    export default{
       data(){
         return{
           seen:true,
           visible:false,
           visibleLocation:false
         }
       },

       methods:{
           openmenu(){
             if(document.querySelector(".nav").style.right ==  "-2000px"){
               document.querySelector(".nav").style.right =  "0";
             }
             else{
               document.querySelector(".nav").style.right =  "-2000px"
             }

             
            
         },
         openfirstdropdown(){
            if(this.visible == true ){
              this.visible = false;
            }
            else{
              this.visible = true;
            }
         },
         openseconddropdown(){
            if(this.visibleLocation == true ){
              this.visibleLocation = false;
            }
            else{
              this.visibleLocation = true;
            }
         }
       }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Croissant+One&display=swap');


.header{
  display: flex;
  background:#1a194d; 
  padding: 1rem 2rem;
  align-items: center;
    font-family: 'Croissant One', cursive;




  
}
.subnav{
  background: #f2f2f2;
}

hr{
  background: #FFFFFF;
}
.subnav__links{
  color: #000000;
  padding: .5rem;
  display: inline-block;
}
.sub__links{
  display: block;
  padding-left: 1.5rem;
  padding-bottom: .5rem;
  padding-top: .5rem;
  color: #FFFFFF;
  font-size: 1.2rem;
}

.header__nav{
  display: none;
}
.logo__image{
  width: 70px;
}
.menu__button{
    margin-left: auto;
     font-size: 1.5rem;
     color: #FFFFFF;
     cursor: pointer;
     position: relative;
     z-index: 1;
}

.nav{
  position: fixed;
  width: 100%;
  top: 0;
  right: -2000px;
  transition: all .5s;
  height: 100%;
  background:#1a194d;
  


}
.first__link{
  margin-top: 4rem;
}
.dropdownbutton{
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.5rem;
  padding: 1rem;

  &::selection{
    border: none;
  }
}
.nav .links{
   display: block;
   text-decoration: none;
  //  padding: .8rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
   border-bottom: 2px solid ;
   color: #FFFFFF;
   font-size: 1.5rem;


}

// .nav :nth-child(1){
//   padding-top: 6rem;
// }

@media(min-width: 65rem) {
  .menu__button{
     font-size: 3rem;
   position: fixed;
   right: 4rem;
  }

  .logo__image{
  width: 150px;
}

 .first__link{
   background:#1a194d;
  padding-top: 6rem;
}
.header__nav{
  display: block;
  font-family: unset;
  margin-left: auto;
  flex-direction: row;
  margin-right: 10rem;
  
   
    

 
   &__link{
    color: #FFFFFF;
    text-decoration: none;
    padding-left: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
     &:hover{
       background: #3f51b5;
       padding: 1rem;
       transition: all ease .5s;
       border: 5px;
       margin-left: 2rem;
       
     }
     
   }
}


.request{
  
    margin-left: 2rem;
    padding: 1rem;
    background: #FFFFFF;
    color: #1a194d;
    text-decoration: none;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1.5rem;

   

}
  .nav{
    width: 35rem;
  }
}
</style>