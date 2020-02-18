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
           <br><br>
            Filter by Year: <br>
           <select class="form-control" v-on:change="filterByYear($event.target.value)">
             <option value="2000">
               > 2000
             </option>
             <option value="2001">
               > 2001
             </option>
             <option value="2002">
               > 2002
             </option>
             <option value="2003">
               > 2003
             </option>
             <option value="2004">
               > 2004
             </option>
             <option value="2005">
               > 2005
             </option>
             <option value="2006">
               > 2006
             </option>
             <option value="2007">
               > 2007
             </option>
             <option value="2008">
               > 2008
             </option>
             <option value="2009">
               > 2009
             </option>
             <option value="2010">
               > 2010
             </option>
             <option value="2011">
               > 2011
             </option>
             <option value="2012">
               > 2012
             </option>
             <option value="2013">
               > 2013
             </option>
             <option value="2014">
               > 2014
             </option>
             <option value="2015">
               > 2015
             </option>
             <option value="2016">
               > 2016
             </option>
             <option value="2017">
               > 2017
             </option>
             <option value="2018">
               > 2018
             </option>
             <option value="2019">
               > 2019
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
          setTimeout(() =>  this.$store.dispatch('filterByName', this.$route.query.filterBy), 1000)
      }
      if(this.$route.query.sortBy) {
        if (this.$route.query.sortBy === 'asc') {
          setTimeout(() => this.$store.dispatch('orderProductsAsc'), 1000)
        } else {
          setTimeout(() => this.$store.dispatch('orderProductsDesc'), 1000)
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
      },
      filterByYear(year) {
        this.$store.dispatch('filterByYear', year)
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
