<script>
import { watchIgnorable } from "@vueuse/core";
import axios from "axios";
import store from "../store";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      licenseNumber: "",
      password: "",
      password2: "",
      province: "",
      district: "",
      NICNumber: "",
      gender: "",
      address: "",

    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/User/DriverRegister", {
          Email: this.email,
          Fname: this.firstName,
          Lname: this.lastName,
          Password: this.password,
          password2: this.password2,
          LIN: this.licenseNumber,
          Province: this.province,
          District: this.district,
          Contact: this.contactNumber,
          NIC: this.NICNumber,
          Gender: this.gender,
          Address: this.address,
        })
        .then((response) => {
          this.$router.push("/signIn")
          console.log(response);
          toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
        });
        })
        .catch((error) => {
          console.log(error);
          const err = error.response.data.message;
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER,
        });
        });
    },
  },
};
</script>
<template>
  <div
    class="min-h-screen bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div class="mt-6 items-center">
      <div class="lg:absolute lg:left-[80px] lg:top-[155px] lg:w-[40rem]">
        <div
          class="text-center text-[85px] lg:text-[85px] xl:text-[80px]"
          style="font-family: 'Times New Roman', Times, serif"
        >
          <span class="text-wt">Sign Up</span><span class="text-ylv">!</span>
        </div>

        <div>
          <form
            @submit.prevent="submitForm"
            class="text-center justify-center items-center mx-auto mt-16 max-w-xl sm:mt-4 relative"
          >
            <div class>
              <div class="grid gap-4">
                <div class>
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >First Name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="dFname"
                      id="dFname"
                      autocomplete=""
                      required
                      v-model="firstName"
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class>
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Last name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="dLname"
                      id="dLname"
                      autocomplete=""
                      required
                      v-model="lastName"
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class>
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >NIC</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="dFname"
                      id="dFname"
                      autocomplete=""
                      required
                      v-model="NICNumber"
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class>
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >License Number</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="dLname"
                      id="dLname"
                      autocomplete=""
                      required
                      v-model="licenseNumber"
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="dPswd"
                      id="dPswd"
                      required
                      autocomplete=""
                      v-model="email"
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Address</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="dPswd"
                      id="dPswd"
                      required
                      autocomplete=""
                      v-model="address"
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class>
                  <label
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Gender</label
                  >
                  <div class="mt-2.5">
                    <select
                      name="dFname"
                      id="dFname"
                      autocomplete=""
                      v-model="gender"
                      required
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>                  
                  </select>
                  </div>
                </div>
                <div class>
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Contact Number</label
                  >
                  <div class="mt-2.5">
                    <input
                    type="tel"
                      name=""
                      id=""
                      autocomplete=""
                      v-model="contactNumber"
                      required
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >                    
                  </div>
                </div>
                <div class>
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Province</label
                  >
                  <div class="mt-2.5">
                    <select
                      name="dFname"
                      id="dFname"
                      autocomplete=""
                      v-model="province"
                      required
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                    <option value="Central">Central</option>
                    <option value="Eastern">Eastern</option>
                    <option value="North Central">North Central</option>
                    <option value="Northern">Northern</option>
                    <option value="North Western">North Western</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="Southern">Southern</option>
                    <option value="Uva">Uva</option>
                    <option value="Western">Western</option>                     
                  </select>
                  </div>
                </div>
                <div class>
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >District</label
                  >
                  <div class="mt-2.5">
                    <select
                      name="dLname"
                      id="dLname"
                      autocomplete=""
                      v-model="district"
                      required
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="Ampara">Ampara</option>
                      <option value="Anuradhapura">Anuradhapura</option>
                      <option value="Badulla">Badulla</option>
                      <option value="Batticaloa">Batticaloa</option>
                      <option value="Colombo">Colombo</option>
                      <option value="Galle">Galle</option>
                      <option value="Gampaha">Gampaha</option>
                      <option value="Hambantota">Hambantota</option>
                      <option value="Jaffna">Jaffna</option>
                      <option value="Kalutara">Kalutara</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Kegalle">Kegalle</option>
                      <option value="Kilinochchi">Kilinochchi</option>
                      <option value="Kurunegala">Kurunegala</option>
                      <option value="Mannar">Mannar</option>
                      <option value="Matale">Matale</option>
                      <option value="Matara">Matara</option>
                      <option value="Moneragala">Moneragala</option>
                      <option value="Mullaitivu">Mullaitivu</option>
                      <option value="Nuwara Eliya">Nuwara Eliya</option>
                      <option value="Polonnaruwa">Polonnaruwa</option>
                      <option value="Puttalam">Puttalam</option>
                      <option value="Rathnapura">Rathnapura</option>
                      <option value="Trincomalee">Trincomalee</option>
                      <option value="Vavuniya">Vavuniya</option>                     
                    </select>
                  </div>
                </div>
                <div class>
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Password</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="password"
                      name="dFname"
                      id="dFname"
                      autocomplete=""
                      required
                      v-model="password"
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class>
                  <label
                    for="text"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Confirm Password</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="password"
                      name="dLname"
                      id="dLname"
                      autocomplete=""
                      required
                      v-model="password2"
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <br />
            </div>
            <br />
            <div class="mt-0">
              <button
                type="submit"
                class="rounded-full bg-ylv px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <br /><br />
      <div class="lg:absolute lg:right-[150px] lg:top-[135px] lg:w-[30rem]">
        <div
          class="text-center text-[85px] lg:text-[85px] xl:text-[110px]"
          style="font-family: 'Times New Roman', Times, serif"
        >
          <span class="text-wt font-bold">FINEV</span
          ><span class="text-ylv font-bold">A</span>

          <div class="text-center text-[35px] lg:text-[35px] xl:text-[30px]">
            <span class="text-wt italic text-justify">D R I V E R</span>
          </div>
        </div>
        <span class="text-justify indent-">
          <br />
          <p text-justify>
            In the context of the <b>FINEVA</b> app, the driver role pertains to
            individuals who are responsible for transporting goods or providing
            transportation services. As a driver using the <b>FINEVA</b> app,
            you gain access to a range of features that streamline your workflow
            and improve your overall efficiency. This includes features such as
            real-time route optimization, delivery tracking, digital
            documentation management, and communication tools. With the
            <b>FINEVA</b> app, drivers can enhance their productivity, ensure
            timely deliveries, and provide a seamless transportation experience
            for their clients or customers.
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
<style></style>
