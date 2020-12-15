<template>
  <div>
    <Header />
    <div class="main uk-flex uk-flex-center">
      <div class="left">
        <div class="uk-margin-top filters">
          <form class="uk-form uk-margin-top">
            <span uk-search-icon></span>
            <input
              class="uk-search-input"
              type="search"
              placeholder="Search..."
            />
          </form>
          <!-- <h2 class="uk-margin-top">Beer Filter</h2>
          <ul class="filter-list">
            <li class="">Lager</li>
            <li>Pale Ale</li>
            <li>IPA</li>
            <li>Sour Beer</li>
            <li>Stout</li>
          </ul> -->
        </div>
      </div>
      <div class="center">
        <div class="beers">
          <div class="beer" v-for="beer in beers" :key="beer.id">
            <nuxt-link :to="`/beer/${beer.id}`" style="text-decoration: none">
              <div class="uk-card beer-img">
                <h4 class="uk-margin-top">
                  {{ beer.name }} {{ beer.abv + "%" }}
                </h4>
                <!-- <img :src="getImageUrl(beer.image.url)" alt="image" /> -->
              </div>

              <div class="uk-card beer-info margin">
                <h4>
                  PRICE<span
                    style="text-decoration: line-through; margin: 0 10px"
                  >
                    ---</span
                  >
                  {{ beer.price }} RON
                </h4>
              </div>
            </nuxt-link>
            <button
              @click="addToCart"
              class="uk-button uk-button-secondary"
              :data-item-id="beer.id"
              :data-item-name="beer.name"
              :data-item-price="beer.price"
              :data-item-description="beer.description"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div class="uk-width-expand@m right">
        <Cart />
      </div>
      <div
        class="uk-container uk-container-center uk-text-center"
        v-if="beers.length == 0"
      >
        <img
          src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
          height="800"
          width="800"
        />
        <p>No beers found</p>
      </div>
    </div>
  </div>
</template>

<script>
// Import the restaurants query
// import beersQuery from "~/apollo/queries/beer/beers";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    getBeers() {
      this.$store.commit("SET_BEERS");
    },
    getImageUrl(relativeUrl) {
      return `${"http://localhost:1337"}${relativeUrl}`;
    },
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
  computed: {
    beers() {
      return this.$store.state.beers;
    },
  },
};
</script>
<style scoped>
.beers {
  margin: 0;
  text-align: center;
}
.center {
  width: 45vw;
  margin-top: 50px;
}
.left {
  width: 25vw;
  margin: 100px 50px 0 25px;
}
.right {
  width: 10vw;
}
.beer {
  width: 15%;
  display: inline-block;
  margin: 0 25px;
}
.filters {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 100px;
  min-height: 250px;
  border: 1px solid black;
}
.filter-list {
  list-style: none;
}
.filter-list li {
  font-size: 1.2rem;
}
</style>
