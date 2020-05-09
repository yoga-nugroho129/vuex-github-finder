<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <Search />
      <UserList />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import Search from "./components/user/Search";
import UserList from "./components/user/UserList";

export default {
  name: "App",
  components: {
    Navbar,
    Search,
    UserList
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
