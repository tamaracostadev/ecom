<template>
  <div>
      <NavBar/> 
      <br><br><br><br>
      <v-container>
        <v-row dense>
          <v-col md="3">
            <div>
              <v-text-field 
              v-model="search"
              prepend-inner-icon="mdi-magnify" 
              outlined 
              clearable 
              placeholder="Buscar"
               />
               <v-list v-if="$vuetify.breakpoint.mdAndUp" subheader color="transparent" >
                <v-subheader>Categorias</v-subheader>
                <v-list-item v-for="(cat,i) in categories" :key="`category${i}`" link>
                  <v-list-item-avatar>
                    <v-img :src="cat.image"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{cat.name}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
               </v-list>
            </div>
          </v-col>
          <v-col md="9">
            <v-row>
              <template v-for="(prod,i) in filteredProducts">
                <v-col :key="`product${prod.id}-${i}`" cols="12" md="6" >
                  <v-card nuxt :to="`/products/${prod.id}`" color="surface" class="el ma-2 mb-5 mr-5">
                    <v-img :src="prod.image" height="300">
                      <template #placeholder>
                          <v-row 
                            class="fill-height"
                            justify="center"
                            align="end"
                            color="primary"
                            indeterminate
                          >
                            <v-progress-circular width="2" size="100" color="primary" indeterminate>  
                            </v-progress-circular>
                          </v-row>
                      </template>
                    </v-img>
                    <v-card-title class="text-md-body-1 font-weight-bold">{{prod.name}}</v-card-title>
                    <v-card-subtitle class="primary--text pb3">{{$formatMoney(prod.price)}}</v-card-subtitle>
                    <v-card-text
                      
                      
                    >
                   
                      <v-chip  
                      v-for="(tag,x) in prod.tags" :key="`prod${prod.id}-${x}`" class="mr-1" x-small
                      label
                      outlined>{{tag}}</v-chip>
                     
                    </v-card-text>
                  </v-card>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
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
      categories:null,
      search: null
    }
  },
  computed:{
    filteredProducts(){
      if(!this.search || !this.products) return this.products || [];
      return this.products.filter(prod =>{
        const search = this.search.toLowerCase();
        const name = prod.name.toLowerCase();
        const price = prod.price.toString();
        const sale = prod.salePrice?.toString() || '';
        const ratings = prod.ratings.toString();
        return name.includes(search) || price.includes(search) || sale.includes(search) || ratings.includes(search)

      })
    }
  },
  async created(){
    this.categories = await this.$content('category').fetch()
    this.products = await this.$content('products').fetch()
  },
  
  
}
</script>

<style>

</style>