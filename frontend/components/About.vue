<template>
  <div>
    <Header />
    <section>
      <div class="uk-flex uk-flex-center main">
        <div class="left">
          <img src="~assets/about.jpg" alt="" />
        </div>
        <div class="right">
          <p class="text">
            BOTTLESHOP is an Independent craft beer and Wine store .At
            BOTTLESHOP,we are passionate about wine & Beer and constantly strive
            to offer an honest, personal and reliable service. We are small
            enough to care and big enough to cope. We specialise in
            comprehensive range of wines & beers from all corners of the globe.
            BOTTLESHOP was conceived and nurtured out of our passion for food
            and wine and our overriding aim is to supply quality wines that are
            made with passion, integrity and uniqueness of origin whilst being
            true to environmental and ethical issues. For this reason we offer a
            wide range of biodynamic and organic wines alongside a very large
            selection of organic and non-organic Ales , larger,ciders and beers
            from micro breweries
          </p>
          <a class="uk-button uk-button-secondary box-shadow" href="/beer">
            beer me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.left,
.right {
  width: 50%;
}
.left {
  text-align: center;
}
img {
  margin-top: 50px;
  height: 90vh;
  border-radius: 5px;
  background: linear-gradient(145deg, #dcebf3, #b9c6cc);
  box-shadow: 10px 10px 20px #afbbc1, -10px -10px 20px #edfdff;
}
.right {
  text-align: center;
}
p {
  font-size: 1.6rem;
  width: 70%;
  margin: 25px auto;
  padding: 75px 0;
}
a {
  font-size: 2rem;
  padding: 10px 30px;
  transition: 0.3s;
  color: white;
  background: black;
  text-decoration: none;
  border-radius: 5px;
}
a:hover {
  color: white;
  background: rgba(265, 182, 50);
  box-shadow: 4px 4px 8px #afbbc1, -4px -4px 8px #edfdff;
}
</style>