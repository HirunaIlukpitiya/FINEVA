<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      fineAmount: "",
      vehicleNumber: "",
      place: "",
      dateTime: "",
      fineName: "",
      natureOfOffence: "",
    };
  },
  methods: {
    submitForm() {
      axios.post("", {
         
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
        const err = error.response.data.message;
        toast.error(err,{
          position: toast.POSITION.TOP_CENTER,
        });
      });
    },
    Amount() {
      console.log(this.fineName);
      switch (this.fineName) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "18":
        case "19":
        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
        case "25":
        case "26":
        case "32":
          this.fineAmount = 1000.0;
          break;
        case "9":
        case "11":
        case "27":
          this.fineAmount = 2000.0;
          break;
        case "10":
          this.fineAmount = 3000.0;
          break;
        case "17":
        case "28":
        case "29":
        case "30":
        case "31":
        case "33":
          this.fineAmount = 500.0;
          break;
      }
      console.log(this.fineAmount);
    },
  },
};
</script>

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

    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="">
            <div class="p-4">
              <form action="">
                <div class="row">
                  <div class="form-outline">
                    <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37)">
                      New Fine Details
                    </h3>
                    <label for="">Vehicle Number</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      class="form-control"
                      placeholder="-"
                      v-model="vehicleNumber"
                    />
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label for="">Place</label>
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        class="form-control"
                        placeholder="-"
                        aria-describedby="helpId"
                        v-model="place"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label for="">Date & Time</label>
                      <input
                        type="datetime-local"
                        name="lname"
                        id="lname"
                        class="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                        v-model="dateTime"
                      />
                    </div>
                  </div>
                  <div class="form-outline">
                    <label for="">Nature of the offence</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      class="form-control"
                      placeholder="-"
                      v-model="natureOfOffence"
                    />
                  </div>

                  <div class="container">
                    <div class="mb-4 pb-1">
                      <div class="form-outline">
                        <label for="exampleDataList" class="form-label"
                          >Fine Name</label
                        >
                        <select
                          name="dFname"
                          id="dFname"
                          autocomplete=""
                          v-model="fineName"
                          required
                          @click = "Amount()"
                          class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="1">Identification Plates</option>
                          <option value="2">Not carrying R.L.</option>
                          <option value="3">
                            Contravening R.L. provisions
                          </option>
                          <option value="4">
                            Driving Emegency Service Vehicles & Public Service
                            Vehicles without D.L.
                          </option>
                          <option value="5">
                            Driving Special Purpose Vehicles without a license
                          </option>
                          <option value="6"></option>
                          <option value="7"></option>
                          <option value="8"></option>
                          <option value="9"></option>
                          <option value="10"></option>
                          <option value="11"></option>
                          <option value="12"></option>
                          <option value="13"></option>
                          <option value="14"></option>
                          <option value="15"></option>
                          <option value="16"></option>
                          <option value="17"></option>
                          <option value="18"></option>
                          <option value="19"></option>
                          <option value="20"></option>
                          <option value="21"></option>
                          <option value="22"></option>
                          <option value="23"></option>
                          <option value="24"></option>
                          <option value="25"></option>
                          <option value="26"></option>
                          <option value="27"></option>
                          <option value="28"></option>
                          <option value="29"></option>
                          <option value="30"></option>
                          <option value="31"></option>
                          <option value="32"></option>
                          <option value="33"></option>
                        </select>
                      </div>
                    </div>
                    <label for="">Fine Amount</label>
                    <input
                      type="text"
                      name="fname"
                      id="fine"
                      disabled
                      class="form-control"
                      placeholder="0.00"
                      v-model="fineAmount"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  class="btn btn-info"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
