<template>
  <div id="login">
    <div class="login-area pt-100 pb-70">
      <div class="container">
        <div class="login shadow-none p-3 bg-light rounded">
          <h3>Login</h3>
          <form @submit.prevent="submit">
            <div v-if="form.progress" class="text-center">
              Progress: {{ form.progress.percentage }}%
            </div>
            <AlertError :form="form" message="There were some problems with your input." />

            <div class="row mb-3">
              <label for="email" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.email" type="text" name="email" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Your valid email address" />
                <HasError :form="form" field="email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="password" class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.password" name="password" type="password" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter password" />
                <HasError :form="form" field="password" />
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-7 m-auto">
                <button type="submit" class="default-btn rounded-pill" :disabled="form.busy">
                  Submit
                </button>
              </div>
            </div>

            <div class="row mb-1">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-7 m-auto">
                <router-link :to="{name: 'forgotPassword'}" class="text-muted underline-on-hover">
                  Forgot Password?
                </router-link>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-7 m-auto">
                <span>
                  Not a member yet? 
                  <router-link :to="{name: 'register'}" class="text-muted underline-on-hover">
                    Sign Up
                  </router-link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import Cookies from 'js-cookie'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
  name: "Login",
  components: {
    Button,
    HasError,
    AlertError
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      form: new Form({
        email: "",
        password: "",
      }),
    }
  },

  methods: {
    submit(){
      this.$Progress.start();
      this.form.busy = true
      this.form.post(`${this.backendUrl}/alumni/login`)

      .then(response => {
        // console.log(response);
        if(this.form.successful){
          this.$store.dispatch('setAlumniLoggedInInfo', response.data)
          this.$Progress.finish();
          this.$notify({ type: "success", title: "Success", text: response.data.message });
          this.$router.push({name: 'dashboard'})
        }else{
          this.$Progress.fail();
          this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
          this.$router.push({name: 'login'})
        }
      })
      .catch(e => {
        this.$Progress.fail();
        console.log(e)
      })
    }


    // submit(){
    //   this.$Progress.start();
    //   this.form.busy = true
    //   this.form.post(`${this.backendUrl}/alumni/login`)

    //   .then(response => {
    //     // console.log(response);
    //     /*localStorage.setItem('alumniLoggedInToken',response.data.token)
    //     localStorage.setItem('auth_id',response.data.auth_id)*/

    //       //set into cookies
    //     if (window.location.origin.includes('fscd.xyz')){
    //       Cookies.set('alumniLoggedInTokenCookie', response.data.token, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
    //       Cookies.set('authIdCookie', response.data.auth_user_id, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
    //       Cookies.set('alumniIdCookie', response.data.auth_alumni_id, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
    //     } else{
    //       Cookies.set('alumniLoggedInTokenCookie', response.data.token) // expires in 1 hour
    //       Cookies.set('authIdCookie', response.data.auth_user_id) // expires in 1 hour
    //       Cookies.set('alumniIdCookie', response.data.auth_alumni_id) // expires in 1 hour
    //     }

    //     if(this.form.successful){
    //       // this.$store.dispatch('setAuthId', response.data.auth_alumni_id)
    //       this.$Progress.finish();
    //       this.$notify({ type: "success", title: "Success", text: response.data.message });
    //       this.$router.push({name: 'dashboard'})
    //     }else{
    //       this.$Progress.fail();
    //       this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
    //       this.$router.push({name: 'login'})
    //     }
    //   })
    //   .catch(e => {
    //     this.$Progress.fail();
    //     console.log(e)
    //   })
    // }
  }
}
</script>

<style>
.underline-on-hover:hover {
    text-decoration: underline !important;
    color: blue !important;
}
</style>