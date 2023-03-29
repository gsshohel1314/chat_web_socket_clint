<template>
  <div id="register">
    <div class="register-area pt-100 pb-70">
      <div class="container">
        <div class="register shadow-none p-3 mb-5 bg-light rounded">
          <h3>Register</h3>
          <form @submit.prevent="store()">
            <div v-if="form.progress" class="text-center">
              Progress: {{ form.progress.percentage }}%
            </div>
            <AlertError :form="form" message="There were some problems with your input." />

            <div class="row mb-3">
              <label for="ewu_id_no" class="col-sm-3 col-form-label">EWU id number</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.ewu_id_no" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Your University ID" />
                <HasError :form="form" field="ewu_id_no" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="title" class="col-sm-3 col-form-label">Title</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.title" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Add Title" />
                <HasError :form="form" field="title" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="first_name" class="col-sm-3 col-form-label">First Name</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.first_name" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter your first name" />
                <HasError :form="form" field="first_name" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="middle_name" class="col-sm-3 col-form-label">Middle Name</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.middle_name" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter your middle name" />
                <HasError :form="form" field="middle_name" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="last_name" class="col-sm-3 col-form-label">Last Name</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.last_name" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter your last name" />
                <HasError :form="form" field="last_name" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="personal_email" class="col-sm-3 col-form-label"> Personal E-mail Address</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.personal_email" type="email" class="form-control" id="personal_email"
                  placeholder="Format: personal@example.com" />
                <HasError :form="form" field="personal_email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="university_email" class="col-sm-3 col-form-label">University E-mail Address</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.university_email" type="email" class="form-control" id="university_email"
                  placeholder="Format: university@example.com"  />
                <HasError :form="form" field="university_email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="company_email" class="col-sm-3 col-form-label">Company E-mail Address</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.company_email" type="email" class="form-control" id="company_email"
                  placeholder="Format: company@example.com"  />
                <HasError :form="form" field="company_email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="personal_contact_number" class="col-sm-3 col-form-label">Contact Number</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.personal_contact_number" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Format: 01xxxxxxxxx" />
                <HasError :form="form" field="personal_contact_number" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="nid" class="col-sm-3 col-form-label">NID</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.nid" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter your National Identity Card Number" />
                <HasError :form="form" field="nid" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="dob" class="col-sm-3 col-form-label">Date of Birth</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.dob" type="date" class="form-control shadow-lg bg-white rounded"
                  placeholder="Format: DD-MM-YYYY" />
                <HasError :form="form" field="dob" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="gender" class="col-sm-3 col-form-label">Gender</label>
              <div class="col-sm-7 m-auto">
                <select v-model="form.gender" class="form-select form-control shadow-lg rounded">
                  <option value="">Select One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <HasError :form="form" field="gender" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="blood_group" class="col-sm-3 col-form-label">Blood Group</label>
              <div class="col-sm-7 m-auto">
                <select v-model="form.blood_group" class="form-select form-control shadow-lg rounded">
                  <option value="">Select One</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <HasError :form="form" field="blood_group" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="department_id" class="col-sm-3 col-form-label">Department</label>
              <div class="col-sm-7 m-auto">
                <select v-model="form.department_id" class="form-control form-select shadow-lg rounded">
                    <option value="">Select One</option>
                    <option v-for="(item,index) in departments" :value="item.id">{{item.title}}</option>
                </select>
                <HasError :form="form" field="department_id" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="program" class="col-sm-3 col-form-label">Program</label>
              <div class="col-sm-7 m-auto">
                <select v-model="form.program" class="form-select form-control shadow-lg rounded">
                  <option value="">Select One</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Diploma">Diploma</option>
                </select>
                <HasError :form="form" field="program" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="passing_year" class="col-sm-3 col-form-label">Passing Semester And Year</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.passing_year" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Format: Spring 2021, Fall 2020" />
                <HasError :form="form" field="passing_year" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="convocation_year" class="col-sm-3 col-form-label">Convocation Year</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.convocation_year" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter your convocation year" />
                <HasError :form="form" field="convocation_year" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="organization" class="col-sm-3 col-form-label">Organization Name</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.organization" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter organization name" />
                <HasError :form="form" field="organization" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="designation_department" class="col-sm-3 col-form-label">Designation / Department</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.designation_department" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Designation or Department" />
                <HasError :form="form" field="designation_department" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="occupation" class="col-sm-3 col-form-label">Occupation</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.occupation" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Your Occupation" />
                <HasError :form="form" field="occupation" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="doj" class="col-sm-3 col-form-label">Date of Join</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.doj" type="date" class="form-control shadow-lg bg-white rounded"
                  placeholder="Format: DD-MM-YYYY" />
                <HasError :form="form" field="doj" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="linkedin_profile_link" class="col-sm-3 col-form-label">Linkedin Profile Link</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.linkedin_profile_link" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Linkedin Profile Link" />
                <HasError :form="form" field="linkedin_profile_link" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="image" class="col-sm-3 col-form-label">Image</label>
              <div class="col-sm-7 m-auto">
                <input @change="onImageChange" name="image" type="file" class="form-control shadow-lg bg-white rounded"
                  id="file" />
                <img class="mt-1" :src="imagePreview" style="width: 100px;" alt="">
                <HasError :form="form" field="image" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="username" class="col-sm-3 col-form-label">Username</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.username" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter username" />
                <HasError :form="form" field="username" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="email" class="col-sm-3 col-form-label">Login E-mail</label>
              <div class="col-sm-7 m-auto">
                <select v-model="form.email" class="form-select form-control shadow-lg rounded" placeholder="Choose One" @click="getEmails()">
                  <option v-for="item in emails" :value="item">{{ item }}</option>
                </select>
                <HasError :form="form" field="email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="password" class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.password" type="password" name="password"
                  class="form-control shadow-lg bg-white rounded" placeholder="Enter password" />
                <HasError :form="form" field="password" />
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-7 m-auto">
                <div class="tags-and-share border-0 mb-0 pb-0">
                    <div class="row align-items-center">
                      <div class="col-lg-6 col-md-6">
                        <button type="submit" class="default-btn rounded-pill">
                          Submit
                        </button>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="share">
                          <ul>
                              <li><span>Share :</span></li>

                              <li>
                                <!-- <a href="https://www.facebook.com" target="_blank"><i class="flaticon-facebook"></i></a> -->
                                <ShareNetwork
                                  network="facebook"
                                  url="http://alumni.fscd.xyz/register"
                                  title="Graduate profile"
                                  description="Graduate registration"
                                  quote="Thank you"
                                  hashtags="graduate,alumni"
                                >
                                  <i class="flaticon-facebook"></i>
                                </ShareNetwork>
                              </li>

                              <li>
                                <ShareNetwork
                                  network="linkedin"
                                  url="http://alumni.fscd.xyz/register"
                                  title="Graduate profile"
                                  description="Graduate registration"
                                  quote="Thank you"
                                  hashtags="graduate,alumni"
                                >
                                  <i class="flaticon-linkedin"></i>
                                </ShareNetwork>
                              </li>

                              <li>
                                <ShareNetwork
                                  network="twitter"
                                  url="http://alumni.fscd.xyz/register"
                                  title="Graduate profile"
                                  description="Graduate registration"
                                  quote="Thank you"
                                  hashtags="graduate,alumni"
                                >
                                  <i class="flaticon-twitter"></i>
                                </ShareNetwork>
                              </li>

                              <!-- <li>
                                <ShareNetwork
                                  network="email"
                                  url="http://alumni.fscd.xyz/register"
                                  title="Graduate profile"
                                  description="Graduate registration"
                                  quote="Thank you"
                                  hashtags="graduate,alumni"
                                >
                                  <i class="flaticon-email"></i>
                                </ShareNetwork>
                              </li> -->
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <!-- <div class="col-md-12 text-center">
              <button type="submit" class="default-btn">
                Submit<span></span>
              </button>
            </div> -->
          </form>
        </div>
      </div>
      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import Cookies from 'js-cookie'
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";

