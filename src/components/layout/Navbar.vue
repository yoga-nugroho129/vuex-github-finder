<template>
  <nav>
    <h2>
      <i class="fab fa-github"></i> Github Finder
    </h2>
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  background-color: #41b883;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-left: 25px;
}
</style>
