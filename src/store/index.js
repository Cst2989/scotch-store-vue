import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters } from './getters';
import { productActions } from './actions';
import { productMutations, cartMutations, whishlistMutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
     // bought items
    wishlist: [],
    // ajax loader
    showLoader: false,
    isLoggedIn: false,
    // selected product
    product: {},
    user: {},
    // all products
    products: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters),

  actions: Object.assign({}, productActions),

  mutations: Object.assign({}, productMutations, cartMutations, whishlistMutations),
});
