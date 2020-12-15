<template>
  <header>
    <nav class="uk-navbar">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/home" exact
              >bottle shop</router-link
            >
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <!-- // If you are logged in -->
        <ul class="uk-navbar-nav uk-visible@s" v-if="username">
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
        <ul class="uk-navbar-nav uk-visible@s" v-else>
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
          <li><a href="/users/register">Signup</a></li>
          <li><a href="/users/signin">Signin</a></li>
        </ul>
        <a
          href="#"
          class="uk-navbar-toggle uk-hidden@s"
          uk-navbar-toggle-icon
          uk-toggle="target: #sidenav"
        ></a>
      </div>
    </nav>
    <div id="sidenav" uk-offcanvas="flip: true" class="uk-offcanvas">
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav">
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
    </div>
  </header>
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
.uk-navbar {
  width: 100vw !important;
}
li {
  display: inline-block;
  font-size: 1.2rem;
  margin: 0;
}
a {
  padding: 0 50px !important;
}
a,
button {
  transition: 0.1s !important;
}
a:hover,
button:hover {
  /* color: white !important; */
  border-bottom: 3px solid rgba(265, 182, 50);
  /* background: rgba(265, 182, 50) !important; */
}
</style>
