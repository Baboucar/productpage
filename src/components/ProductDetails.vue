<template>
    <div>
  <h1>This is the details page!</h1>
   {{this.product}}
    </div>
</template>

<script>
   import productlist from '../assets/productlist.json';
    export default {
        data() {
            return{
                id:this.$route.params.id,
                product:{}
            }
        },
       
        
        mounted(){
            this.product = productlist.object.find(item => item.id == this.$route.params.id);
             
        }
    }
</script>

<style lang="scss" scoped>

</style>