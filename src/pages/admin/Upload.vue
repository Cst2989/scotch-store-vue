<template>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
        <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </label>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
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
        data(){
            return {
                file: ''
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            submitFile(){
                let formData = new FormData();
                formData.append('file', this.file);
                this.$store.dispatch('uploadCars', formData)
            },
        },
        components: {
            'product-form': ProductFrom
        }
    }
</script>
