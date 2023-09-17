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
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/User/PoliceOfficerRegister", {
          Email: this.email,
          Fname: this.firstName,
          Lname: this.lastName,
          Password: this.password,
          password2: this.password2,
          RegiNumber: this.licenseNumber,
          Contact: this.contactNumber,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/signIn")
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
    className="hero min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
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
          <form @submit.prevent = "submitForm"
            class="text-center justify-center items-center mx-auto mt-16 max-w-xl sm:mt-4"
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
                      name="pFname"
                      id="pFname"
                      required
                      autocomplete=""
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
                      name="pLname"
                      id="pLname"
                      required
                      v-model="lastName"
                      autocomplete=""
                      class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="pSid"
                      id="pSid"
                      required
                      v-model="email"
                      autocomplete=""
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Service Id</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="pSid"
                      id="pSid"
                      required
                      v-model="licenseNumber"
                      autocomplete=""
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6 text-white-900"
                    >Contact Number</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="tel"
                      name="pSid"
                      id="pSid"
                      required
                      v-model="contactNumber"
                      autocomplete=""
                      class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
                      name="pFname"
                      id="pFname"
                      required
                      autocomplete=""
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
                      name="pLname"
                      id="pLname"
                      required
                      v-model="password2"
                      autocomplete=""
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
                a
                href="/policeSignIn"
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
            <span class="text-wt italic text-justify">P O L I C E</span>
          </div>
        </div>
        <span class="text-justify indent-">
          <br />
          <p text-justify>
            The <b>FINEVA</b> app's admin role for the police is designed to
            provide law enforcement agencies with a comprehensive tool to
            monitor and investigate financial activities related to potential
            criminal cases. With advanced features and access privileges, the
            admin role empowers police authorities to track suspicious
            transactions, analyze financial data, and gather crucial evidence
            for investigations. By leveraging the <b>FINEVA</b> app's
            capabilities, the police can enhance their efforts in combating
            financial crimes and ensuring public safety.
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
<style></style>
