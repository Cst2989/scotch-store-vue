<template>
  <div>
    <div class="products">
      <div class="container">
       <div class="col-md-10">
        <template v-for="product in products">
          <product-item :product="product" ></product-item>
        </template>
       </div>
       <div class="col-md-2">
         <div class="filters">
           Sort By Price <br> <span style="color:blue; cursor:pointer;" v-on:click="sortByPriceAsc()">ASC</span> /  <span v-on:click="sortByPriceDesc()" style="color:blue;cursor:pointer;">DESC</span>
           <br><br>
           Filter by Name: <br>
           <select class="form-control" v-on:change="filterByName($event.target.value)">
             <option v-for="product in products" :value="product.name">
               {{product.name}}
             </option>
           </select>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
      if(this.$route.query.filterBy) {
        this.$store.dispatch('filterByName', this.$route.query.filterBy)
      }
      if(this.$route.query.sortBy) {
        if (this.$route.query.sortBy === 'asc') {
          this.$store.dispatch('orderProductsAsc')
        } else {
          this.$store.dispatch('orderProductsDesc')
        }
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    methods: {
      sortByPriceAsc() {
        this.$store.dispatch('orderProductsAsc')
      },
      sortByPriceDesc() {
        this.$store.dispatch('orderProductsDesc')
      },
      filterByName(name) {
        this.$store.dispatch('filterByName', name)
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>
<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
