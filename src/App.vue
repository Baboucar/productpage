<template>
  <div id="app">
<Navigation/>
<ProductPage/>
<Footer/>
  </div>
</template>

<script>

import ProductPage from './components/ProductPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    ProductPage,
    Navigation,
    Footer

  }
}
</script>

<style>
@import './assets/base.css';

@import './assets/normalize.css';

#app {
  line-height: 1.7;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
