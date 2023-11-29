<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  

};

</script>

<style lang="css">
@import '../../CSS/policeHome.css';
</style>

<template>

    
    
  <div className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50">

    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">

      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">FINEVA  DRIVER </span>
  
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
        <a href="#" class="no-underline  py-1 pl-3 pr-4  md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500">Profile</a>
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


<br>
        <div class="content">
        <div class="text-box">
        
            <h1 style="font-family: 'Times New Roman', Times, serif;">
              <span class="text-wt font-bold">FINEV</span><span class="text-ylv font-bold">A</span>
            </h1>
            <h3>fine pay at your fingertips!</h3>
            <br>
        </div> 

    </div>

    
      <div class="promo">
            <div class="card">
                <div class="container">
                  <img id="status" src="src\assets\image\green_tick.png" style="height: 150px; width: 150px; float: left; margin-left: 20%;" alt="valid">
                <h1 style="padding-left: 40%;"><b>
                    Dinithi Amarasinghe
                </b></h1> 
                    <h3 style="padding-left: 40%;">200080300974</h3> 
                    <p style="padding-left: 40%;">This is a valid license</p>
              
                </div>
            </div>
        </div>
        
        <p style="color: gray;" id="pp"><br>Click here to see the previous fines !</p>

        <router-link to="/fineHistory">
                  <button type="submit" name="submit" id="B">Fine History</button>
        </router-link>
       </div>
</template>