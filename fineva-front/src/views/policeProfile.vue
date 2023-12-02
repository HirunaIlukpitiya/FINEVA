<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import { toast } from "vue3-toastify";
import store from "../store";
import Swal from "sweetalert2";
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
      console.log(this.rank,this.station)
      axios
        .post("http://localhost:8000/Police/updateOfficer", {
          RegiNumber: this.regiNumber,
          Rank: this.rank,
          Station: this.station,
        })
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });

          axios.post("http://localhost:8000/Police/officerSearch",{
              RegiNumber:store.state.officerDetails.RegiNumber
          }).then((response)=>{
            console.log(response)
            const officerDetails = JSON.stringify(
              response.data.officer
            );
            localStorage.setItem("Officer", officerDetails);
            store.dispatch("setOfficerDetails");
          }).catch((error)=>{
            console.log(error);
          })
          
        })
        .catch((error) => {
          console.log(error);
          const err = error.response.data.message;
          toast.error(err, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
    logOut(){Swal.fire({
        title: "Are you sure?",
        text: "You are going to log out from the system!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Logged Out!",
            "You have successfully logged out!",
            "success"
          );
          localStorage.clear();
          store.dispatch("setLoggedIn");
          this.$router.push("/");
        }
      });
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
            <button class="btn btn-danger profile-button" type="button" @click="logOut()">
              Log Out
            </button>
            </div>
          </div>
      </div>
    </div>
  </div>
    </div>
</template>
