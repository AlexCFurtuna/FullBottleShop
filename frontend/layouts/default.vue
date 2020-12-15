<template>
  <div class="main">
    <Nuxt />
    <div
      hidden
      id="snipcart"
      data-api-key="NGNiZTQ0MDMtMjJkYi00MWZhLWI0ZjQtMjY2ZjhjNGQxODIxNjM3NDIzMzM5MzM0NDExMTg0
"
    ></div>
    <Footer />
  </div>
</template>
<script>
// Import your new Header component
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style>
.main {
  min-height: 100vh;
  background: linear-gradient(145deg, #ffffff, #dedede);
}
.box-shadow {
  box-shadow: 4px 4px 8px #afbbc1, -4px -4px 8px #edfdff;
}
</style>

