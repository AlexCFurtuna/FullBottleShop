<template>
  <div>
    <Navbar />
    <client-only>
      <div class="uk-section">
        <div class="beer" v-for="beer in category.beers" v-bind:key="beer.id">
          <nuxt-link :to="`/beer/${beer.id}`" style="text-decoration: none">
            <div class="uk-card beer-img">
              <h4 class="uk-margin-top">
                {{ beer.name }} {{ beer.abv + "%" }}
              </h4>
              <h5>{{ beer.category.name }}</h5>
              <img :src="getImageUrl(beer.image.url)" alt="image" />
            </div>

            <div class="uk-card beer-info margin">
              <h4>PRICE : {{ beer.price }} $</h4>
            </div>
          </nuxt-link>
          <button
            class="snipcart-add-item uk-button uk-button-secondary"
            :data-item-id="beer.id"
            :data-item-name="beer.name"
            :data-item-price="beer.price"
            :data-item-description="beer.description"
            :data-item-image="getImageUrl(beer.image.url)"
            :data-item-url="$route.fullPath"
          >
            Add to cart
          </button>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import beersQuery from "~/apollo/queries/beer/beers";
import beersCategoriesQuery from "~/apollo/queries/beer/beersCategories";

export default {
  data() {
    return {
      category: {},
    };
  },
  apollo: {
    beers: {
      prefetch: true,
      query: beersQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
    category: {
      prefetch: ({ route }) => {
        return {
          id: route.params.id,
        };
      },
      variables() {
        return { id: this.$route.params.id };
      },
      query: beersCategoriesQuery,
    },
  },
  methods: {
    getImageUrl(relativeUrl) {
      return `${"http://localhost:1337"}${relativeUrl}`;
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 768px) {
  .beers {
    padding: 0;
  }
  .beer {
    max-width: 90%;
    padding-bottom: 25px;
    margin: 0 auto;
    text-align: center;
  }

  .beer h4 {
    padding: 0;
    font-size: 1rem;
    margin: 10px auto;
  }
  .beer h5 {
    font-size: 0.8rem;
    margin: 10px;
  }
}
</style>