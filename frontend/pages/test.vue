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
    getImageUrl(relativeUrl) {
      return `${"http://localhost:1337"}${relativeUrl}`;
    },
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
