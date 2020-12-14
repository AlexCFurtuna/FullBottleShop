<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/home" exact
              >bottle shop</router-link
            >
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/about" exact
              >about</router-link
            >
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/beer" exact
              >beers</router-link
            >
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/contact" exact
              >contact</router-link
            >
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <!-- // If you are logged in -->
        <ul class="uk-navbar-nav" v-if="username">
          <li>
            <a href="#" class="uk-link-reset">{{ username }}</a>
          </li>
          <button class="snipcart-checkout">
            <span class="snipcart-total-price"></span>
            <span class="snipcart-items-count"></span>
          </button>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>

        <!-- // If you are not logged in -->
        <ul class="uk-navbar-nav" v-else>
          <li><a href="/users/register">Signup</a></li>
          <li><a href="/users/signin">Signin</a></li>
        </ul>
      </div>
    </nav>
  </client-only>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    },
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "auth/logout",
    }),
  },
};
</script>
<style scoped>
li {
  display: inline-block;
  font-size: 1.2rem;
  margin: 0;
}
a {
  padding: 0 50px !important;
}
</style>
