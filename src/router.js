import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from './components/ProductPage.vue';
import ProductDetails from './components/ProductDetails.vue';
Vue.use(Router);

const router = new Router({
  
 mode:'history',
   routes:[
   {
       path: '/',
       name:'product',
       component:ProductPage
   },
   {
       path:'/:id',
       name:'productdetails',
       component:ProductDetails
   }
   ]
});

export default router;