<template>
<div>
    <v-app-bar
      color="surface"
      height="80"
      class="el"
      :style="{ padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '' }"
      app
    >
      <v-toolbar-title 
        class="text-md-h5 font-weight-bold pointer"
        @click="$router.push('/')">
        TestCommerce
      </v-toolbar-title>
      <v-spacer />
      <v-btn nuxt to="/products" icon>
        <v-icon size="20">mdi-store-outline</v-icon>
      </v-btn>
      <v-badge
       v-if="$store.state.cart.cart.length > 0"
       overlap
       :content="$store.state.cart.cart.length"
       >
        <v-btn nuxt to="/cart" icon>
          <v-icon size="20">mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn v-else nuxt to="/cart" icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
      <v-divider vertical class="mx-md-5 mx-2"></v-divider>
      <v-btn icon @click="toggleTheme">
        <v-icon size="20">mdi-brightness-7</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
</template>
<script>
export default {
  methods:{
    toggleTheme(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>
<style>
</style>