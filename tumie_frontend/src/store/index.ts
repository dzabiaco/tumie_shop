import { createStore } from 'vuex'
import postsModule from './modules/posts/index';
import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';
import userModule from './modules/user/index';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts: postsModule,
    products: productsModule,
    cart: cartModule,
    user:userModule
  }
})
