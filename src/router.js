import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from './components/ProductPage.vue';
import ProductDetails from './components/ProductDetails.vue';
import Expertise from './components/Expertise.vue';
import Informatique from './components/Informatique';
Vue.use(Router);

const router = new Router({
  
 mode:'history',
   routes:[
    {
        path: '/expertise',
        name:'expertise',
        component:Expertise
       },
       {
       path:'/informatique',
       name:'informatique',
       component:Informatique
       },
   {
       path: '/',
       name:'product',
       component:ProductPage
   },
   {
       path:'/:id',
       name:'productdetails',
       component:ProductDetails
   },
   
   ]
});

export default router;