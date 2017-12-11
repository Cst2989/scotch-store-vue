import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters, manufacturerGetters } from './getters';
import { productActions, manufacturerActions } from './actions';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';

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
    // all manufacturers
    manufacturers: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters),

  actions: Object.assign({}, productActions, manufacturerActions),

  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
});
