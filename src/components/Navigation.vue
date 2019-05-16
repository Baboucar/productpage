<template>
    <div>
      <header>
        
       

         <div>
          <header class="header" >
          <div>
                 
        <router-link to = "/home"> <img class="logo__image" src="../assets/logo-header.png" alt="logo"></router-link>
       
    
          </div>
          <div class="header__nav">
        <router-link to="/" class="header__nav__link" >PARC LOCATION</router-link>
          <router-link to="/expertise" class="header__nav__link" >NOTRE EXPERTISE</router-link>
            <router-link to="/demander" class="  request" >DEMANDER UN DEVIS</router-link>
        <router-view></router-view>
        </div>
               <span class="menu__button" @click="openmenu">&#9776;</span>
          </header>
    
         </div>
      </header>
      <nav class="nav" v-if="seen">
        
         <a href="http://" class="first__link links ">Qui sommes-nous?</a>
          <button @click="openfirstdropdown" class="dropdownbutton">Prestations de service</button>
          <hr>
           <div class="drop-downcontainer" v-if="visible">
               <a href="" class="sub__links">Developpement</a>
             
               <a href="" class="sub__links">Livraison et instllation </a>
           </div>
          
           
              <a href="http://" class="links">Deve</a>
            
        
           <button @click="openseconddropdown" class="dropdownbutton">Parc location</button>
          <hr>
           <div class="drop-downcontainer" v-if="visibleLocation">
               <a href="" class="sub__links">Ordinateurs</a>
             
               <a href="" class="sub__links">Reseaux,internet,wifi </a>
           </div>

         
           <router-link class="links" to="#" v-scroll-to="'#contact-section'">Contact</router-link>
           <a href="http://" class="links">Demander un devis</a>
        
     
   
   
     
     
      </nav>
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

.header{
  display: flex;
  background:#3f51b5; 
  padding: 1rem 2rem;
  align-items: center;
  
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
  width: 200px;
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
     background:#1a194dd4;


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

@media(min-width: 720px) {
  .menu__button{
     font-size: 1.5rem;
  }

 .first__link{
   background:#1a194d;
  padding-top: 6rem;
}
.header__nav{
  display: block;
   margin: 0 auto;
   font-weight: bold;
  
   
    

 
   &__link{
     color: #FFFFFF;
     text-decoration: none;
     padding-left: 2rem;
     &:hover{
       background: #1a194d;
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
   

}
  .nav{
    width: 25rem;
  }
}
</style>