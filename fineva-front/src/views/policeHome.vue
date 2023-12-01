<script>
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
export default {
  name: "fines",
  data() {
    return {
      fines: [],
      LIN: "",
      rend: "",
      name: "",
      licNumber: "",
      nic: "",
      address: "",
      contact: "",
      gender: "",
      valid: true,
      paystatus: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/Driver/driverSearch", {
          LIN: this.LIN,
        })
        .then((response) => {
          //console.log(response);
          if (response.status == 200) {
            this.rend = true;
          }
          const driver = JSON.stringify(response.data.driver);
          localStorage.setItem("Driver", driver);
          store.dispatch("setDriverDetails");
          this.name = `${response.data.driver.Fname} ${response.data.driver.Lname}`;
          this.licNumber = response.data.driver.LIN;
          this.nic = response.data.driver.NIC;
          this.address = response.data.driver.Address;
          this.gender = response.data.driver.Gender;
          this.contact = response.data.driver.Contact;
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post("http://localhost:8000/Fine/getFine", {
          LIN: this.LIN,
        })
        .then((response) => {
          //console.log(response);
          this.fines = response.data.fine;
          this.fines = this.fines.reverse();
          this.chechValidity();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    moveToAddfine() {
      this.$router.push("/policeAddfine");
    },

    chechValidity() {
      for (let index = 0; index < this.fines.length; index++) {
        const element = this.fines[index];
        console.log(element);
        if (!element.PayStatus) {
          this.valid = false;
        }

        console.log("Pay Status :  " + element.PayStatus);
        console.log("Valid : " + this.valid);
      }
    },
  },
};
</script>

<style lang="css">
@import "../../CSS/policeHome.css";
</style>

<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div v-if="!rend">
      <br /><br /><br /><br />
      <div class="content">
        <div class="text-box">
          <h1 style="font-family: 'Times New Roman', Times, serif">
            <span class="text-wt font-bold">FINEV</span
            ><span class="text-ylv font-bold">A</span>
          </h1>
          <h3>fine pay at your fingertips!</h3>
          <br />
          <h4></h4>
        </div>
      </div>

      <div class="container">
        <div
          class="row height d-flex justify-content-center align-items-center"
        >
          <div class="col-md-7">
            <div class="search">
              <div class="card-header" id="card-header">
                <h4 id="dr">
                  Driver Check<i
                    class="fa fa-check-circle"
                    aria-hidden="true"
                  ></i>
                </h4>
                <label for="" id="dr">Driver's License Number</label>
              </div>
              <form @submit.prevent="submitForm" class="d-flex">
                <i class="fa fa-search"></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter the License Number of the Driver."
                  v-model="LIN"
                />
                <button class="btn btn-outline-warning me-md-2" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-if="rend">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-7">
          <div class="search">
            <form @submit.prevent="submitForm" action="" class="d-flex">
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control"
                placeholder="License Number"
                v-model="LIN"
              />
              <button class="btn btn-outline-warning me-md-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <br /><br />

      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>NIC</th>
            <th>Status</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style="width: 45px; height: 45px"
                  class="rounded-circle"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">{{ name }}</p>
                  <p class="text-muted mb-0">{{ LIN }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ nic }}</p>
              <p class="text-muted mb-0">{{ gender }}</p>
            </td>
            <td>
              <span
                v-if="valid"
                class="badge badge-success rounded-pill d-inline"
                >VALID LICENSE</span
              >
              <span
                v-if="!valid"
                class="badge badge-error rounded-pill d-inline"
                >INVALID LICENSE ⚠️</span
              >
            </td>
            <td>{{ address }}</td>
            <td>
              <p class="fw-normal mb-1">{{ contact }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <h3 class="fw-normal mb-5" style="color: rgb(248, 248, 248)">
        Fine Details
      </h3>

      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th>Date</th>
            <th>Fine ID</th>
            <th>Fine AMount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fine in fines" :key="fine._id">
            <td scope="row">{{ fine.fineDateTime }}</td>
            <td>{{ fine.fineID }}</td>
            <td>{{ "Rs: " + fine.fineAmount }}</td>
            <td>
              <span
                v-if="fine.PayStatus"
                class="badge badge-success rounded-pill d-inline"
              >
                Done ✔️
              </span>
              <span
                v-if="!fine.PayStatus"
                class="badge badge-error rounded-pill d-inline"
                >Pending</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="btn btn-info"
        id="status"
        @click="moveToAddfine()"
      >
        <i class="bi bi-plus-lg" id="check"></i>
        Add Fine
      </button>
    </div>
  </div>
</template>
