<template>
  <div id="app">

 
<router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    

  }
}
</script>

<style>
@import './assets/base.css';

@import './assets/normalize.css';

#app {
  line-height: 1.7;
 font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #263238;
  
}
</style>
