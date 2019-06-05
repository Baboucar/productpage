import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import Expertise from './components/Expertise';
import Informatique from './components/Informatique';
import Assistance from './components/Assistance';
import Demander from './components/Demander';
import Home from './components/Home';
import Ordinatures from './components/Ordinatures';
import Printers from './components/Printers';
import Scanner from './components/Scanner';
import Photocopy from './components/Photocopy';
import Routers from './components/Routers';
import Qui from './components/Qui';
import Asscories from './components/Asscories';
import Instillation from './components/Instillation';
import Impressions from './components/Impressions';
import InformatiqueDetails from './components/InformatiqueDetails';

import PCDetails from './components/PCDetails';
Vue.use(Router);

const router = new Router({
  
 mode:'history',
   routes:[
    {
        path:'/',
        name:'home',
        component:Home
    },

       {
           path:'/pcdetails',
           name:'pcdetails',
           component:PCDetails
       },
       {
        path:'/scanner',
        name:'scanner',
        component:Scanner
       },
       {
       path:'/informatiquedetails',
       name:'informatiquedetails',
       component:InformatiqueDetails
       },

    {
        path: '/expertise',
        name:'expertise',
        component:Expertise
       },
       {
        path:'/qui',
        name:'qui',
        component:Qui
       },
       {
       path:'/informatique',
       name:'informatique',
       component:Informatique
       },
       {
           path:'/instillation',
           name:'installition',
           component:Instillation
       },
       {
      path:'/assistance',
      name:'assistance',
      component:Assistance
       },
       {
       path:'/asscories',
       name:'asscories',
       component:Asscories
       },
      
     
       {
        path:'/ordinatures',
        name:'ordinatures',
        component:Ordinatures
       },
       {
       path:'/impressions',
       name:'impressions',
       component:Impressions
       },
       {
       path:'/printers',
       name:'printers',
       component:Printers
       },
       {
        path:'/photocopy',
        name:'photocopy',
        component:Photocopy
       },
       {
           path:'/router',
           name:'router',
           component:Routers
       },
       {
         path:'/demander',
         name:'demander',
         component:Demander
       },
       
   {
       path: '/product',
       name:'product',
       component:ProductPage
   },
   
   {
       path:'/:id',
       name:'productdetails',
       component:ProductDetails
   },
   
   ],
   scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;