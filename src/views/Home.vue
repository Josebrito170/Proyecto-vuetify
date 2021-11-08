<template>
 <v-container id="app" grid-list-xl>
    <v-layout wrap>
        <v-flex xs12>
          <div class="d-flex">

              <h1 class="mr-3 white--text">TaskApp</h1>
          
           
                <v-dialog persistent
                  transition="dialog-bottom-transition"
                  v-model="dialog"
                  width="500"
                  
                >

                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="indigo lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="mt-2"
                    >
                      <h2 class="mr-2">Información</h2><v-icon>far fa-window-maximize</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 indigo lighten-2 white--text">
                      Leer por favor...
                    </v-card-title>

                    <v-card-text class="pt-2">
                     <h3>Esta pagina está orientada al diseño con Vuetify y al uso practico de vue js</h3> 
                     <v-img
                      class="mx-auto"
                      max-height="319"
                      max-width="312"
                      src="../assets/info.svg"
                    ></v-img>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        Entendido
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
           </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>

        <v-flex md6 v-if="formAgregar">

          <v-card class="pa-3">
            <v-form @submit.prevent="agregarTarea">
              <v-text-field label="Titulo de tarea" v-model="titulo">
              </v-text-field>
              <v-textarea v-model="description"
              outlined
              name="input-7-4"
              label="Escribe una descripción"
            ></v-textarea>
            <v-btn block color="success" type="submit" @keyup.enter="agregarTarea">Agregar tarea <v-icon class="ml-2">fas fa-tasks</v-icon></v-btn>
            </v-form>
           </v-card>
         
        </v-flex>

         <v-flex md6 v-if="!formAgregar">
          <v-card class="pa-3">
            <v-form @submit.prevent="agregarTarea">
              <v-text-field label="Titulo de tarea" v-model="titulo">
              </v-text-field>
              <v-textarea v-model="description"
              outlined
              name="input-7-4"
              label="Escribe una descripción"
            ></v-textarea>
            <v-btn block color="warning" type="submit" @keyup.enter="agregarTarea">Editar tarea <v-icon class="ml-2">fas fa-edit</v-icon></v-btn>
            </v-form>
           </v-card>
         
        </v-flex>

         <v-flex md6>
             
          <v-card class="mb-3 text-left" v-for="(tarea, index) in listaTareas" :key="index">
            <v-card-text>
              <v-chip
                
                class="ma-2 ml-0"
                color="pink"
                label
                text-color="white"
              >
                <v-icon left>
                  fas fa-tags
                </v-icon>
                <h2 :class="{'text-decoration-line-through': complet}">{{tarea.titulo}}</h2>
              </v-chip>
             <h3>{{tarea.description}}</h3>
             <v-container class="d-flex">
                  <v-btn color="warning mr-3" @click="editar(index)">Editar</v-btn>
                  <v-btn color="error mr-3" @click="eliminar(tarea.id)">Borrar</v-btn>
                 <!-- <v-btn color="secondary" :index='{id}' @click="finalizada(tarea.titulo)">Tarea finalizada</v-btn>
                  <v-simple-checkbox
                    class="ml-3"
                    v-model="complet"
                    
                  ></v-simple-checkbox> <h4 class="mt-2">Finalizado</h4>-->
             </v-container>
            
            </v-card-text>
           
          </v-card>
        </v-flex>

      </v-layout>

         <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{mensaje}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
 </v-container>
  
</template>

<script>

  import perfil from "../views/Perfil.vue";
  export default {
    name: 'Home',
    data() {
      return {
        dialog: false,
        listaTareas: [
          {}
        ],
        titulo: '',
        description: '',
        snackbar: false,
        mensaje: 'Llena todos los campos',
        formAgregar: true,
        complet: false
      }
    },
    methods:{
      agregarTarea(){
        //console.log(this.titulo, this.description);
        if(this.titulo === '' || this.description === ''){
          this.snackbar = true
        }else{
          this.listaTareas.push({
            id: Date.now(),
            titulo: this.titulo,
            description: this.description
            })
            localStorage.setItem("Tareas", JSON.stringify(this.listaTareas));
            this.titulo = '',
            this.description = ''
            this.snackbar = true 
            this.mensaje = 'Tarea agregada!'
            this.formAgregar = true
        }
      },
      eliminar(id){
        this.listaTareas = this.listaTareas.filter(e => e.id !=id)
        this.snackbar = true 
        this.mensaje = 'Tarea ELiminada!'
        localStorage.setItem("Tareas", JSON.stringify(this.listaTareas));

      },
      editar(index){
        this.formAgregar = false
        this.titulo = this.listaTareas[index].titulo
        this.description = this.listaTareas[index].description
        this.snackbar = true 
        this.mensaje = 'Tarea Editada!'
      },
      finalizada(index){
        this.complet = true
      }
    },
    created(){
      let data = localStorage.getItem("Tareas");
      if (data != null) {
        this.listaTareas = JSON.parse(data);
      }
    }
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #182a3f;
}
</style>
