<template>
  <div>
    <section v-if="alertStatus">
      <Alert />
    </section>
    <form @submit="onSubmit">
      <input type="text" placeholder="Search Users..." class="search-box" v-model="text" />
      <input type="submit" value="Submit" class="search-btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Alert from "../layout/Alert";

export default {
  name: "Search",
  components: {
    Alert
  },
  data() {
    return {
      text: "",
      alertStatus: false
    };
  },
  methods: {
    ...mapActions(["searchUsers"]),
    onSubmit(e) {
      e.preventDefault();
      if (this.text == "") {
        this.alertStatus = true;
        setTimeout(() => {
          this.alertStatus = false;
        }, 2500);
      } else {
        this.searchUsers(this.text);
        this.text = "";
      }
    }
  }
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

input:focus {
  outline: none;
}

.search-box {
  padding: 10px;
  background-color: rgb(242, 253, 238);
}

.search-btn {
  background-color: #173149;
  color: white;
  cursor: pointer;
  border-color: #173149;
}

.search-btn:hover {
  background-color: #294866;
}
</style>
