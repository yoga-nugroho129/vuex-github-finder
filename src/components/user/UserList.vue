<template>
  <div>
    <section v-if="statusLoading">
      <Spinner />
    </section>
    <section v-if="allUsers.length > 0">
      <button @click="clearResults">Clear Result</button>
    </section>
    <UserItem :allUsers="allUsers" :statusLoading="statusLoading" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import UserItem from "./UserItem";
import Spinner from "./Spinner";

export default {
  name: "UserList",
  components: {
    UserItem,
    Spinner
  },
  methods: {
    ...mapActions(["fetchUsers", "clearResults"])
  },
  computed: {
    ...mapGetters(["allUsers", "statusLoading"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  font-size: 14px;
  padding: 7px;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #294866;
}
</style>