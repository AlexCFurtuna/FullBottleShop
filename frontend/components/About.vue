<template>
  <div>
    <Navbar />
    <section>
      <div class="uk-flex uk-flex-center main">
        <div class="left">
          <!-- <img src="~assets/about.jpg" alt="" class="" /> -->
        </div>
        <div class="right">
          <p class="text">
            <span>BOTTLESHOP</span> is an Independent craft beer store . At
            BOTTLESHOP, we are passionate about BEER and constantly strive to
            offer an honest, personal and reliable service.
            <br />
            <br />
            We are small enough to care and big enough to cope. We specialise in
            comprehensive range of BEERS from all corners of the globe.
            BOTTLESHOP was conceived and nurtured out of our passion for food
            and BEER and our overriding aim is to supply quality BEERS that are
            made with passion, integrity and uniqueness of origin whilst being
            true to environmental and ethical issues. For this reason we offer a
            wide range of organic and non-organic ales , larger, ciders and
            beers from micro breweries all around the world.
          </p>
          <a
            class="uk-button uk-button-secondary box-shadow buttons"
            href="/beer"
          >
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
  background: url("~assets/about.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

p {
  font-size: 1.5rem;
  width: 90%;
  margin: 150px 0 50px 50px;
  color: white;
  font-weight: 500;
  color: black;
}
img {
  height: 90vh;
}
span {
  font-size: 3rem;
  font-weight: 500;
}
a {
  margin: 0 0 0 50px;
}
@media screen and (max-width: 1440px) {
  p {
    margin: 50px 0 50px 50px;
  }
}
@media screen and (max-width: 1024px) {
  .main {
    min-height: 70vh;
  }
  p {
    width: 90%;
  }
  p {
    margin: 35px 25px 0 25px;
  }
  a {
    margin: 25px;
  }
}
@media screen and (max-width: 767px) {
  .main {
    background: url("~assets/about-mid.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .left {
    display: none;
  }
  .right {
    width: 90%;
  }
  p {
    font-size: 1rem;
    margin: 50px auto;
    color: white;
  }
  span {
    font-size: 2rem;
  }
}
</style>