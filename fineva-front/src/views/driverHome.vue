<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      driverName: `${store.state.driverDetails.Fname} ${store.state.driverDetails.Lname}`,
      driverNIC: store.state.driverDetails.NIC,
      fines: [],
      valid: "",
    };
  },
  methods: {
    fineFetch() {
      axios
        .post("http://localhost:8000/Fine/getFine", {
          LIN: store.state.driverDetails.LIN,
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
    navToFineHistory() {
      this.$router.push("/fineHistory");
    },
  },
  beforeMount() {
    this.fineFetch();
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
    <br />
    <div class="content">
      <div class="text-box">
        <h1 style="font-family: 'Times New Roman', Times, serif">
          <span class="text-wt font-bold">FINEV</span
          ><span class="text-ylv font-bold">A</span>
        </h1>
        <h3>fine pay at your fingertips!</h3>
        <br />
      </div>
    </div>

    <div class="promo">
      <div class="card">
        <div class="container">
          <img
            v-if="valid"
            id="status"
            src="../assets/image/15.png"
            style="height: 150px; width: 150px; float: left; margin-left: 10%"
            alt="valid"
          />
          <img
            v-if="!valid"
            id="status"
            src="../assets/image/14.png"
            style="height: 150px; width: 150px; float: left; margin-left: 10%"
            alt="valid"
          />
          <h1 style="padding-left: 40%">
            <b>
              {{ driverName }}
            </b>
          </h1>
          <h3 style="padding-left: 40%">{{ driverNIC }}</h3>
          <p v-if="valid" style="padding-left: 40%">This is a valid license</p>
          <p v-if="!valid" style="padding-left: 40%">
            This is a Invalid license
          </p>
        </div>
      </div>
    </div>

    <p style="color: gray" id="pp">
      <br />Click here to see the previous fines !
    </p>
    <button type="submit" name="submit" id="B" @click="navToFineHistory()">
      Fine History
    </button>
  </div>
</template>
