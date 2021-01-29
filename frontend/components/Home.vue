<template>
  <div>
    <section>
      <Navbar />
      <div class="uk-flex uk-flex-center main">
        <div class="main-right">
          <h1>Welcome to BottleShop!</h1>
          <p class="main-text">
            <span class="text-span">Because</span> no great story every started
            with a glass of milk .
          </p>
          <a class="uk-button uk-button-secondary buttons" href="/beer">
            beer me
          </a>
        </div>
      </div>
    </section>
    <section class="home-mid">
      <div class="mid-top">
        <h3>browse by</h3>
        <p>Choose your Beer</p>
        <div class="browse-by">
          <ul>
            <li>
              <img class="small-img" src="~/assets/import.png" alt="import" />
              Import
            </li>
            <li class="small-img-mid">
              <img src="~/assets/import.png" alt="" />
            </li>
            <li>
              <img class="small-img" src="~/assets/romanian-craft.png" alt="" />
              Romanian Craft
            </li>
            <li class="small-img-mid">
              <img src="~/assets/romanian-craft.png" alt="" />
            </li>
            <li>
              <img class="small-img" src="~/assets/premium.png" alt="" />
              Premium
            </li>
            <li class="small-img-mid">
              <img src="~/assets/premium.png" alt="" />
            </li>
            <li>
              <img class="small-img" src="~/assets/value.png" alt="" /> Value
            </li>
            <li class="small-img-mid">
              <img src="~/assets/value.png" alt="" />
            </li>
            <li>
              <img
                class="small-img"
                src="~/assets/domestic-speciality.png"
                alt=""
              />
              Domestic Speciality
            </li>
            <li class="small-img-mid">
              <img src="~/assets/domestic-speciality.png" alt="" />
            </li>
          </ul>
        </div>
        <a class="uk-button uk-button-secondary buttons" href="/beer"
          >See all Beer</a
        >
      </div>
    </section>
    <section class="home-bottom">
      <div class="mid-top">
        <h3 class="white-font">browse by</h3>
        <p class="white-font">Beer Types</p>
        <div class="browse-by">
          <ul class="white-font">
            <li v-for="c in categories" :key="c.id">
              <a class="beer-links" href="/beer"> {{ c.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import categoriesQuery from "~/apollo/queries/categories/categories";

export default {
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  data() {
    return {
      beers: [],
      query: "",
      name: "",
      description: "",
      price: "",
      image: "",
      abv: "",
      size: "",
      categories: "",
    };
  },
};
</script>
<style scoped>
.small-img-mid {
  display: none;
}
.small-img {
  display: inline-block;
}
.white-font {
  color: white;
}
section {
  border: 1px solid white;
}
.main {
  background: url("~assets/home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  color: white;
}
.main h1 {
  color: white;
  font-size: 4rem;
}
.main p {
  margin: 50px 0 50px 0;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 3rem;
  position: relative;
  letter-spacing: 2px;
}
.main-right {
  width: 40%;
  text-align: center;
  margin: 350px 0 0 600px;
}
.main-text {
  text-align: center;
  background: transparent;
}
.home-mid,
.home-bottom {
  min-height: 50vh;
  background: white;
  color: black;
  padding: 10% 0;
}
.mid-top {
  text-align: center;
}
.mid-top h3 {
  text-transform: uppercase;
}

.browse-by ul li {
  font-size: 1.5rem;
  display: inline-block;
  padding: 5px 10px;
  margin: 0 10px;
}
.browse-by img {
  height: 100px;
}

.home-bottom {
  background: url("~assets/hops-dark.jpg") no-repeat top;
  padding: 10% 0 0 0;
}

.beer-links {
  text-decoration: none;
  color: white;
  font-size: 3.5rem;
  font-weight: 500;
  transition: 0.3s;
  letter-spacing: 3px;
  padding: 5px 20px;
  border: 2px solid white;
  border-radius: 5px;
}
.beer-links:hover,
.bottom-footer li a:hover,
.bottom-footer li:hover {
  color: rgba(265, 182, 50);
}

/* MEDIA QUERIES */
@media screen and (min-width: 1441px) {
  .main {
    padding: 150px 0;
  }
  .small-img {
    display: inline-block !important;
  }
  .small-img-mid {
    display: none !important;
  }
}
@media screen and (max-width: 1440px) {
  .main {
    background-position: center;
    background-size: cover;
    padding-bottom: 100px;
  }
  .main-right {
    margin: 10% 0 0 35%;
  }
  .small-img {
    display: inline-block !important;
  }
  .small-img-mid {
    display: none !important;
  }
}
@media screen and (max-width: 1024px) {
  .main {
    background: url("~assets/home.jpg") no-repeat center;
    background-size: cover;
  }

  .main-right {
    width: 80%;
    margin: 350px auto 0 auto;
  }
  .text-span {
    background: rgba(265, 182, 50);
    padding: 5px 10px;
    border-radius: 5px;
  }
  .home-mid {
    min-height: 30vh;
  }
}
@media screen and (max-width: 767px) {
  .main {
    background: url("~assets/home-mid.jpg") no-repeat center;
    background-size: cover;
  }
  .main-right {
    width: 80%;
    margin: 100px auto 0 auto;
  }
  .main h1 {
    color: white;
    font-size: 3rem;
  }
  .main p {
    font-size: 1.5rem;
  }
  .browse-by ul {
    padding: 0;
  }
  .browse-by ul li {
    display: block;
  }
  .small-img {
    display: none;
  }
  .small-img-mid {
    display: block;
  }
  .beer-links {
    font-size: 2rem;
  }
  .browse-by ul li {
    margin-top: 15px;
  }
}
</style>
