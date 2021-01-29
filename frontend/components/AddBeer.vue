<template>
  <div v-if="isAuthenticated">
    <Navbar />
    <form method="post" @submit.prevent="createBeer">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add new beer</legend>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Beer Name</label>
          <input class="uk-input" v-model="name" type="text" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text"
            >Description</label
          >
          <textarea class="uk-input" v-model="description" type="text" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Price</label>
          <textarea class="uk-input" v-model="price" type="text" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Image</label>
          <textarea class="uk-input" v-model="image" type="image" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">ABV</label>
          <textarea class="uk-input" v-model="abv" type="text" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Size</label>
          <textarea class="uk-input" v-model="size" type="text" />
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Category</label>
          <select class="uk-input" v-model="categories" type="text">
            <option v-for="category in categories" :key="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="uk-margin">
          <button
            class="uk-button uk-button-primary uk-width-1-1 buttons"
            type="submit"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
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
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async createBeer() {
      const { data } = await axios.post("http://localhost:1337/beers", {
        data: {
          name: this.name,
          description: this.description,
          price: this.price,
          image: this.image,
          abv: this.abv,
          size: this.size,
          categories: this.categories,
        },
        headers: {
          Authorization: "Bearer " + this.$auth.ctx.query.code,
        },
      });
      console.log(data);
      // .then((res) => {
      //   const { data } = axios.post("http://localhost:1337/beers", {
      //     data: {
      //       name: this.name,
      //       description: this.description,
      //       price: this.price,
      //       image: this.image,
      //       abv: this.abv,
      //       size: this.size,
      //       categories: this.categories,
      //     },
      //     headers: {
      //       headers: {
      //         Authorization: "Bearer",
      //       },
      //     },
      //   });
      // });
      // try {
      //   await this.$strapi.create("beers", {
      //
      //   });
      // } catch (e) {
      //   throw e;
      // }
    },
  },
};
</script>
<style>
form {
  width: 35%;
  margin: 120px 0 110px 50px;
}
</style> 