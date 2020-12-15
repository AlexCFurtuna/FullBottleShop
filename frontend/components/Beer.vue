<template>
  <div class="main">
    <Header />
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
            {{ beer.price + " $" }} <span>{{ beer.size + " ml" }}</span>
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
  },
};
</script>
<style scoped>
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
  text-align: center;
}
img {
  padding: 40px;
  box-shadow: 3px 3px 6px #afbbc1, -3px -3px 6px #edfdff;
}
.pos-absolute {
  position: absolute;
  left: 0;
}
button {
  transition: 0.3s;
}
button:hover {
  box-shadow: 5px 5px 10px #afbbc1, -5px -5px 10px #edfdff;
  background: rgba(265, 182, 50);
}
</style>