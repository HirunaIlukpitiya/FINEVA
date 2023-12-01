<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
import axios from "axios";
export default {
  data(){
    return{
      email:"",
      firstName:"",
      lastName:"",
      contact:"",
      nic:"",
      lin:"",
      address:"",
      province:"",
      district:"",
      gender:""
    }
  },
  methods:{
    updateProfile(){
      axios.post("",{

      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
};
</script>

<template>
  <div
    className=" bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
  <br>
    <div class="container rounded bg-white mt-5 mb-5" style="color: black">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="src\assets\image\propic.jpg"
            /><span class="font-weight-bold">Dinithi Amarasinghe</span
            ><span class="text-black-50">200080300974</span><span> </span>
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
                  value="Dinithi"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Last Name</label
                ><input
                  type="text"
                  class="form-control"
                  value="Amarasinghe"
                  placeholder="Surname"
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
                  value="0705326101"
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Address Line 1</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value="No 117/2A"
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Address Line 2</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value="Thummodara Road,Sirisanda, Puwakpitiya"
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">Postcode</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter Post Code"
                  value="10700"
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
                  value="Colombo"
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
                  value="Western"
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
                  value="B5176516"
                />
              </div>
              <br /><br />
              <br />
              <div class="col-md-12">
                <label class="labels">E Mail</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="email"
                  value="dinithikaushalya12173@gmail.com"
                />
              </div>
              <br /><br />
              <br />
            </div>

            <div class="mt-5 text-center">
              <button class="btn btn-success profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
