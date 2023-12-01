<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
export default {
  data() {
    return {
      firstName: store.state.officerDetails.Fname,
      lastName: store.state.officerDetails.Lname,
      email: store.state.officerDetails.Email,
      contact: store.state.officerDetails.Contact,
      regiNumber: store.state.officerDetails.RegiNumber,
      rank: store.state.officerDetails.Rank,
      station: store.state.officerDetails.Station,
    };
  },
  methods: {
    updateProfile() {
      axios
        .post("", {
          RegiNumber: this.regiNumber,
          Rank: this.rank,
          Station: this.station,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logOut(){
      localStorage.clear();
      store.dispatch('setLoggedIn');
      this.$router.push("/signIn")     
    },
  },
};
</script>

<template>
    <div
    className=" bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
  <br>
  <div class="container rounded bg-white mt-5 mb-5" style="color: black">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-40"
            width="250px"
            src="src\assets\image\pnew.jpg"
          />
        </div>
      </div>
      <div class="col-md-7 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">First Name</label
              ><input
                type="text"
                class="form-control"
                placeholder="Firstname"
                v-model="firstName"
                disabled
              />
            </div>
            <div class="col-md-6">
              <label class="labels">Last Name</label
              ><input
                type="text"
                class="form-control"
                v-model="lastName"
                placeholder="Lastname"
                disabled
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Mobile Number</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter phone number"
                v-model="contact"
                disabled
              />
            </div>
            <br /><br />
            <br />
            <div class="col-md-12">
              <label class="labels">Police Station</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 1"
                v-model="station"
              />
            </div>
            <br /><br />
            <br />
            <div class="col-md-12">
              <label class="labels">Rank</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter Post Code"
                v-model="rank"
              />
            </div>
            <br /><br />
            <br />
            <div class="col-md-12">
              <label class="labels">Police Service ID</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter license number"
               v-model="regiNumber"
               disabled
              />
            </div>
            <br /><br />
            <br />
            <div class="col-md-12">
              <label class="labels">E Mail</label
              ><input
                type="text"
                class="form-control"
                placeholder="email"
                v-model="email"
                disabled
              />
            </div>
            <br /><br />
            <br />
          </div>

          <div class="mt-5 text-center">
            <button class="btn btn-success profile-button mr-7" type="button" @click="updateProfile()">
              S a v e
            </button>
            <button class="btn btn-warning profile-button" type="button" @click="logOut()">
              Log Out
            </button>
            </div>
          </div>
      </div>
    </div>
  </div>
    </div>
</template>
