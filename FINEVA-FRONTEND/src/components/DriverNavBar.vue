<script>
import { RouterLink } from 'vue-router';
import store from '../store';

export default {
    data() {
        return {
            userState: "",
            loggedIn: "",
            rend: ""
        };
    },
    methods: {
        userFetch() {
            this.userState = store.state.userState;
            this.loggedIn = store.state.loggedIn;
            if (this.userState == "DRIVER" && this.loggedIn == "DRIVER") {
                this.rend = true;
            }
        }
    },
    mounted() {
        this.userFetch();
    },
    components: { RouterLink }
};
</script>

<template>
       <nav v-if="rend" class=" bg-slate-800 border-slate-800 ">
      <div
        class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto"
      >
        <span
          class="text-wt self-center text-2xl font-semibold whitespace-nowrap "
          ><span>FINEV</span><span class="text-ylv">A</span> DRIVER
        </span>

        <div class="flex items-center md:order-2">
            <span class="sr-only text-wt">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="src\assets\image\propic.jpg"
              alt="user photo"
            />
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="text-xl flex flex-col font-medium mt-4 bg-slate-800 md:flex-row md:space-x-8 md:mt-0"
          >
            <li>
              <RouterLink to="/driverHome">
                <a
                  href="#"
                  class="no-underline py-1 pl-3 pr-4 hover:text-ylv md:p-0  text-wt"
                  aria-current="page"
                  >Home</a
                >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/driverProfile">
                <a
                  href="#"
                  class="no-underline py-1 pl-3 pr-4 md:hover:text-ylv md:p-0 text-wt"
                  >Profile</a
                >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/help">
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-ylv md:p-0 text-wt"
                >Help</a
              >
            </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>