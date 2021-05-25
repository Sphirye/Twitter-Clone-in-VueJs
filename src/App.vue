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
import XD from './assets/blocked.json'

@Component({
  components: { SiderbarComponent }
})

export default class App extends Vue {

  created() {
    console.log(XD)
  }

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
