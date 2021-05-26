<template>
  <v-app>

    <v-main>

      <SiderbarComponent/>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import SiderbarComponent from "./components/SidebarComponent.vue"
import UserService from "@/services/UserService"

@Component({
  components: { SiderbarComponent }
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