export default {
  name: "Register",
  components: {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      imagePreview: "",
      valueFrom: "alumni_create",
      form: new Form({
        id: "",

        // basic info
        ewu_id_no: "",
        title: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        nid: "",
        dob: "",
        gender: "",
        blood_group: "",
        about: "",
        image: "",

        // contact info
        personal_email: "",
        university_email: "",
        company_email: "",
        personal_contact_number: "",
        official_contact_number: "",
        facebook_profile_link: "",
        linkedin_profile_link: "",

        // address info
        country_id: "",
        division_id: "",
        district_id: "",

        // educational info
        department_id: "",
        program_id: "",
        program: "",
        passing_year: "",
        passing_semister: "",
        convocation_year: "",

        // professional info
        organization: "",
        designation_department: "",
        occupation: "",
        doj: "",
        experience: "",
        industry: "",

        // login info
        email: "",
        username: "",
        password: ""
      }),

      departments: [],
      emails:[],
    };
  },

  mounted() {
    this.getDependentData();
  },

  methods: {
    getEmails() {
      if (Number(this.form.personal_email.length) > 0) {
        // this.emails.push(this.form.personal_email);
        this.emails[0] = this.form.personal_email;
      } else {
        this.emails[0] = null;
      }

      if (Number(this.form.university_email.length) > 0) {
        // this.emails.push(this.form.university_email);
        this.emails[1] = this.form.university_email;
      } else {
        this.emails[1] = null;
      }

      if (Number(this.form.company_email.length) > 0) {
        // this.emails.push(this.form.company_email);
        this.emails[2] = this.form.company_email;
      } else {
        this.emails[2] = null;
      }
    },

    getDependentData() {

      if (Cookies.get('authIdCookie')){
        axios.get(`${this.backendUrl}/user/info`,{
          params:{
            token:Cookies.get('alumniLoggedInTokenCookie') ? Cookies.get('alumniLoggedInTokenCookie').split('|')[1] : Cookies.get('jobUserLoggedInToken').split('|')[1],
          }
        })
          .then((response) => {
            if (!response.data.data.alumni){
              // this.form.ewu_id_no = response.data.data.resume.;
              // this.form.title = response.data.data.resume.;
              this.form.first_name = response.data.data.resume.first_name;
              // this.form.middle_name = response.data.data.resume.;
              this.form.last_name = response.data.data.resume.last_name;
              this.form.personal_email = response.data.data.resume.email;
              // this.form.university_email = response.data.data.resume.;
              // this.form.company_email = response.data.data.resume.;
              this.form.personal_contact_number = response.data.data.resume.phone_no;
              this.form.nid = response.data.data.resume.nid;
              this.form.dob = response.data.data.resume.date_of_birth;
              this.form.gender = response.data.data.resume.gender;
              this.form.blood_group = response.data.data.resume.blood_group;
              // this.form.department_id = response.data.data.resume.;
              // this.form.program_id = response.data.data.resume.;
              // this.form.passing_year = response.data.data.resume.;
              // this.form.convocation_year = response.data.data.resume.;
              // this.form.organization = response.data.data.resume.;
              // this.form.designation_department = response.data.data.resume.;
              // this.form.occupation = response.data.data.resume.;
              // this.form.doj = response.data.data.resume.;
              // this.form.experience = response.data.data.resume.;
              // this.form.linkedin_profile_link = response.data.data.resume.;
              // this.form.image = response.data.data.resume.;
              this.form.email = response.data.data.resume.email;
              this.form.username = response.data.data.resume.username;
              this.form.password = response.data.data.resume.password;
            }
          })
          .catch((e) => {
            this.$Progress.fail();
          });
      }

      axios.get(`${this.backendUrl}/department`)
        .then((response) => {
          this.departments = response.data.data;
          // console.log(this.departments);
        })
        .catch((e) => {
          this.$Progress.fail();
        });
    },

    onImageChange(e){
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = (file) => {
        this.imagePreview = reader.result;
        this.form.image = reader.result;
      }
      reader.readAsDataURL(file);
    },

    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form.post(`${this.backendUrl}/alumni/register`, {
        params: {
          valueFrom: this.valueFrom,
          auth_id:Cookies.get('authIdCookie')
        },
      })
        .then((response) => {
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({ type: "success", title: "Success", text: response.data.message });
            this.form.reset()
            $('#file').val('')
            this.imagePreview = ''
          } else {
            this.$Progress.fail();
            this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
          }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
  },
};
</script>

<style>

</style>
