<template>
    <div>
  <HomeNav/>
   <section class="slider">
       <img src="productimage/neuropsychiatrie-congres-2017.jpg" alt="">
   </section>
    <section class="prestations">
        <h1 class="prestations__title center__text">NOS PRESTATIONS</h1>

    </section>
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav';
    export default {
        components:{
            HomeNav
        },
        
    }
</script>

<style lang="scss" scoped>

@media(min-width:64rem){
    .prestations{
        &__title{
            font-size: 3rem;
        }
    }
}
   
</style>