<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Model</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label>Year</label>
        <input
          type="text"
          placeholder="Year"
          v-model="model.year"
          v-validate="'required'"
          name="year"
          :class="{'form-control': true, 'error': errors.has('year') }" />
        <span class="small text-danger" v-show="errors.has('year')">Year is required</span>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          v-validate="'required'"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Location"
          v-model="model.location"
          v-validate="'required'"
          name="location"
          :class="{'form-control': true, 'error': errors.has('location') }" />
        <span class="small text-danger" v-show="errors.has('location')">Location is required</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Image is required and must be a valid URL</span>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import {
    ERROR_MSG
  } from '../../store/mutation-types'
  export default {
    props: ['model', 'manufacturers', 'isEditing'],
    created () {
    },
    methods: {
      saveProduct () {
        this.$validator.validateAll().then(() => {
          this.$emit('save-product', this.model)
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.'
          })
        })
      }
    }
  }
</script>
