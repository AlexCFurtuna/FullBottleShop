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
export default {};
</script>
<style>
.main {
  min-height: 100vh;
  /* background: linear-gradient(#ffffff, #cfdef3); */
  background: white;
}
.box-shadow {
  box-shadow: 4px 4px 8px #afbbc1, -4px -4px 8px #edfdff;
}
.buttons {
  font-size: 1.6rem;
  padding: 10px 30px;
  transition: 0.3s;
  color: white;
  background: black;
  text-decoration: none;
  border-radius: 5px;
}
.buttons:hover {
  background: rgba(265, 182, 50);
  box-shadow: 4px 4px 8px #afbbc1, -4px -4px 8px #edfdff;
}
.img {
  margin-top: 50px;
  height: 90vh;
  border-radius: 5px;
  background: linear-gradient(145deg, #dcebf3, #b9c6cc);
  box-shadow: 5px 5px 10px #afbbc1, -5px -5px 10px #edfdff;
}
</style>

