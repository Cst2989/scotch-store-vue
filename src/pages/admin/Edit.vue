<template>
  <h2>In development</h2>
</template>

<script>
  import ProductFrom from '../../components/products/ProductForm.vue'
  export default {
    created () {
      if (!this.model.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      model () {
        const productById = this.$store.getters.productById(this.$route.params['id'])
        return Object.assign({}, productById)
      }
    },
    methods: {
      updateProduct (model) {
        this.$store.dispatch('updateProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
