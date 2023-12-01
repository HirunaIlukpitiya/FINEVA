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
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900"
          >FINEVA POLICE</span
        >

        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only text-black">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="src\assets\image\pnew.jpg"
              alt="user photo"
            />
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="text-xl flex flex-col font-medium mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white"
          >
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Profile</a
              >
            </li>
            <li>
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Help</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container rounded bg-white mt-5 mb-5" style="color: black">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="src\assets\image\pnew.jpg"
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
                <label class="labels">Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Firstname"
                  value="Dinithi"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label
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
                <label class="labels">Police Station</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value="Avissawella"
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
                <label class="labels">Police Service ID</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter license number"
                  value="*******"
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
