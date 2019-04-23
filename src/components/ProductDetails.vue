<template>
    <div>
   <Navigation/>
   {{this.product}}
    </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
   import productlist from '../assets/productlist.json';
    export default {
        data() {
            return{
                id:this.$route.params.id,
                product:{}
            }
        },
        components:{
            Navigation
        },
       
        
        mounted(){
            this.product = productlist.object.find(item => item.id == this.id);
             
        }
    }
</script>

<style lang="scss" scoped>

</style>