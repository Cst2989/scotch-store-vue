<template>
    <!-- <product-form @save-product="addProduct" :model="model">
    </product-form> -->
    <h2>In development</h2>
</template>
<script>
export default {
}
</script>

<style lang="css">
</style>

<script>
  import ProductFrom from '@/components/products/ProductForm';

  export default {
      data() {
        return {
          model: {}
        }
      },
      created() {
      },
      computed: {
      },
      methods: {
        addProduct (model) {
          this.$store.dispatch('addProduct', model)
        }
      },
      components: {
        'product-form': ProductFrom
      }
    }
</script>
