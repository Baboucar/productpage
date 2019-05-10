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
      <a href="http://">Qui sommes-nous?</a>
      <a href="http://">Prestations de service</a>
      <a href="http://">Parc location</a>
      <a href="http://">Contact</a>
      <a href="http://">Demander un devis</a>
      </nav>
    </div>
</template>

<script>
    export default{
       data(){
         return{
           seen:true
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
            
         }
       }
    }
</script>

<style lang="scss" scoped>

.header{
  display: flex;
 background: none;
  position: absolute;
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  
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
.nav a{
   display: block;
   text-decoration: none;
   padding: .8rem;
   border-bottom: 2px solid ;

   color: #FFFFFF;
  
   font-size: 1.5rem;

}

.nav a:nth-child(1){
  padding-top: 6rem;
}

@media(min-width: 720px) {
  .menu__button{
     font-size: 1.5rem;
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