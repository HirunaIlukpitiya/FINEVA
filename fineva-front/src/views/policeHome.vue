<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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
      valid: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/Police/driverSearch", {
          LIN: this.LIN,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.rend = true;
          }
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
    },

    moveToAddfine(){
      this.$router.push("/policeAddfine");
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
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900"
          >FINEVA POLICE</span
        >

        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only text-black">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="src\assets\image\propic.jpg"
              alt="user photo"
            />
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="text-xl flex flex-col font-medium mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white"
          >
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 text-sky-500"
                aria-current="page"
                >Driver Search</a
              >
            </li>
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Help</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
              <span class="badge badge-success rounded-pill d-inline"
                >VALID LICENSE</span
              >
            </td>
            <td>{{ address }}</td>
            <td>
              <p class="fw-normal mb-1">{{ contact }}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37)">Fine Details</h3>

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
          <div v-for="fine in fines" :key="fine.id">
            <tr>
              <td scope="row">{{ date }}</td>
              <td>{{ id }}</td>
              <td>Rs: {{ amount }}</td>
              <td>
                <button type="button" class="btn btn-success" id="status">
                  <i class="bi bi-check-lg bi-success" id="check"></i>
                  Done
                </button>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
        <button type="button" class="btn btn-danger" id="status" @click="moveToAddfine()">
          <i class="bi bi-plus-lg" id="check"></i>
          Add Fine
        </button>
    </div>
  </div>
</template>
