<template>
  <v-app dark>
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="10">
          <h1>Ooops</h1>
          <p>Ocorreu um erro</p>
          <p class="red--text">Erro: {{error.message}}</p>
          <v-btn nuxt to="/" color="primary" class="text-capitalize">Ir para a página inicial</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
