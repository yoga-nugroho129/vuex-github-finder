<template>
  <div class="card">
    <section v-for="user in allUsers" :key="user.id">
      <img :src="user.avatar_url" alt="user-img" />
      <p>{{user.login}}</p>
      <router-link :to="`/user/${user.login}`">
        <button>More</button>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    allUsers: Array,
    statusLoading: Boolean
  }
};
</script>

<style scoped>
@media (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-self: baseline;
    text-align: center;
  }
}

@media (max-width: 699px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    align-self: baseline;
    text-align: center;
  }
}

section {
  height: 150px;
  border: 1px solid #41b883;
  border-radius: 3px;
  padding: 20px 10px;
}

img {
  width: 80px;
  border-radius: 50%;
  border: 1px solid #41b883;
}

p {
  margin: 5px 0;
}

button {
  padding: 10px 15px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

button:hover {
  background-color: #173149;
}
</style>