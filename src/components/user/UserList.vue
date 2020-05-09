<template>
  <div>
    <section v-if="statusLoading">
      <Spinner />
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
    ...mapActions(["fetchUsers"])
  },
  computed: {
    ...mapGetters(["allUsers", "statusLoading"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style>
</style>