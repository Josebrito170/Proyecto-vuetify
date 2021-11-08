<template>
  <v-layout justify-center mt-5>
      <v-flex xs12 sm8 md6 xl4>
          <v-card>
              <v-card-text class="display-1 text-uppercase white--text text-center"
              :class="registro ? 'success' : 'primary'">
                  <span v-if="!registro">Ingreso</span>
                  <span v-if="registro">Registro</span>
              </v-card-text>

              <v-card-text>
                  <v-btn mb-2 block color="error">
                      <v-icon left dark>fab fa-google</v-icon>
                      Google
                  </v-btn>
                  <v-btn block mt-5 color="info">
                      <v-icon left dark>fab fa-facebook-f</v-icon>
                      Facebook
                  </v-btn>
              </v-card-text>

            <v-card-text>
                   <v-btn block @click="registro = true" v-if="!registro">¿No tiene cuenta? Registrate aquí</v-btn>
                   <v-btn block @click="registro = false" v-if="registro">¿Ya tiene cuenta? Ingresa aquí</v-btn>

            </v-card-text> 
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>

export default {
    data() {
        return {
            registro: false
        }
    },
  
}
</script>

<style>

</style>