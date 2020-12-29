<template>
  <section>
    <Navbar />
    <div class="main uk-flex uk-flex-center">
      <div class="left" v-if="isAuthenticated">
        <div class="top">
          <h1>Hi, {{ loggedInUser.firstName }} !</h1>
          <h3>
            Welcome to your profile. From here's you can change the info on your
            BottleShop account. If you need more help, email us
            <nuxt-link to="/contact">here</nuxt-link>.
          </h3>
        </div>
        <div class="form">
          <form action="">
            <p>First Name</p>
            <input type="text" :value="loggedInUser.firstName" />
            <br />
            <p>Last Name</p>
            <input type="text" :value="loggedInUser.lastName" />
            <br />
            <p>Address</p>
            <input type="text" :value="loggedInUser.address" />
            <br />
            <p>City</p>
            <input type="text" :value="loggedInUser.city" />
            <br />
            <p>Country</p>
            <input type="text" :value="loggedInUser.country" />
            <br />
            <p>Email</p>
            <input type="text" :value="loggedInUser.email" />
            <br />
          </form>
          <button class="uk-button uk-button-secondary buttons" type="submit">
            update details
          </button>
        </div>
      </div>
      <div class="right">
        <img src="~assets/user-two.jpg" alt="" class="img" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  // computed: {
  //   // Set your username thanks to your getter
  //   username() {
  //     return this.$store.getters["auth/username"];
  //   },
  //   firstName() {
  //     return this.$store.getters["auth/firstName"];
  //   },
  //   lastName() {
  //     return this.$store.getters["auth/lastName"];
  //   },
  //   address() {
  //     return this.$store.getters["auth/address"];
  //   },
  //   email() {
  //     return this.$store.getters["auth/email"];
  //   },
  //   city() {
  //     return this.$store.getters["auth/city"];
  //   },
  //   country() {
  //     return this.$store.getters["auth/country"];
  //   },
  //   password() {
  //     return this.$store.getters["auth/password"];
  //   },
  // },
};
</script>
<style scoped>
.right {
  width: 50%;
}
.left {
  width: 35%;
  margin-left: 100px;
}
.top,
.form {
  margin: 50px 0 50px 50px;
}
form {
  min-height: 50vh;
  margin: 25px 0;
}
p,
input {
  font-size: 1.2rem;
  border-radius: 5px;
  width: 50%;
  padding: 5px 10px;
}
p {
  margin: 5px 0;
}
input {
  border: 1px solid black;
  margin: 0;
  background: none;
  height: 25px;
  outline: none;
}
h3 {
  width: 50%;
}
.buttons {
  font-size: 1rem;
  padding: 5px 10px !important;
  margin-bottom: 50px;
}
</style>