<template>
  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
      <h2 class="text-md-h3">Newsletter</h2>
      <p class="text-md-h6-mt-5">Inscreva-se para receber nossas promoções em primeira mão</p>
      <br/>
        <v-sheet color="transparent" class="mx-auto" max-width="400">
            <v-text-field v-model="email" label="Email" type="email"  outlined ></v-text-field>
    <v-btn outlined min-height="50" block @click="submit">Inscrever</v-btn>
        </v-sheet>
  </v-card>
</template>

<script>
export default {
    data(){
        return {
            email: null
        }
    },
    methods:{
        async submit(){
            await this.$swal({
                title: "Obrigado por se inscrever",
                icon: "success",
                allowOutsideClick: false,
                showConfirmButton: false,
                allowEscapeKey:false,
                timer:4000,
                timerProgressBar: true,
                text: "Você será notificado em primeira mão quando lançarmos novas promoções"
            })
        }
    }
}
</script>

<style>

</style>