<template>
  <div>
    <div class="bottom-footer uk-flex uk-flex-center uk-margin">
      <div class="brand">
        <h2>BottleShop</h2>
      </div>
      <div class="services">
        <h4>Services</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </div>
      <div class="shop">
        <h4>Shop</h4>
        <ul class="categories">
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
      <div class="company">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/about">Our Guarantee</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms Of Use</a></li>
        </ul>
      </div>
      <div class="follow-us">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="/instagram">Instagram</a></li>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twitter">Twitter</a></li>
        </ul>
      </div>
    </div>
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
</script>ƒ
<style>
.bottom-footer ul {
  list-style: none;
}
.bottom-footer li a {
  text-decoration: none;
  color: black;
  transition: 0.3s;
}
.bottom-footer li a:hover {
  color: rgba(265, 182, 50);
}
.bottom-footer div {
  margin: 100px 50px 0 50px;
}
</style>