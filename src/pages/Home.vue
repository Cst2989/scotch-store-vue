<template>
  <div>
    <slider animation="fade">
      <slider-item v-for="(i, index) in slides" :key="index">
        <div :style="i">
          <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
        </div>
      </slider-item>
    </slider>
    <div class="title">
      <h1><i class="fa fa-braille"></i> Welcome to our website!</h1>
    </div>
    <div class="container">
      <div class="form col-md-6">
        <div class="form-group">
          <input type="text" class="form-control" v-model="username" placeholder="Username">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
         <div class="form-group">
          <button v-on:click="login()" class="btn btn-default">Login</button>
        </div>
      </div>
    </div>
    <div class="title">
        <h1><i class="fa fa-server"></i> Serviciile Noastre</h1>
    </div>
    <div class="container">
        <service-list :size="4"></service-list>
    </div>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
  import ProductList from '../components/products/ProductList.vue'
  import ServicesList from '../components/services/ServicesList.vue'
  export default {
    name: 'home',
    data () {
        return {
          slides: [
            { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
            { backgroundColor: '#eee', width: '100%', height: '100%' },
            { backgroundColor: '#f44336', width: '100%', height: '100%' },
          ],
          username: '',
          password: '',
        }
    },
    methods: {
      login() {
        let payload = {
          username: encodeHTML(this.username),
          password: encodeHTML(this.password),
        }
        this.$store.dispatch('login', payload)
      },
      encodeHTML(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
      }
    },
    components: {
      'product-list': ProductList,
      'service-list': ServicesList,
      'slider': Slider,
      'slider-item': SliderItem
    }
  }
</script>
