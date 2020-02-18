<template>
  <div v-if="wishlist.length > 0">
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Wishlist</h1>
    </div>
    <template v-for="product in wishlist">
      <product-details :product="product" :key="product.id" ></product-details>
    </template>
  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Wishlist is Empty</h1></div>
</template>

<script>
  import ProductDetails from '../components/products/ProductDetails'
  export default {
    data () {
      return {
        wishlist: this.$store.state.wishlist
      }
    },
    components: {
      productDetails: ProductDetails
    }
  }
</script>
