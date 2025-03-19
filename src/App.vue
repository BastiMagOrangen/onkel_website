<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="html">
    <Navbar/>

    <RouterView class="top"/>

    <Footer/>
  </div>
</template>

<style scoped>
.html{
  min-height: 100vh;
  background: url("assets/leistungen.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
.top{
  margin-top: 200px;
}
</style>
