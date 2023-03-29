<template>
  <div id="forgot-password">
    <div class="password-area pt-100 pb-70">
      <div class="container">
        <div class="password shadow-none p-3 bg-light rounded">
          <h3>Forgot Password</h3>
          <form @submit.prevent="submit">
            <div v-if="form.progress" class="text-center">
              Progress: {{ form.progress.percentage }}%
            </div>
            <AlertError :form="form" message="There were some problems with your input." />

            <div class="row mb-3">
              <label for="email" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.email" type="text" name="email" class="form-control shadow-lg bg-white rounded" placeholder="Enter Your valid email address" />
                <HasError :form="form" field="email" />
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
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
  name: "ForgotPassword",
  components: {Button, HasError, AlertError},

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      form: new Form({
        email: ""
      }),
    }
  },

  methods: {
    submit(){
      this.form.busy = true
      this.form.post(`${this.backendUrl}/alumni/forgot-password`)
      .then(response => {
        this.$notify({type: "success", title: "Success", text: response.data.message});
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
.underline-on-hover:hover {
    text-decoration: underline !important;
    color: blue !important;
}
</style>