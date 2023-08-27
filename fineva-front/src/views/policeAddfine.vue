<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  
  // methods: {
  //   // pReg(){
  //   //   document.getElementById("pSignUp")
  //   //   var user_state = "Police";
  //   //   store.dispatch('setUserState',user_state);
  //   //   this.$router.push('./policeReg');
  //   // },
  //   // pSignIn(){
  //   //   document.getElementById("police").src="../../src/assets/image/p2.png"
  //   //   var user_state = "Police"
  //   //   store.dispatch('setUserState',user_state);
  //   //   this.$router.push('./signIn');
  //   // }, 
  // },
};

</script>

<!-- <style lang="css">
@import 'C:\Users\User\OneDrive\Documents\GitHub\FINEVA\FINEVA-FRONTEND\Fineva-Frontend\CSS\policeResult.css';
</style> -->

<template>

  <div className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50">

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">

      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">FINEVA  POLICE</span>
  
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only text-black">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="src\assets\image\propic.jpg" alt="user photo">
      </button>
        <!-- <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </div> -->
  </div>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="text-xl flex flex-col font-medium mt-4  bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:bg-white">
        <li>
        <a href="#" class="no-underline  py-1 pl-3 pr-4  text-sky-500" aria-current="page">Driver Search</a>
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
        <div class="card card-registration card-registration-2" style="">
                <div class="p-4">
                           
                        <form action="" method="POST" autocomplete="off">     
                        
                        <div class="row">

                        <div class="container">
           
                        <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37);">New Fine Details</h3>

                  <div class="mb-4 pb-1">
                    <div class="form-outline">
                    <label for="exampleDataList" class="form-label">Fine Description</label>
                        <input class="form-control" list="datalistOptions1" id="exampleDataList" placeholder="Type to search...">
                        <datalist id="datalistOptions1">
                        <option value="Fine 1"/>
                        <option value="Fine 2"/>
                        <option value="Fine 3"/>
                        <option value="Fine 4"/>
                        <option value="Fine 5"/>
                        <option value="Fine 6"/>
                        </datalist>
                    <small id="helpId" class="text-muted">Select the fine.</small>
                  </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline">
                    <label for="exampleDataList" class="form-label">Fine Amount</label>
                        <input class="form-control" list="datalistOptions2" id="exampleDataList" placeholder="Type to search...">
                        <datalist id="datalistOptions2">
                        <option value="Rs.500.00"/>
                        <option value="Rs.1000.00"/>
                        <option value="Rs.1500.00"/>
                        <option value="Rs.2000.00"/>
                        <option value="Rs.2500.00"/>
                        <option value="Rs.5000.00"/>
                        </datalist>
                    <small id="helpId" class="text-muted">Select the fine amount.</small>
                  </div>
                  </div>


                </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label for="">Fine Number</label>
                              <input type="text" name="fname" id="fname" class="form-control" placeholder="" aria-describedby="helpId">
                              <small id="helpId" class="text-muted"></small>
                            
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label for="">Fine Date</label>
                              <input type="text" name="lname" id="lname" class="form-control" placeholder="dd/mm/yyyy" aria-describedby="helpId">
                              <small id="helpId" class="text-muted"></small>
                           
                      </div>

                    </div>
                  </div>

               
                  <router-link to="/policeResult">
                  <button type="submit" name="submit" id="submit" class="btn btn-info"
                    data-mdb-ripple-color="dark">Continue</button>
                    </router-link>
                    </form>

              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
</template>
