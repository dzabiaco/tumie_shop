import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import store from '../store/index';
import Dashboard from '../components/Account/Dashboard.vue';
import Orders from '../components/Account/Orders.vue';
import PaymentMethod from '../components/Account/PaymentMethod.vue';
import Address from '../components/Account/Address.vue';
import AccountDetails from '../components/Account/AccountDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/ContactPage/Contact.vue'),
  },
  {
    path: '/account-login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/AccountLogin.vue'),
  },
  {
    path: '/account-register',
    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/AccountRegister.vue'),
  },
  {
    path: '/shop-wishlist',
    component: () => import(/* webpackChunkName: "about" */ '../components/WishList/WishList.vue')
  },
  {
    path: '/shop-cart',
    component: () => import(/* webpackChunkName: "about" */ '../components/Cart/Cart.vue'),
    beforeEnter : guardMyroute,
  },
  {
    path: '/shop-checkout',
    component: () => import(/* webpackChunkName: "about" */ '../components/Checkout/Checkout.vue'),
    beforeEnter : guardMyroute,
  },
  {
    path: '/shop',
    component: () => import(/* webpackChunkName: "about" */ '../components/Shop/Shop.vue'),
  },
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "about" */ '../components/Account/Account.vue'),
    beforeEnter : guardMyroute,

    children: [
      { path: '', component: Dashboard },
      {path: 'orders',component: Orders},
      {path:'payment', component: PaymentMethod},
      {path: 'address', component: Address},
      {path: 'details', component: AccountDetails}
    ]
  },
  {
    path: '/blog',
    component: () => import(/* webpackChunkName: "about" */ '../components/Blog/Blog.vue'),
  },
  {
    path:'/blog-details/:id',
    component: () => import('../components/Blog/BlogDetails.vue'),
  },
  {
    path:'/shop-product/:id',
    component: () => import('../components/Shop/ProductItem.vue'),
  },
  {
    path: '/order-description/:id',
    component: () => import('../components/Account/OrderDescription.vue')
  },
  {
    path: '/:notFound(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../components/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

function guardMyroute(to:any, from:any, next:any)
{
  let isAuthenticated= false;
  if(localStorage.getItem('user'))
    isAuthenticated = true;
  else
    isAuthenticated= false;
  if(isAuthenticated)
  {
    next(); // allow to enter route
  }
  else
  {
    next('/account-login'); // go to '/login';
  }
}

export default router
