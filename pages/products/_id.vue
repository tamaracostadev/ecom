<template>
  <div>
    <NavBar />
    <br /><br /><br /><br />
    <v-container v-if="product">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div class="text-center mt-2">
          <v-rating
            readonly
            half-increments
            class="mb-2"
            color="yellow darken-2"
            background-color="grey lighten-1"
            :value="product.ratings"
            dense
            size="20"
          ></v-rating>
          <v-chip
            v-for="(tag, x) in product.tags"
            :key="`prod${product.id}-${x}`"
            class="mr-1"
            x-small
            label
            outlined
            >{{ tag }}</v-chip
          >
          </div>
          <br />
          <v-img
            :src="product.image"
            width="100%"
            class="el rounded-lg"
            height="50vh"
          ></v-img>
          <p class="mt-5 mb-7">{{ product.description }}</p>
          <v-btn
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            @click="$store.commit('cart/AddToCart',product)"
          >Adicionar ao Carrinho</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <FooterComp />
    <ScrollTop /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    }
  },
  async created() {
    const p = await this.$content('products')
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch()
    this.product = p[0]
  },
}
</script>

<style></style>
