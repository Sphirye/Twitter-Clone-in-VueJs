<template>
  <v-app>

    <v-main>

      <SiderbarMenuComponent/>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import SiderbarMenuComponent from "./components/SidebarMenuComponent.vue"
import UserService from "@/services/UserService"

@Component({
  components: { SiderbarMenuComponent }
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
