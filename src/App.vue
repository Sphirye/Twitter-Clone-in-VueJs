<template>
  <v-app>

    <v-main class="grey lighten-2">

      <SiderbarComponent/>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import SiderbarComponent from "./components/SidebarComponent.vue"

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
