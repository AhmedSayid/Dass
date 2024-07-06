<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    Footer, Navbar
  }
}
</script>
