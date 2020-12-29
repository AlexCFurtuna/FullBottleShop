<template>
  <div>
    <Navbar />
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="danger" :message="error" />
    <div class="uk-child-width-1-2@m uk-grid">
      <div>
        <!-- // Nice image to make this app more beautiful -->
        <div class="uk-card uk-card-default uk-card-small uk-card-body">
          <img
            src="https://assets-ouch.icons8.com/preview/294/e25a0374-0657-45d5-98d9-2408473a744c.png"
            height="500"
            width="500"
            class="uk-align-center"
            alt=""
          />
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body">
          <form v-if="!success" method="post" @submit.prevent="register">
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">Register</legend>

              <div class="uk-margin">
                <label class="uk-form-label">First Name</label>
                <input
                  class="uk-input"
                  v-model="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label">Last Name</label>
                <input
                  class="uk-input"
                  v-model="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label">Username</label>
                <input
                  class="uk-input"
                  v-model="username"
                  type="text"
                  placeholder="username"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text"
                  >Email</label
                >
                <input
                  class="uk-input"
                  v-model="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label">Address</label>
                <input
                  class="uk-input"
                  v-model="address"
                  type="text"
                  placeholder="address"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label">City</label>
                <input
                  class="uk-input"
                  v-model="city"
                  type="text"
                  placeholder="city"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label">Country</label>
                <input
                  class="uk-input"
                  v-model="country"
                  type="text"
                  placeholder="country"
                  required
                />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text"
                  >Password</label
                >
                <input
                  class="uk-input"
                  v-model="password"
                  type="password"
                  required
                />
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
                  Already have an account?
                  <router-link :to="{ name: 'users-signin' }" class="buttons">
                    Login
                  </router-link>
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
// Import mapMutations in order to call mutations from your store
import { mapMutations } from "vuex";
import strapi from "~/utils/Strapi";

export default {
  middleware: "guest",
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      username: "",
      email: "",
      password: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async register() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          city: this.city,
          country: this.country,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.success = `A confirmation link has been sent to your email account. \
 Please click on the link to complete the registration process.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>