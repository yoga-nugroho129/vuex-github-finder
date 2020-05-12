<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <keep-alive :exclude="['UserDetails']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  margin: 5vh 10vw;
  letter-spacing: 1.15px;
}

* {
  margin: 0;
  padding: 0;
}
</style>
