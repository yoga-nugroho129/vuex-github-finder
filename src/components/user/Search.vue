<template>
  <form>
    <input type="text" placeholder="Search Users..." class="search-box" />
    <input type="submit" value="Submit" class="search-btn" />
  </form>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 85% 15%;
}

input {
  border: 1px solid #41b883;
  font-size: 14px;
}

.search-box {
  padding: 10px;
  background-color: rgb(242, 253, 238);
}

.search-btn {
  background-color: #173149;
  color: white;
  cursor: pointer;
  border-collapse: #173149;
}

.search-btn:hover {
  background-color: #173149;
}
</style>