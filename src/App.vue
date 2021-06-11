<template>
  <v-app>

    <v-main>

      <NavigationDrawerComponent/>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavigationDrawerComponent from "./components/NavigationDrawerComponent.vue"
import UserService from "@/services/UserService"

@Component({
  components: { NavigationDrawerComponent }
})

export default class App extends Vue {
}
</script>

<style>
.full-width{
  width: 100%;
}

.full-height{
  height: 100%;
}

</style>
