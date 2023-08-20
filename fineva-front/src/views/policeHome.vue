<script>
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {};
</script>
<template>
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')]"
  >
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="https://flowbite.com/" class="flex items-center">
          <span
            class="text-wt font-bold text-left text-[45px] lg:text-[65px] xl:text-[40px]"
            style="font-family: 'Times New Roman', Times, serif"
            >FINEV</span
          ><span
            class="text-ylv font-bold text-left text-[45px] lg:text-[65px] xl:text-[40px]"
            style="font-family: 'Times New Roman', Times, serif"
            >A&nbsp;</span
          >
          <span
            class="text-wt text-left text-[45px] lg:text-[35px] xl:text-[40px]"
            style="font-family: 'Times New Roman', Times, serif"
            >&nbsp;&nbsp; P O L I C E</span
          >
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="../../src/assets/image/propic.jpg"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Bonnie Green</span
              >
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >name@flowbite.com</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-ylv bg-blue-700 rounded md:bg-transparent md:text-yellow-300 md:p-0 md:dark:text-yellow-300"
                aria-current="page"
                >Driver Search</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-yellow-300 md:dark:hover:bg-transparent dark:border-gray-700"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-yellow-300 md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <div className="hero-overlay bg-opacity-70"></div> -->
    <div class="py-40 w-2/3 px-40">
      <form class>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search License Number..."
            required
          />
          <button
            type="submit"
            class="text-black absolute right-2.5 bottom-2.5 bg-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
