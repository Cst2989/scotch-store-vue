<template>
    <div>
        <div class="header-image">
            <img src="http://via.placeholder.com/1920x250" alt="">
        </div>
        <div class="title">
            <h1><i class="fa fa-braille"></i> Reset Password page</h1>
        </div>
        <div class="container">
            <div class="form col-md-6">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="New Password">
                </div>
                <div class="form-group">
                    <button v-on:click="resetPassword()" class="btn btn-default">Reset</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    name: 'forget',
    data () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        resetPassword() {
            const payload = {
                username: this.username,
                password: this.password,
            }
            this.$store.dispatch('resetPassword', payload)
        }
    }
}
</script>
