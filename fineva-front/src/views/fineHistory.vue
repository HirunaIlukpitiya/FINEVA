<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "../store";
import axios from "axios";
export default {
  data() {
    return {
      valid: "",
      fines: [],
      LIN: store.state.driverDetails.LIN,
      firstName: store.state.driverDetails.Fname,
      lastName: store.state.driverDetails.Lname,
      NIC: store.state.driverDetails.NIC,
      gender: store.state.driverDetails.Gender,
      address: store.state.driverDetails.Address,
      contact: store.state.driverDetails.Contact,
      email: store.state.driverDetails.Email,
    };
  },
  methods: {
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

    fetchData() {
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
    payment(orderID, Amount, fName, lName, daddress, demail, dcontact,fineList) {
      const fine = {
        orderID : orderID,
        Amount : Amount,
        firstName: fName,
        lastName: lName,
        address: daddress,
        email: demail,
        contact: dcontact,
        fineList: fineList,
      };

      store.dispatch("setFine",fine);

      axios
        .post("http://localhost:8000/Fine/createHash", {
          orderID: orderID,
          fineAmount: Amount,
        })
        .then((response) => {
          console.log(response);
          const value = response.data.hashValue;
          console.log(value);
          localStorage.setItem("value", value);
          store.dispatch("setHash");
          this.$router.push("/finePay");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>

<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <br />
    <div class="container">
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
                  src="src\assets\image\propic.jpg"
                  alt=""
                  style="width: 45px; height: 45px"
                  class="rounded-circle"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">{{ `${firstName} ${lastName}` }}</p>
                  <p class="text-muted mb-0">{{ LIN }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ NIC }}</p>
              <p class="text-muted mb-0">{{ gender }}</p>
            </td>
            <td>
              <span
                v-if="valid"
                class="badge badge-success rounded-pill d-inline"
                >✅ VALID LICENSE</span
              >
              <span
                v-if="!valid"
                class="badge badge-error rounded-pill d-inline"
                >🔴 INVALID LICENSE</span
              >
            </td>
            <td>{{ address }}</td>
            <td>
              <p class="fw-normal mb-1">{{ contact }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br>

      <h3 class="fw-normal mb-5" style="color: rgb(244, 243, 247)">Fine Details</h3>

      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th>Date</th>
            <th>Fine ID</th>
            <th>Fine AMount</th>
            <th>Payment Status</th>
            <th>Pay Now</th>
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
                >Done ✔️</span
              >
              <span
                v-if="!fine.PayStatus"
                class="badge badge-error rounded-pill d-inline"
                >Pending</span
              >
            </td>
            <td>
              <button
                @click="
                  payment(
                    fine.fineID,
                    fine.fineAmount,
                    fine.DriverFirstName,
                    fine.DriverLastName,
                    fine.DriverAddress,
                    fine.DriverEmail,
                    fine.DriverContact,
                    fine.fineList,
                  )
                "
              >
                <span
                  v-if="!fine.PayStatus"
                  class="badge badge-info rounded-pill d-inline"
                  >Pay Now 💸</span
                >
              </button>
              <span
                  v-if="fine.PayStatus"
                  class="badge badge-success rounded-pill d-inline"
                  >Done 💸</span
                >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
