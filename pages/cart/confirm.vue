<template>
  <div>
      <NavBar/>
      <br><br><br><br>
      <div v-if="$store.state.cart.cart.length == 0" class="text-center">
      <p>O carrinho está vazio</p>
    </div>
    <v-container>
        <div 
        v-if="$store.state.cart.cart.length >0" 
        class="mb-3" >
            <v-btn
            nuxt to="/cart"
            min-width="150"
            min-height="45"
            depressed
            >
            Voltar
            </v-btn>
            <v-btn
            min-width="150"
            min-height="45"
            color="primary"
          @click="process"
            >
            Finalizar
            </v-btn>
        </div>

        <v-form ref="form" lazy-validation class="mt-10">
            <p class="font-weight-bold">Dados pessoais e entrega</p>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="email"
                    :rules="[rules.required,rules.email]"
                    outlined
                    label="Email"
                    type="email"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="name"
                    :rules="[rules.required]"
                    outlined
                    label="Nome Completo"
                    type="text"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="phone"
                    outlined
                    label="Telefone"
                    type="tel"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="address"
                    :rules="[rules.required]"
                    outlined
                    label="Endereço"
                    type="text"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="city"
                    :rules="[rules.required]"
                    outlined
                    label="Cidade"
                    type="text"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="country"
                    :rules="[rules.required]"
                    outlined
                    label="País"
                    type="text"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field
                    v-model="cc"
                    :rules="[rules.required]"
                    outlined
                    label="Número do cartão de crédito"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                    v-model="expdate"
                    :rules="[rules.required]"
                    outlined
                    label="Validade do cartão"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                    v-model="cvv"
                    :rules="[rules.required]"
                    outlined
                    label="Código de segurança/CVV"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:null,
            name:null,
            phone:null,
            address:null,
            city:null,
            country:null,
            cc: '424242424242',
            expdate: '06/25',
            cvv:'123',
            rules:{
                required:(val)=> !!val || "Obrigatório",
                email: (val) => {
                 const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return pattern.test(val) || "E-mail inválido"   
                }
            }
        };
    },
    methods:{
        async process(){
            if(!this.$refs.form.validate()) return;
            await this.$swal({
                title:"Processando Pedido",
                icon:"info",
                allowWscapeKey: false,
                timer:3000,
                allowOutsideClick: false,
                text:"Aguarde...",
                showConfirmButton: false
            })

            await this.$swal({
                title:"Pedido efetuado",
                icon:"success",
                allowWscapeKey: false,
                timer:3000,
                allowOutsideClick: false,
                text:"Agradecemos a preferência",
                showConfirmButton: false
            })
            this.$store.commit("cart/ClearCart");
            this.$router.push("/")
        }
    }

}
</script>

<style>

</style>