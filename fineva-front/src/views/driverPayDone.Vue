<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  
};

</script>

<template>

  <div className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50">

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">

      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">FINEVA  DRIVER</span>
  
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only text-black">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="src\assets\image\propic.jpg" alt="user photo">
      </button>
  </div>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="text-xl flex flex-col font-medium mt-4  bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:bg-white">
        <li>
        <a href="#" class="no-underline  py-1 pl-3 pr-4  text-sky-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="no-underline  py-1 pl-3 pr-4  md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500">Settings</a>
      </li>
      <li>
        <a href="#" class="no-underline  py-1 pl-3 pr-4  md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500">Help</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                <div class="p-5">
                  <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37);">Fine Details</h3>
                           
            
                        <div class='alert alert-success alert-dismissible fade show' role='alert'>
                                <strong>Payment Successful!</strong> <br> 
                                <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                  <span aria-hidden='true'>&times;</span>
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

    <tr style="padding-left:2%;">
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
      <td  colspan="2">
        <router-link to="/driverHome">
                  <button type="submit" name="submit" id="submit" class="btn btn-success"
                    data-mdb-ripple-color="dark">Continue to Home</button>
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
