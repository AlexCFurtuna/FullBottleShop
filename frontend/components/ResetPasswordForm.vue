<template>
  <div>
    <Navbar />
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="danger" :message="error" />
    <form v-if="!success" method="post" @submit.prevent="resetPassword">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Reset Password</legend>

        <div class="uk-margin">
          <label class="label">New Password</label>
          <input
            v-model="password1"
            type="password"
            class="uk-input"
            name="password"
          />
        </div>

        <div class="uk-margin">
          <label class="label">Confirm New Password</label>
          <input
            v-model="password2"
            type="password"
            class="uk-input"
            name="password"
          />
        </div>

        <div class="uk-margin">
          <button class="uk-button uk-button-secondary buttons" type="submit">
            Reset password
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
export default {
  middleware: "guest",
  asyncData(context) {
    if (!context.route.query.code) context.redirect("/forgot-password");
    else
      return {
        code: context.route.query.code,
      };
  },
  data() {
    return {
      password1: "",
      password2: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async resetPassword() {
      this.error = null;
      if (this.password1 !== this.password2) {
        this.error = "Passwords do not match.";
        return;
      }
    try {      
        await this.$axios.post("/auth/reset-password", {
          code: this.$auth.ctx.query.code,
          password: this.password1,
          passwordConfirmation: this.password2,
        });
        this.success =
          "Password updated successfully. You can now use it to log in to your account.";
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>