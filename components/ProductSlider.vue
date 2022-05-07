<template>
  <v-slide-group>
      <v-slide-item v-for="(prod,i) in products" :key="`hotProduct-${i}`">
            <v-card nuxt :to="`/products/${prod.id}`" color="surface" width="300" class="el ma-2 mb-5 mr-5">
                <v-img height="300" :src="prod.image">
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
                <v-card-title class="text-md-body-1 font-weight-bold">
                    {{prod.name}}
                </v-card-title>
                <v-card-subtitle class="primary--text pb-3">
                    {{$formatMoney(prod.price)}}
                </v-card-subtitle>
                <v-card-text>
                    <v-chip v-for="(tag,x) in prod.tags" :key="`prod${prod.id}-${x}`"  x-small label outlined class="mr-1">
                        {{tag}}
                    </v-chip>
                </v-card-text>
            </v-card>
      </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
    props:{
        products: {
            type: Array,
            default:()=>{},
        },
    }
}
</script>

<style>

</style>