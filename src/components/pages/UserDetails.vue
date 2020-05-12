<template>
  <div class="main-content">
    <router-link to="/">
      <button class="back-btn">Back to Search</button>
    </router-link>
    <section v-if="statusLoading">
      <Spinner />
    </section>
    <section class="main-content" v-else>
      <div>
        <!-- USER DETAILS -->
        <div class="top-card">
          <div class="left-section">
            <div class="inner-div">
              <img :src="userDetails.avatar_url" alt="user-img" />
              <p class="real-name">{{userDetails.name}}</p>
              <p v-if="userDetails.location">
                <Strong>Location:</Strong>
                {{userDetails.location}}
              </p>
            </div>
          </div>
          <div class="right-section">
            <div class="inner-section">
              <p v-if="userDetails.bio">
                <Strong class="bio-title">Bio</Strong>
                <br />
                {{userDetails.bio}}
              </p>
              <a :href="userDetails.html_url" target="_blank">
                <button class="github-page-btn">Visit GitHub Page</button>
              </a>
              <div class="extra-details">
                <p>
                  <Strong>Username:</Strong>
                  {{userDetails.login}}
                </p>
                <p v-if="userDetails.company">
                  <Strong>Company:</Strong>
                  {{userDetails.company}}
                </p>
                <p v-if="userDetails.blog">
                  <Strong>Website:</Strong>
                  {{userDetails.blog}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-card">
          <div class="hireable" v-if="userDetails.hireable = true">
            <i class="fas fa-check-circle"></i>Hireable
          </div>
          <div class="not-hireable" v-if="userDetails.hireable = false">
            <i class="fas fa-times-circle"></i>Hireable
          </div>
          <div class="followers">Followers: {{userDetails.followers}}</div>
          <div class="following">Following: {{userDetails.following}}</div>
          <div class="public-repos">Public Repos: {{userDetails.public_repos}}</div>
          <div class="public-gists">Public Gists: {{userDetails.public_gists}}</div>
        </div>
        <!-- USER REPOS -->
        <div class="user-repos">
          <h3>Latest Repositories</h3>
          <section v-for="repo in userRepos" :key="repo.id" class="user-repo-item">
            <a :href="repo.html_url" target="_blank">{{repo.name}}</a>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Spinner from "../user/Spinner";

export default {
  name: "UserDetails",
  components: {
    Spinner
  },
  data: function() {
    return {
      username: this.$route.params.username
    };
  },
  methods: {
    ...mapActions(["getUserDetails", "getUserRepos"])
  },
  computed: {
    ...mapGetters(["userDetails", "userRepos", "statusLoading"])
  },
  mounted() {
    this.getUserDetails(this.username);
    this.getUserRepos(this.username);
  }
};
</script>

<style scoped>
.main-content {
  letter-spacing: 2.5px;
  line-height: 1.4;
  font: 16px;
}

button {
  padding: 10px 25px;
  background-color: rgb(237, 237, 237);
  border: 1px solid rgb(191, 191, 191);
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1.2px;
}

button a {
  text-decoration: none;
}

.back-btn:hover {
  background-color: rgb(226, 223, 223);
}

@media (min-width: 700px) {
  .top-card {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
  }
}

.top-card {
  border: 1px solid #41b883;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
}

@media (max-width: 700px) {
  .right-section {
    display: grid;
    justify-content: center;
    text-align: center;
  }
}
.left-section {
  display: grid;
  justify-content: center;
  text-align: center;
}

img {
  width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.real-name,
.bio-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.github-page-btn {
  background-color: black;
  color: white;
  margin: 15px 0;
}

.extra-details {
  line-height: 1.5;
}

.middle-card {
  display: flex;
  justify-content: center;
  border: 1px solid #41b883;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
}

.middle-card {
  display: flex;
  flex-wrap: wrap;
}

.middle-card div {
  padding: 5px 10px;
  margin: 2px 5px;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.hireable {
  background-color: rgb(52, 185, 11);
}

.not-hireable {
  background-color: rgb(255, 0, 0);
}

.followers {
  background-color: rgb(50, 83, 190);
}

.following {
  background-color: rgb(255, 174, 0);
}

.public-repos {
  background-color: rgb(138, 126, 126);
}

.public-gists {
  background-color: rgb(99, 34, 34);
}

.user-repos {
  margin-top: 20px;
}

.user-repo-item {
  border: 1px solid #41b883;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
}

.user-repo-item a {
  cursor: pointer;
  text-decoration: none;
}
</style>