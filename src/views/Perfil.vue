<template>
  <v-layout justify-center>
      <v-flex xs6>
          <v-card class="text-center mt-5" color="indigo">
              <v-card-text>
                    <v-avatar
                    color="primary"
                    size="85">
                   <v-img :src="urlTemporal"></v-img>
                 </v-avatar>
              </v-card-text>
              <v-card-text>
                  <h2 class="white--text">{{nombre}}</h2>
              </v-card-text>
              <v-card-text>

                  <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)">

                  <v-btn color="Primary" class="mr-4" @click="$refs.boton.click()">Buscar imagen</v-btn>
                
                  <v-btn color="warning"
                  :disabled="file === null ">Subir imagen</v-btn>
              </v-card-text>

              <v-card-text  v-if="file">
                  <h4 mb-5>{{file.name}}</h4>
                  <v-img :src="urlTemporal"></v-img>
              </v-card-text>
          </v-card>

      </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: "Perfil",
    data() {
        return {
            file: '',
            urlTemporal : '',
            nombre: "Usuario"
        }
    },
    methods:{
        buscarImagen(){
            console.log(event.target.files[0]);
            this.file = event.target.files[0]

            const reader = new FileReader();
            reader.readAsDataURL(this.file)
            reader.onload = (e) => {
                //console.log(e.target.result);

                this.urlTemporal = e.target.result

                localStorage.setItem("urlTemporal", JSON.stringify(this.urlTemporal));
            }
        },
        //enviar(){
            //}
    },
    created(){
        let files = localStorage.getItem("urlTemporal")
        if(files != null){
            this.urlTemporal = JSON.parse(files);
        }
    }
}
</script>

<style>

</style>