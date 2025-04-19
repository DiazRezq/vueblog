<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeVue from "./views/Homeview.vue";
</script>

<template>
  <RouterView />
</template>

<style scoped>
#app {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
