import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import Expertise from './components/Expertise';
import Informatique from './components/Informatique';
import Assistance from './components/Assistance';
import Demander from './components/Demander';
import Home from './components/Home'

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
      path:'/assistance',
      name:'assistance',
      component:Assistance
       },
       {
           path:'/home',
           name:'home',
           component:Home
       },
       {
         path:'/demander',
         name:'demander',
         component:Demander
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