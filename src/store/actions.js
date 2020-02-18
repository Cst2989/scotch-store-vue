// ./src/store/actions
import axios from 'axios';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ORDER_PRODUCTS_ASC,
  ORDER_PRODUCTS_DESC,
  FILTER_BY_NAME,
  FILTER_BY_YEAR,
  LOGIN,
  RESET_PASSWORD,
  REGISTER,
  UPDATE_PROFILE,
  ALL_PRODUCTS_SUCCESS,
} from './mutation-types';

const API_BASE = 'https://vue-express-store.herokuapp.com/api/v1';

export const productActions = {
  orderProductsAsc({commit}) {
    commit(ORDER_PRODUCTS_ASC);
  },
  orderProductsDesc({commit}) {
    commit(ORDER_PRODUCTS_DESC);
  },
  filterByName({commit}, payload) {
    commit(FILTER_BY_NAME, payload);
  },
  filterByYear({commit}, payload) {
    commit(FILTER_BY_YEAR, payload);
  },
  login({commit}, payload) {
    axios.post(`${API_BASE}/login`, payload).then(response => {
      commit(LOGIN, response.data);
    })
  },
  register({commit}, payload) {
    axios.post(`${API_BASE}/register`, payload).then(response => {
      commit(REGISTER, response.data);
    })
  },
  updateProfile({commit}, payload) {
    axios.post(`${API_BASE}/update-profile`, payload).then(response => {
      commit(UPDATE_PROFILE, response.data);
    })
  },
  resetPassword({commit}, payload) {
    axios.post(`${API_BASE}/reset`, payload).then(response => {
      commit(RESET_PASSWORD, response.data);
    })
  },
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    // Fetch actual products from the API
    axios.get(`${API_BASE}/products`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    // Fetch product by ID from API
    axios.get(`${API_BASE}/products/${payload}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    // Create a new product via API
    axios.post(`${API_BASE}/products`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    // Update product via API
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    // Delete product via API
    axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
      console.debug('response', response.data)
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
};

