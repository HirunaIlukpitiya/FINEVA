<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  
};
</script>

<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div
            class="card card-registration card-registration-2"
            style="border-radius: 15px"
          >
            <div class="p-5">
              <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37)">
                Fine Details
              </h3>

              <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Payment Successful!</strong> <br />
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="row">
                <div class="container">
                  <table class="table align-middle mb-0 bg-white">
                    <tbody>
                      <tr>
                        <th scope="row">NIC</th>
                        <td>200080300974</td>
                      </tr>

                      <tr>
                        <th scope="row">Vehicle Number</th>
                        <td>WP CEA - 2334</td>
                      </tr>

                      <tr style="padding-left: 2%">
                        <th scope="row">Fine Date</th>
                        <td>10/09/2022</td>
                      </tr>

                      <tr>
                        <th scope="row">Fine Description</th>
                        <td></td>
                      </tr>

                      <tr>
                        <th scope="row">Fine Charge</th>
                        <td>Rs. 500.00</td>
                      </tr>

                      <tr>
                        <td colspan="2">
                          <router-link to="/driverHome">
                            <button
                              type="submit"
                              name="submit"
                              id="submit"
                              class="btn btn-success"
                              data-mdb-ripple-color="dark"
                            >
                              Continue to Home
                            </button>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
