<script>
import store from "../store";
export default {
  data() {
    return {
      userState: "",
      idLabel: "",
      email: "",
      password: "",
      keyword: "",
    };
  },
  methods: {
    getIDtype(userState) {
      if (userState == "POLICE") {
        this.idLabel = "Service Id";
        this.keyword = "P   O   L   I   C   E";
        console.log(this.idLabel);
      } else if (userState == "DRIVER") {
        this.idLabel = "License Number";
        this.keyword = "D   R   I   V   E   R";
        console.log(this.idLabel);
      }
    },
    navReg() {
      if (this.userState == "POLICE") {
        this.$router.push("/policeReg");
      } else if (this.userState == "DRIVER") {
        this.$router.push("/driverReg");
      }
    },
    navHome() {
      if (this.userState == "POLICE") {
        this.$router.push("/policeHome");
      } else if (this.userState == "DRIVER") {
        this.$router.push("/driverHome");
      }
    },
  },
  mounted() {
    this.userState = store.state.userState;
    console.log("this: ", this.userState);
    console.log("store : ", store.state.userState);
    this.getIDtype(this.userState);
  },
};
</script>
<template>
  <div
    className="hero min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <!-- <div className="hero-overlay bg-opacity-70"></div> -->
    <div class="mt-6 items-center">
      <div class="lg:absolute lg:left-[80px] lg:top-[155px] lg:w-[40rem]">
        <div
          class="text-center text-[85px] lg:text-[85px] xl:text-[80px]"
          style="font-family: 'Times New Roman', Times, serif"
        >
          <span class="text-wt">WELCOME</span><span class="text-ylv">!</span>
        </div>

        <div>
          <form
            action="#"
            method="POST"
            class="text-center flex flex-col justify-center items-center mx-auto mt-16 max-w-xl sm:mt-4"
          >
            <div class>
              <div class>
                <label
                  for="company"
                  class="block text-sm font-semibold leading-6 text-white-900"
                  >{{ idLabel }}</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="lnum"
                    id="lnum"
                    autocomplete=""
                    class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br />
              <div class="sm:col-span-2">
                <label
                  for="text"
                  class="block text-sm font-semibold leading-6 text-white-900"
                  >Password</label
                >
                <div class="mt-2.5">
                  <input
                    type="password"
                    name="dPswd"
                    id="dPswd"
                    autocomplete=""
                    class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <br />
              <div class="flex gap-x-4 sm:col-span-2">
                <div class="text-sm leading-6 text-white-600">
                  Haven't Registered yet? Click Here to
                  <span class="font-semibold text-indigo-600" @click="navReg()"
                    >Sign&nbsp;Up</span
                  >.
                </div>
              </div>
            </div>
            <br />
            <div class="mt-0">
              <button
                type="submit"
                class="rounded-full bg-ylv px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="navHome()">
                Sign In
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
            <span class="text-wt text-justify">{{ keyword }}</span>
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
