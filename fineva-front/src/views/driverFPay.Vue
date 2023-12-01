<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {};
</script>

<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-6">
          <div class="card card-registration card-registration-2" style="">
            <div class="p-4">
              <form action="" method="POST" autocomplete="off">
                <div class="row">
                  <div class="container">
                    <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37)">
                      Fine Pay
                    </h3>

                    <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <label for="">Fine Amount</label>
                        <input
                          type="text"
                          name="nic"
                          id="nic"
                          class="form-control"
                          placeholder="(Autofill).00"
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted"
                          >This is your due amount to pay.</small
                        >
                      </div>
                    </div>

                    <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <label for="">Card Number</label>
                        <input
                          type="text"
                          name="nic"
                          id="nic"
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted"
                          >Enter your card number.</small
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label for="">Secuirity Code</label>
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        class="form-control"
                        placeholder="CVV"
                        aria-describedby="helpId"
                      />
                      <small id="helpId" class="text-muted"></small>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label for="">Expiry Date</label>
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        class="form-control"
                        placeholder="**/**"
                        aria-describedby="helpId"
                      />
                      <small id="helpId" class="text-muted"
                        >Enter expiry of the card.</small
                      >
                    </div>
                  </div>
                </div>

                <router-link to="/driverPayDone">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    class="btn btn-success"
                    data-mdb-ripple-color="dark"
                  >
                    Continue to Payment
                  </button>
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
