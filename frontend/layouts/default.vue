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
  min-height: 90vh;
}
a,
button {
  transition: 0.5s !important;
}
a:hover,
button:hover {
  color: white !important;
  background: rgba(265, 182, 50) !important;
  border: 1px solid black;
}
</style>

