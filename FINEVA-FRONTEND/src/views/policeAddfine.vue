<script>
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      driver: "",
      fineName: "",
      fineAmount: "",
      vehicleNumber: "",
      place: "",
      dateTime: "",
      fineList: [],
      natureOfOffence: "",
      fineNameNumber: "",
      sum: "",
      LIN: "",
      DriverFirstName: "",
      DriverLastName: "",
      DriverEmail: "",
      DriverContatct: "",
      DriverAddress: "",
      PoliceOfficerName: "",
      PoliceOfficerRank: "",
      PoliceStation: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/Fine/addFine", {
          fineList: this.fineList,
          fineDateTime: this.dateTime,
          natureOfOffence: this.natureOfOffence,
          fineAmount: this.sum,
          vehicleNumber: this.vehicleNumber,
          payState: false,
          LIN: store.state.driverDetails.LIN,
          place: this.place,
          DriverFirstName: store.state.driverDetails.Fname,
          DriverLastName: store.state.driverDetails.Lname,
          DriverEmail: store.state.driverDetails.Email,
          DriverContact: store.state.driverDetails.Contact,
          DriverAddress: store.state.driverDetails.Address,
          PoliceOfficerName: `${store.state.officerDetails.Fname} ${store.state.officerDetails.Lname}`,
          PoliceOfficerRank: store.state.officerDetails.Rank,
          PoliceStation: store.state.officerDetails.Station,
        })
        .then((response) => {
          console.log(store.state.driverDetails.LIN);
          console.log(response);
          const succ = response.data.message;
          toast.success(succ, {
            position: toast.POSITION.TOP_CENTER,
          });
          (this.fineNameNumber = ""),
            (this.vehicleNumber = ""),
            (this.place = ""),
            (this.natureOfOffence = ""),
            (this.dateTime = ""),
            (this.sum = "");

          this.$router.push("/policeHome");
        })
        .catch((error) => {
          console.log(error);
          const err = error.response.data.message;
          toast.error(err, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },

    Amount() {
      console.log(this.fineNameNumber);
      switch (this.fineNameNumber) {
        case "1":
          this.fineName = "Identification Plates";
        case "2":
          this.fineName = "Not carrying R.L.";
        case "3":
          this.fineName = "Contravening R.L. provisions";
        case "4":
          this.fineName =
            "Driving Emegency Service Vehicles & Public Service Vehicles without D.L.";
        case "5":
          this.fineName = "Driving Special Purpose Vehicles without a license";
        case "6":
          this.fineName =
            "Driving a vehicle loaded with chemicals or hazardous waste without a license";
        case "7":
          this.fineName =
            "Not having a License to drive a specific class of vehicles";
        case "8":
          this.fineName = "Not carrying D.L.";
        case "12":
          this.fineName = "Activities obstructing control of the motor vehicle";
        case "13":
          this.fineName = "Signals by Driver";
        case "14":
          this.fineName = "Reversing for a long Distance";
        case "15":
          this.fineName = "ound or Light warnings";
        case "16":
          this.fineName = "Excessive emission of smoke, etc.";
        case "18":
          this.fineName = "No. of persons in front seats";
        case "19":
          this.fineName = "Non-use of seat belts";
        case "20":
          this.fineName = "Not wearing protective helmets";
        case "21":
          this.fineName = "Distribution of advertisements";
        case "22":
          this.fineName = "Excessive use of Noise";
        case "23":
          this.fineName =
            "Disobeying Directions & Signals Police Officers or Traffic Wardens";
        case "24":
          this.fineName = "Non-Compliance with Traffic Signals";
        case "25":
          this.fineName =
            "Failure to take precautions when discharging fuel into tank";
        case "26":
          this.fineName = "Halting or Parking";
        case "32":
          this.fineName = "Violations of Regulations on motor vehicles";
          this.fineAmount = 1000.0;
          break;
        case "9":
          this.fineName = "Not having an instructor's license";
        case "11":
          this.fineName = "Disobeying Road Rules";
        case "27":
          this.fineName = "Non-use of precautions when parking";
          this.fineAmount = 2000.0;
          break;
        case "10":
          this.fineName = "Converting Speed Limits";
          this.fineAmount = 3000.0;
          break;
        case "17":
          this.fineName = "Riding on running boards";
        case "28":
          this.fineName =
            "Excessive carriage of persons in motor car or private coach";
        case "29":
          this.fineName = "Carriage of passengers in excess in omnibuses";
        case "30":
          this.fineName =
            "Carriage on lorry or Motor Tricycle van of Goods in excess";
        case "31":
          this.fineName = "No. of persons carried in a lorry";
        case "33":
          this.fineName =
            "Failure to carry the Emission certificate or the Fitness Certificate";
          this.fineAmount = 500.0;
          break;
      }
      console.log(this.fineAmount);
    },

    addFineList() {
      const finePayload = {
        name: this.fineName,
        amount: this.fineAmount,
      };

      this.fineList.push(finePayload);
      console.log(this.fineList);

      this.sum = this.calculateSum(this.fineList, "amount");
    },

    calculateSum(array, property) {
      const total = array.reduce((accumulator, object) => {
        return accumulator + object[property];
      }, 0);

      return total;
    },
  },
};
</script>

