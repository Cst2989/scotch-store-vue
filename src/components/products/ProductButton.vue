<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="button button-danger" @click="removeFromCart(product._id)"><i class="fa fa-trash"></i> Remove from Cart</button>
    <button v-if="isLoggedIn && isNotinWishlist" class="button" @click="addToFavorites"><i class="fa fa-star"></i> Add to Favorites</button>
    <button v-if="!isNotinWishlist" class="button" @click="removeFromFavorites(product._id)"><i class="fa fa-trash"></i> Remove from Favorites</button>
  </div>
</template>

<script>
  import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'
  export default {
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart, 
        wishlist: this.$store.state.wishlist,
      }
    },
    computed: {
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }, 
      isNotinWishlist () {
        return this.wishlist.indexOf(this.product) < 0
      },
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    },
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product)
      },
      addToFavorites () {
        this.$store.commit(ADD_TO_WISHLIST, this.product)
      },
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      },
      removeFromFavorites(id) {
        this.$store.commit(REMOVE_FROM_WISHLIST, id)
      }
    }
  }
</script>
