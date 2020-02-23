import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  LOGIN,
  REMOVE_FROM_CART,
  ORDER_PRODUCTS_ASC,
  ORDER_PRODUCTS_DESC,
  ALL_PRODUCTS,
  FILTER_BY_NAME,
  ALL_PRODUCTS_SUCCESS,
} from './mutation-types';

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    // Called when fetching products
    state.showLoader = true
  },
  [LOGIN] (state, payload) {
    // Called when fetching products
    console.log(payload);
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    // Called when products have been fetched
    state.showLoader = false
    // Updates state products
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    // Called when fetching products by ID
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    // Called when product is fetched
    state.showLoader = false
    // Updates state product
    state.product = payload
  },
  [ADD_PRODUCT]: (state, payload) => {
    // ...Same pattern
    state.showLoader = true
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products.push(payload)
  },
  [ORDER_PRODUCTS_ASC]: (state) => {
    console.log('aici');
    state.products = state.products.sort((a,b) => a.price > b.price ? 1 : -1);
  },
  [ORDER_PRODUCTS_DESC]: (state) => {
    state.products = state.products.sort((a,b) => a.price > b.price ? -1 : 1);
  },
  [FILTER_BY_NAME]: (state, payload) => {
    state.products = state.products.filter((a) => a.name === payload);
  },
  [UPDATE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = state.products.map(p => {
      if (p._id === payload._id) {
        payload = {...payload}
        return payload
      }
      return p
    })
  },
  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.products.findIndex(p => p._id === payload)
    console.debug('index', index)
    state.products.splice(index, 1)
  }
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p._id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  }
}

