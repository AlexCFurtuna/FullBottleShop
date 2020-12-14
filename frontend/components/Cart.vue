<template>
  <div
    class="uk-card uk-card-default uk-card-body uk-margin"
    uk-sticky="offset: 20; bottom: true"
  >
    <img
      src="https://assets-ouch.icons8.com/preview/125/6414b067-ba59-46ef-8693-4e190aa466c7.png"
      class="uk-align-center"
      height="250"
      width="250"
      alt=""
    />

    <div>
      <table
        class="uk-table uk-table-striped uk-table-small uk-table-responsive"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (unit)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="beer in selectedBeers" :key="beer.index">
            <td class="uk-width-1-2">{{ beer.name }}</td>
            <td class="uk-table-shrink">{{ beer.price }}€</td>
            <td class="uk-table-shrink">{{ beer.quantity }}</td>
            <td>
              <a class="uk-margin-left"
                ><span class="uk-badge" @click="addToCart(beer)">+</span></a
              >
              <a
                ><span
                  class="uk-badge"
                  style="background: #f0506e"
                  @click="removeFromCart(beer)"
                  >-</span
                ></a
              >
            </td>
            <button
              @click="goToCheckout"
              class="uk-button uk-button-primary"
              name="button"
            >
              Process to checkout ({{ price }}RON)
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
    goToCheckout() {
      // Redirect to signin page if not logged in.
      const isConnected = this.$store.getters["auth/username"];
      if (!isConnected) {
        this.$router.push("/users/signin");
        return;
      }
      this.$router.push("/orders/checkout");
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedBeers() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
};
</script>