<template>
  <nav>
    <h2><i class="fab fa-github"></i> Github Finder</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
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
  margin: 0 5px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #173149;
  padding: 7px;
}

a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 7px;
  border-radius: 3px;
}

.router-link-exact-active {
  background-color: white;
  padding: 7px;
  border-radius: 3px;
}
</style>
