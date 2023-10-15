<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import bottomFooter from "./components/bottomFooter.vue";
</script>

<template>
  <navbar />
  <RouterView />
  <bottomFooter />
</template>

<style scoped></style>
