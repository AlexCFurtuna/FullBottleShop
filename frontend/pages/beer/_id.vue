<template>
  <div class="main">
    <Header />
    <a
      class="pos-absolute uk-button uk-button-secondary uk-margin"
      @click="$router.go(-1)"
      ><span uk-icon="arrow-left"></span> go back</a
    >
    <div class="beer" v-if="this.beer !== null">
      <div class="left">
        <div class="beer-left">
          <img :src="getImageUrl(beer.image.url)" alt="image" />
        </div>
      </div>
      <div class="right">
        <div class="beer-right">
          <h2>{{ beer.name + " , " + beer.abv + " %" }}</h2>
          <h1>
            {{ beer.price + " RON" }} <span>{{ beer.size + " ml" }}</span>
          </h1>

          <h3>{{ beer.brewery }}</h3>
          <h3>Description: {{ beer.description }}</h3>
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
      <!-- <div class="uk-width-expand@m right">
        <Cart />
      </div> -->
    </div>
    <div v-else>
      <h1>page not found</h1>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import beerQuery from "~/apollo/queries/beer/beer";
export default {
  data() {
    return {
      beer: {},
      storeUrl: process.env.storeUrl,
    };
  },
  apollo: {
    beer: {
      prefetch: true,
      query: beerQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  methods: {
    getImageUrl(relativeUrl) {
      return `${"http://localhost:1337"}${relativeUrl}`;
    },
    // ...mapMutations({
    //   addToCart: "cart/add",
    //   removeFromCart: "cart/remove",
    // }),
  },
  // computed: {
  //   customeFields() {
  //     return this.beer["customFields"]
  //       .map(({ name, required, options }) => ({
  //         name,
  //         required,
  //         options,
  //       }))
  //       .map((x, index) =>
  //         Object.entries(x).map(([key, value]) => ({
  //           [`data-item-custom${
  //             index + 1
  //           }-${key.toString().toLowerCase()}`]: value,
  //         }))
  //       )
  //       .reduce((acc, curr) => acc.concat(curr), [])
  //       .reduce((acc, curr) => ({ ...acc, ...curr }));
  //   },
  // },
};
</script>
<style scoped>
.main {
  text-align: center;
}
.beer {
  display: flex;
  flex-direction: row;
  margin-top: 10rem;
}
.left,
.right {
  width: 35vw;
}
.beer-left {
  width: 100%;
  text-align: right;
}
.pos-absolute {
  position: absolute;
  left: 0;
}
</style>