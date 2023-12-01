<script>
import store from '../store';


export default{
    data(){
        return{
        userState : "",
        loggedIn : "",
        rend:""
    }   
    },
    methods:{
        userFetch(){
            this.userState = store.state.userState;
            this.loggedIn = store.state.loggedIn;
            if(this.userState == "POLICE" && this.loggedIn == "POLICE"){
              this.rend = true;
            }
        }
    },
    beforeMount(){
      this.userFetch();
    }, 
}

</script>

<template>
    <nav v-if="rend" class="bg-white border-gray-200 dark:bg-gray-900">
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
              src="src\assets\image\propic.jpg"
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
                <RouterLink to="/policeHome">
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 text-sky-500"
                aria-current="page"
                >Driver Search</a
              >
            </RouterLink>
            </li>
            <li>
                <RouterLink to="/policeProfile">
              <a
                href="#"
                class="no-underline py-1 pl-3 pr-4 md:hover:text-amber-400 md:p-0 dark:text-gray-900 md:dark:hover:text-sky-500"
                >Profile</a
              >
            </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>