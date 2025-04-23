<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";



</script>

<template>
  <Header/>
 <router-view :key="$route.fullPath" />
 <Footer/>
</template>

<style scoped>



</style>
