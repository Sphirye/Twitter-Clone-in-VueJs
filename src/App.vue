<template>
  <v-app>
      <BottomNavigationComponent class="d-flex d-sm-none"/>
      <NavigationDrawerComponent/>
    <v-main>
      


      <router-view/>


    </v-main>
    

  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import NavigationDrawerComponent from "./components/NavigationDrawerComponent.vue"
import BottomNavigationComponent from "./components/BottomNavigationComponent.vue"

import UserService from "@/services/UserService"

@Component({
  components: { NavigationDrawerComponent, BottomNavigationComponent }
})

export default class App extends Vue {
    
}
</script>

<style>
.ps {
    height: 800px;
}

.full-width{
  width: 100%;
}

.full-height{
  height: 100%;
}

</style>


<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>