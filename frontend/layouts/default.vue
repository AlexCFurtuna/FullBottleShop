<template>
  <div class="main">
    <Nuxt />
    <div
      hidden
      id="snipcart"
      data-api-key="NGNiZTQ0MDMtMjJkYi00MWZhLWI0ZjQtMjY2ZjhjNGQxODIxNjM3NDIzMzM5MzM0NDExMTg0
"
    ></div>
    <BottomFooter />
    <Footer />
  </div>
</template>
<script>
// Import your new Header component
export default {};
</script>
<style>
.main {
  min-height: 70vh;
  background: white;
}
/* .box-shadow {
  box-shadow: 4px 4px 8px #696969, -4px -4px 8px #000000;
} */
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
  box-shadow: 4px 4px 8px #696969, -4px -4px 8px black;
}
/* .img {
  margin-top: 50px;
  height: 90vh;
  border-radius: 5px;
  background: linear-gradient(145deg, #dcebf3, #b9c6cc);
  box-shadow: 5px 5px 10px #afbbc1, -5px -5px 10px #edfdff;
} */
@media screen and (max-width: 1440px) {
  .bottom-footer div {
    margin: 100px 35px 0 35px;
  }
}
@media screen and (max-width: 1024px) {
  .bottom-footer div {
    margin: 100px 25px 0 25px;
  }
}
@media screen and (max-width: 768px) {
  .bottom-footer {
    display: block;
  }
  .bottom-footer div {
    margin: 10px 0 0 25px !important;
  }
  .buttons {
    font-size: 1rem;
    padding: 5px 15px;
    transition: 0.3s;
    color: white;
    background: black;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 4px 4px 8px #696969, -4px -4px 8px #000000;
  }
}
</style>

