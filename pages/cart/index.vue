<template>
  <div>
    <NavBar />
    <br /><br /><br /><br />
    <div v-if="$store.state.cart.cart.length == 0" class="text-center">
      <p>O carrinho está vazio</p>
    </div>
    <v-container>
        <div 
        v-if="$store.state.cart.cart.length >0" 
        class="mb-3" >
            <v-btn
            nuxt to="/cart/confirm"
            min-width="150"
            min-height="45"
            color="primary"
            >
            Checkout
            </v-btn>
        </div>
      <v-row>
        <template v-for="(item, i) in $store.state.cart.cart">
          <v-col :key="`cartItem${i}`">
            <v-card color="surface" flat>
              <v-btn
                absolute
                top
                right
                icon
                @click="$store.commit('cart/RemoveCartItem', i)"
              >
                <v-icon size="18">mdi-delete</v-icon>
              </v-btn>
              <v-row dense>
                <v-col md="3">
                  <v-img
                    class="rounded"
                    height="220"
                    :src="item.product.image"
                  ></v-img>
                </v-col>
                <v-col class="pl-5 pt-2" md="9">
                  <h2 class="text-md-6 font-weight-bold">
                    {{ item.product.name }} x {{ item.quantity }}
                  </h2>
                  <p class="primary--text mt2">
                    {{ $formatMoney(item.product.price * item.quantity) }}
                  </p>
                  <v-btn
                    icon
                    @click="$store.commit('cart/IncreaseItemCount', i)"
                  >
                    <v-icon size="20">mdi-plus-circle</v-icon>
                  </v-btn>
                  <span class="mx-2">{{ item.quantity }}</span>
                  <v-btn
                    icon
                    @click="$store.commit('cart/DecreaseItemCount', i)"
                  >
                    <v-icon size="20">mdi-minus-circle</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
     <FooterComp />
      <ScrollTop />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
