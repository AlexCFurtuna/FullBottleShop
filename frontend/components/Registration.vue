<template>
  <div>
    <Navbar />
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="danger" :message="error" />
    <div class="uk-child-width-1-2@m uk-grid">
      <div class="hidden">
        <!-- // Nice image to make this app more beautiful -->
        <div class="left"></div>
      </div>
      <div class="right">
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
<style scoped>
.left {
  background: url("~assets/contact.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
  padding: 50px;
}

.right {
  padding: 0 60px 0 0;
}

@media screen and (max-width: 1440px) {
  .left {
    padding: 0 50px 100px 50px;
  }
  div.right div.uk-card.uk-card-default.uk-card-large.uk-card-body {
    padding: 25px;
    box-shadow: none;
  }
}
@media screen and (max-width: 1024px) {
  div .left {
    display: none;
  }
  .hidden {
    display: none;
  }
  div .right {
    margin: 0 auto;
    padding: 0;
    background: url("~assets/contact-mid.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 75vh;
    padding: 50px;
    width: 100%;
  }
  input,
  .right div {
    background: transparent;
  }
  .right div {
    width: 70%;
    margin: 0 auto;
  }
  form,
  label,
  input::placeholder {
    color: white;
  }
  input {
    border-radius: 5px;
  }
  label {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
 