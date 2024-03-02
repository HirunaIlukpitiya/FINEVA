<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      email: store.state.driverDetails.Email,
      firstName: store.state.driverDetails.Fname,
      lastName: store.state.driverDetails.Lname,
      contact: store.state.driverDetails.Contact,
      nic: store.state.driverDetails.NIC,
      lin: store.state.driverDetails.LIN,
      address: store.state.driverDetails.Address,
      province: store.state.driverDetails.Province,
      district: store.state.driverDetails.District,
      gender: store.state.driverDetails.Gender,
    };
  },
  methods: {
    updateProfile() {
      console.log(this.contact);
      axios
        .post("http://localhost:8000/Driver/updateDriver", {
          LIN : this.lin,
          Contact : this.contact,
          Address : this.address,

        })
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          axios.post("http://localhost:8000/Driver/driverSearch",{
              LIN:store.state.driverDetails.LIN,
          }).then((response)=>{
            console.log(response)
            const driverDetails = JSON.stringify(
              response.data.driver
            );
            localStorage.setItem("Driver", driverDetails);
            store.dispatch("setDriverDetails");
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
    logOut() {
      Swal.fire({
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
    <br />
    <div class="container rounded bg-white mt-5 mb-5" style="color: black">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-50"
              width="150px"
              src="src\assets\image\avatar.jpg"
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
                  placeholder="Surname"
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
                />
              </div>
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
              <div class="col-md-12">
                <label class="labels">Gender</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="email"
                  v-model="gender"
                  disabled
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Current Address</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="address"
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">NIC</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter Post Code"
                  v-model="nic"
                  disabled
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Disctrict</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter District"
                  v-model="district"
                  disabled
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Province</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter province"
                  v-model="province"
                  disabled
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">License Number</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter license number"
                  v-model="lin"
                  disabled
                />
              </div>
              <br /><br />
              <br />
            </div>

            <div class="mt-5 text-center">
              <button
                @click="updateProfile()"
                class="btn btn-success profile-button mr-5"
                type="button"
              >
                Save Profile
              </button>
              <button
                @click="logOut()"
                class="btn btn-danger profile-button"
                type="button"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
