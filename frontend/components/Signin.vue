<template>
  <div class="">
    <Navbar />
    <Notification v-if="error" type="danger" :message="error" />
    <div class="uk-child-width-1-2@m uk-grid main">
      <div class="hidden">
        <div class="left"></div>
      </div>
      <div class="right">
        <div class="uk-card uk-card-default uk-card-large uk-card-body contact">
          <h1>Welcome to BottleShop!</h1>
          <form method="post" @submit.prevent="login" model="valid">
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">Sign in</legend>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text"
                  >Email</label
                >
                <input
                  class="uk-input"
                  v-model="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text"
                  >Password</label
                >
                <input class="uk-input" v-model="password" type="password" />
              </div>

              <div class="uk-margin">
                <button
                  class="uk-button uk-button-primary uk-width-1-1 buttons"
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div class="uk-margin">
                <p>
                  No account yet?
                  <router-link :to="{ name: 'users-register' }">
                    Register
                  </router-link>
                </p>
                <p>
                  <nuxt-link :to="{ name: 'users-forgot-password' }"
                    >Forgot Password?</nuxt-link
                  >
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import strapi from "~/utils/Strapi";

export default {
  middleware: "guest",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        this.$router.push("/home");
      } catch (e) {
        // this.error = e.response.data.message[0].messages[0].message;
        throw new Error(`Error : ${e}`);
      }
    },
  },
};
</script>
<style scoped>
.left {
  background: url("~assets/contact.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
}
@media screen and (max-width: 1024px) {
  .hidden {
    display: none;
  }
  .main {
    background: url("~assets/contact-mid.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
  }
  .contact {
    padding-top: 150px;
  }
  input,
  .right div {
    background: transparent;
  }
  .right div h1,
  a,
  form,
  label,
  input::placeholder {
    color: white;
    font-weight: 500;
  }
  input {
    border-radius: 5px;
    border-color: white;
  }
  label {
    font-size: 1.2rem;
    color: white;
  }
}
</style>