<template>
  <section>
    <header>
      <!-- Main Navbar -->
      <nav class="uk-container uk-navbar">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="/home">Bottle<strong>Shop</strong></a>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <div v-if="isAuthenticated">
            <ul class="uk-navbar-nav uk-visible@m">
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
                <nuxt-link class="uk-link-reset" to="users/user">
                  {{ loggedInUser.firstName }}
                </nuxt-link>
              </li>
              <button class="snipcart-checkout">
                <span class="snipcart-total-price"></span>
                <span class="snipcart-items-count"></span>
              </button>
              <li><a href="#" @click="logout">Logout</a></li>
            </ul>
          </div>

          <div v-else>
            <ul class="uk-navbar-nav uk-visible@m">
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
              <li><a href="/users/register">sign up</a></li>
              <li><a href="/users/signin">login</a></li>
            </ul>
          </div>

          <a
            href="#"
            class="uk-navbar-toggle uk-hidden@m"
            uk-navbar-toggle-icon
            uk-toggle="target: #sidenav"
          ></a>
        </div>
      </nav>
    </header>

    <div id="sidenav" uk-offcanvas="flip: true" class="uk-offcanvas">
      <div class="uk-offcanvas-bar">
        <ul v-if="isAuthenticated" class="uk-nav">
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
            <nuxt-link class="uk-link-reset" to="users/user">
              {{ loggedInUser.firstName }}
            </nuxt-link>
          </li>
          <button class="snipcart-checkout">
            <span class="snipcart-total-price"></span>
            <span class="snipcart-items-count"></span>
          </button>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>
        <ul v-else class="uk-nav">
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
          <li><a href="/users/register">sign up</a></li>
          <li><a href="/users/signin">login</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout({});
        this.$router.push("/users/signin");
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
<style scoped>
.uk-navbar {
  width: 100vw;
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
  border-bottom: 3px solid rgba(265, 182, 50);
}
@media screen and (max-width: 1024px) {
  .uk-navbar-right ul li {
    display: none;
  }
}
</style>
