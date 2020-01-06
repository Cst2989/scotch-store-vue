import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Service from '@/pages/Service';
import DespreNoi from '@/pages/DespreNoi';
import Catalog from '@/pages/Catalog';
import Contact from '@/pages/Contact';
import Cart from '@/pages/Cart';
import Details from '@/pages/Details';
// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/service',
        name: 'Service',
        component: Service,
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
  },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/despre-noi',
        name: 'Despre Noi',
        component: DespreNoi,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        }, {
          path: '',
          name: 'Products',
          component: Products,
        }, {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },{
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ],
});
