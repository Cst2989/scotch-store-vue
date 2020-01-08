import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters } from './getters';
import { productActions } from './actions';
import { productMutations, cartMutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters),

  actions: Object.assign({}, productActions),

  mutations: Object.assign({}, productMutations, cartMutations),
});
