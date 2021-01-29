<template>
  <div class="background">
    <Navbar />
    <div class="main uk-flex uk-flex-center">
      <div class="left">
        <div class="uk-margin-top filters">
          <form class="uk-form uk-margin-top">
            <span uk-search-icon></span>
            <input
              class="uk-search-input"
              v-model="query"
              type="search"
              placeholder="Search..."
            />
          </form>

          <ul class="uk-nav-primary uk-nav-parent-icon categories">
            <li v-for="category in categories" :key="category.id">
              <router-link
                class="uk-modal-close"
                :to="{ name: 'categories-id', params: { id: category.id } }"
                tag="a"
                >{{ category.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="center">
        <div class="beers">
          <div v-for="beer in filteredList" :key="beer.id" class="beer">
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
          <!-- <div class="beer" v-for="beer in category.beers" v-bind:key="beer.id">
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
          </div> -->
        </div>
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
import beersQuery from "~/apollo/queries/beer/beers";
import categoriesQuery from "~/apollo/queries/categories/categories";
// import beersCategoriesQuery from "~/apollo/queries/beer/beersCategories";
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      // Initialize an empty restaurants variable
      beers: [],
      // category: {},
      categories: [],
      query: "",
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
    categories: {
      prefetch: true,
      query: categoriesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
    // category: {
    //   prefetch: ({ route }) => {
    //     return {
    //       id: route.params.id,
    //     };
    //   },
    //   variables() {
    //     return { id: this.$route.params.id };
    //   },
    //   query: beersCategoriesQuery,
    // },
  },
  computed: {
    filteredList() {
      return this.beers.filter((beer) => {
        return beer.name.toLowerCase().includes(this.query.toLowerCase());
      });
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
.beers {
  padding: 50px 0;
  text-align: center;
}
.left {
  margin: 25px 50px 0 25px;
}
.beer {
  max-width: 15%;
  display: inline-block;
  margin: 25px;
  border-radius: 5px;
}
h4 {
  padding: 5px 10px;
}
button {
  font-size: 0.8rem;
  transition: 0.3s;
  color: white;
  background: black;
  text-decoration: none;
  border-radius: 5px;
}
button:hover {
  background: rgba(265, 182, 50);
  box-shadow: 4px 4px 8px #afbbc1, -4px -4px 8px #edfdff;
}
@media screen and (max-width: 1024px) {
  .beer {
    max-width: 25%;
    display: inline-block;
    margin: 25px;
    border-radius: 5px;
    padding: 15px 15px 25px 0;
  }
}

@media screen and (max-width: 768px) {
  .main {
    display: block;
  }
  .categories {
    padding: 0;
    text-align: center;
  }
  .categories li {
    display: inline-block;
    margin: 0 5px;
  }
  .categories a {
    font-size: 0.8rem;
  }
  .beers {
    padding: 0;
  }
  .beer {
    max-width: 60%;
    padding-bottom: 25px;
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