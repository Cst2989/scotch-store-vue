<template>
    <div>
        <div class="header-image">
            <img src="http://via.placeholder.com/1920x250" alt="">
        </div>
        <div class="title">
            <h1><i class="fa fa-braille"></i> Profile Page</h1>
        </div>
        <div class="container">
            <div class="form col-md-6">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="name" placeholder="Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="city" placeholder="City">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="phone" placeholder="Phone">
                </div>
                <div class="form-group">
                    <button v-on:click="updateProfile()" class="btn btn-default">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    name: 'profile',
    computed: {
        user () {
            return this.$store.getters.getUser
        }
    },
    data () {
        return {
                email: this.$store.getters.getUser.email,
                name: this.$store.getters.getUser.name,
                city: this.$store.getters.getUser.city,
                phone: this.$store.getters.getUser.phone,
                id: this.$store.getters.getUser.id,
        }
    },
    methods: {
        updateProfile() {
            const payload = {
                id: this.id,
                email: this.email,
                name: this.name,
                city: this.city,
                phone: this.phone,
            }
            this.$store.dispatch('updateProfile', payload)
        }
    }
}
</script>
