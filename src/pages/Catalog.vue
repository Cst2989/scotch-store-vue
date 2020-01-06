<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> Cars Catalog</h1>
    </div>
    <div class="container">
        <product-list></product-list>
    </div>
  </div>
</template>

<script>
  import ProductList from '../components/products/ProductList.vue'
  import ServicesList from '../components/services/ServicesList.vue'
  export default {
    name: 'catalog',
    data () {
        return {
          slides: [
            { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
            { backgroundColor: '#eee', width: '100%', height: '100%' },
            { backgroundColor: '#f44336', width: '100%', height: '100%' },
          ]
        }
    },
    components: {
      'product-list': ProductList,
      'service-list': ServicesList,
    }
  }
</script>