<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="">
            <div class="p-4">
              <form @submit.prevent="submitForm">
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
                          v-model="fineNameNumber"
                          required
                          @click="Amount()"
                          class=" form-control block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          <option value="6">
                            Driving a vehicle loaded with chemicals or hazardous
                            waste without a license
                          </option>
                          <option value="7">
                            Not having a License to drive a specific class of
                            vehicles
                          </option>
                          <option value="8">Not carrying D.L.</option>
                          <option value="9">
                            Not having an instructor's license
                          </option>
                          <option value="10">Converting Speed Limits</option>
                          <option value="11">Disobeying Road Rules</option>
                          <option value="12">
                            Activities obstructing control of the motor vehicle
                          </option>
                          <option value="13">Signals by Driver</option>
                          <option value="14">
                            Reversing for a long Distance
                          </option>
                          <option value="15">Sound or Light warnings</option>
                          <option value="16">
                            Excessive emission of smoke, etc.
                          </option>
                          <option value="17">Riding on running boards</option>
                          <option value="18">
                            No. of persons in front seats
                          </option>
                          <option value="19">Non-use of seat belts</option>
                          <option value="20">
                            Not wearing protective helmets
                          </option>
                          <option value="21">
                            Distribution of advertisements
                          </option>
                          <option value="22">Excessive use of Noise</option>
                          <option value="23">
                            Disobeying Directions & Signals Police Officers or
                            Traffic Wardens
                          </option>
                          <option value="24">
                            Non-Compliance with Traffic Signals
                          </option>
                          <option value="25">
                            Failure to take precautions when discharging fuel
                            into tank
                          </option>
                          <option value="26">Halting or Parking</option>
                          <option value="27">
                            Non-use of precautions when parking
                          </option>
                          <option value="28">
                            Excessive carriage of persons in motor car or
                            private coach
                          </option>
                          <option value="29">
                            Carriage of passengers in excess in omnibuses
                          </option>
                          <option value="30">
                            Carriage on lorry or Motor Tricycle van of Goods in
                            excess
                          </option>
                          <option value="31">
                            No. of persons carried in a lorry
                          </option>
                          <option value="32">
                            Violations of Regulations on motor vehicles
                          </option>
                          <option value="33">
                            Failure to carry the Emission certificate or the
                            Fitness Certificate
                          </option>
                        </select>
                        <button
                          type="button"
                          name="addfine"
                          id="addfine"
                          class="btn btn-info"
                          @click="addFineList()"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <label for="">Total Amount</label>
                    <input
                      type="text"
                      name="fname"
                      id="fine"
                      disabled
                      class="form-control"
                      placeholder="0.00"
                      v-model="sum"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  class="btn btn-info"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
