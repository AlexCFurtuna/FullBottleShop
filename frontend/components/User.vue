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
        </div>
      </div>
      <!-- <div class="right">
        <img src="~assets/user-two.jpg" alt="" class="img" />
      </div> -->
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
<style scoped>
.top,
.form {
  margin: 50px 0 50px 150px;
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
@media screen and (max-width: 1280px) {
  .left {
    width: 50%;
  }
  p,
  input,
  h3 {
    width: 100%;
  }
  .top,
  .form {
    margin: 0 auto !important;
  }
}
</style>