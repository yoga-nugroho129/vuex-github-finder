<template>
  <div>
    <Search />
    <UserList />
  </div>
</template>

<script>
import Search from '../user/Search'
import UserList from '../user/UserList'

export default {
  name: 'Home',
  components: {
    Search,
    UserList,
  },
}
</script>

<style></style>
