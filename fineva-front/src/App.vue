<script setup>
import {RouterView } from 'vue-router'
import policeHome from './views/policeHome.vue'
import driverHome from './views/driverHome.vue'
</script>

<template>
  <RouterView />
  <policeHome/>
  <driverHome/>
</template>

<style>
</style>