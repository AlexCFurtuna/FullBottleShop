<template>
  <div class="uk-flex uk-flex-center main">
    <div class="center uk-width-1-2">
      <h1>
        Welcome to BottleShop. Before you can go pick your favourite beer please
        confirm you are above 18! <br />
        <br />
        See you on the other side!
      </h1>
      <br />
      <br />
      <router-link
        tag="a"
        class="navbar-brand uk-button uk-button-secondary buttons"
        to="/home"
        exact
        >I'm over 18!</router-link
      >
    </div>
  </div>
</template>
<style scoped>
.main {
  height: 95vh;
}
.center {
  margin: 15% auto;
}
</style>