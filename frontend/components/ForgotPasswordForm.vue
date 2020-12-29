<template>
  <div>
    <Navbar />
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="danger" :message="error" />
    <form v-if="!success" method="post" @submit.prevent="forgotPassword">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Forgot Password</legend>

        <div class="uk-margin">
          <label class="label">Email</label>
          <input v-model="email" type="email" class="uk-input" name="email" />
        </div>

        <div class="uk-margin">
          <button class="uk-button uk-button-secondary buttons" type="submit">
            Email me a reset link
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
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      email: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async forgotPassword() {
      try {
        await this.$axios.post("auth/forgot-password", {
          email: this.email,
        });
        this.error = null;
        this.success = `A reset password link has been sent to your email account. \
 Please click on the link to complete the password reset.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>