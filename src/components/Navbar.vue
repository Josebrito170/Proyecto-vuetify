<template>
  <nav>
      
       <v-app-bar
      app
      color="indigo"
      class="white--text"
      light>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span ><h1>HolaMundo!</h1></span>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2 white--text">Cerrar sesión</span>
        <v-icon color="white">fas fa-address-book</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      temporary color="indigo">

    <v-layout column align-center mt-5>
        <v-flex >
           <v-avatar
           color="primary"
            size="56"
        > <img src="https://www.lacasadeel.net/wp-content/uploads/2021/10/julen-urrutia-batcueva-2.jpeg" alt=""></v-avatar>
        </v-flex>
        <v-flex>
            <p class="white--text mt-4">Usuario</p>
        </v-flex>
    </v-layout>
    
    <v-divider></v-divider>

    <v-list
          dense
          rounded
        >
          <v-list-item
            link v-for="(item, index) in items" :key="index"
          :to="item.to">
            <v-list-item-icon>
              <v-icon class="white--text">{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

           
        </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import Perfil from '../views/Perfil'
export default {
    data() {
        return {
            drawer: true,
            items: [
          { title: 'inicio', icon: 'fas fa-bars', to:{name: 'Home'} },
          { title: 'Account', icon: 'fas fa-address-card',to:{name: 'ingreso'} },
          { title: 'Admin', icon: 'fas fa-user', to:{name: 'perfil'} },
        ]
        }
    },
}
</script>

<style>

</style>