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
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  LOGIN,
  REGISTER,
  UPDATE_PROFILE,
  RESET_PASSWORD,
  REMOVE_FROM_CART,
  ORDER_PRODUCTS_ASC,
  ORDER_PRODUCTS_DESC,
  ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_YEAR,
  ALL_PRODUCTS_SUCCESS,
} from './mutation-types';

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    // Called when fetching products
    state.showLoader = true
  },
  [LOGIN] (state, payload) {
    // Called when fetching products
    if(payload.id) {
      state.isLoggedIn = true;
      state.user = payload;
    }
  },
  [REGISTER] (state, payload) {
    // Called when fetching products
    if(payload.id) {
      state.isLoggedIn = true;
      state.user = payload;
    }
  },
  [UPDATE_PROFILE] (state, payload) {
    // Called when fetching products
    if(payload.id) {
      state.user = payload;
    }
  },
  [RESET_PASSWORD] (state, payload) {
    // Called when fetching products
    alert('Password Updated');
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
  [FILTER_BY_YEAR]: (state, payload) => {
    state.products = state.products.filter((a) => a.year > payload);
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

export const whishlistMutations = {
  [ADD_TO_WISHLIST]: (state, payload) => state.wishlist.push(payload),
  [REMOVE_FROM_WISHLIST]: (state, payload) => {
    const index = state.wishlist.findIndex(p => p._id === payload)
    state.wishlist.splice(index, 1)
  }
}

