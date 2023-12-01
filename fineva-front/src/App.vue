<script setup>
import { RouterView } from "vue-router";
import store from "./store";
import DriverNavBar from "./Components/DriverNavBar.vue";
import PoliceNavBar from "./Components/PoliceNavBar.vue";
</script>

<template>
  <DriverNavBar />
  <PoliceNavBar/>
  <RouterView />
</template>

<style scoped></style>
