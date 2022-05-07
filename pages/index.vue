<template>
  <div>
    <NavBar/>
    <HomeCarousel :sale-items="sale_items" />
    <br/><br/>
    <v-container>
      <h1 class="text-md-h4 text-h6">
        Confira nossos produtos
      </h1>
      <br/>
      <ProductSlider :products="products" />
      <br><br><br>
      <NewsLetter />
    </v-container>
    <FooterComp />
    <ScrollTop /> 
  </div>
</template>
<script>
export default {
  data(){
    return{
      products:null,
      sale_items:null
    }
  },
  async created(){
    this.sale_items = await this.$content('products').where({onSale: true}).fetch()
    this.products = await this.$content('products').fetch()
  },
}
</script>
<style>

</style>