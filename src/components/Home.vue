<template>
    <div>
  <Navigation :class="changebackground" />
   <div class="slider">
       <img src="productimage/neuropsychiatrie-congres-2017.jpg" alt="">
   </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';
    export default {
        components:{
            Navigation
        },
        data(){
           return{
               changebackground:'.header'
           }
        }
    }
</script>

<style lang="scss" scoped>
   .header{
       background: #FFFFFF;
   }
</style>