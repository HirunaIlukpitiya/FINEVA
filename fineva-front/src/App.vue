<script setup>
import { RouterView } from "vue-router";
import store from "./store";
import DriverNavBar from "./Components/DriverNavBar.vue";
</script>

<template>
  <DriverNavBar />
  <RouterView />
</template>

<style scoped></style>
