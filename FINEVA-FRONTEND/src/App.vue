<script setup>
import { RouterView } from "vue-router";
import store from "./store";
import DriverNavBar from "./components/DriverNavBar.vue";
import PoliceNavBar from "./components/PoliceNavBar.vue";
</script>

<template>
  <DriverNavBar />
  <PoliceNavBar/>
  <RouterView />
</template>

<style scoped></style>
