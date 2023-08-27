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

<style lang="css">
@import 'C:\Users\User\OneDrive\Documents\GitHub\FINEVA\FINEVA-FRONTEND\Fineva-Frontend\CSS\policeHome.css';
</style>

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


<br><br><br><br>
        <div class="content">
        <div class="text-box">
        
            <h1 style="font-family: 'Times New Roman', Times, serif;">
              <span class="text-wt font-bold">FINEV</span><span class="text-ylv font-bold">A</span>
            </h1>
            <h3>fine pay at your fingertips!</h3>
            <br>
            <h4></h4>
        </div> 

    </div>

    <div class="container">

    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-7">
            <div class="search">
                <div class="card-header" id="card-header">
                    <h4 id="dr">Driver Check<i class="fa fa-check-circle" aria-hidden="true"></i></h4>
                    <label for="" id="dr">Driver's License Number</label>
                </div>
                <form action="" class="d-flex">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control" placeholder="Enter the License Number of the Driver.">
                    <router-link to="/policeResult">
                    <button class="btn btn-outline-warning me-md-2">Search</button>
                    </router-link>
                </form>
            </div>
        </div>
    </div>
    </div>
       </div>
</template>
