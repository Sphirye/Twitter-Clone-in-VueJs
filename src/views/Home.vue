<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="8" class="grey lighten-2">

        <v-col style="position: sticky; top: 0; z-index: 1;" cols="12" class="pa-0 white">
          <div class="pa-5">
            <span class="font-weight-bold">INICIO</span>
          </div>
          <v-divider/>
        </v-col>

        <div class="white mb-3">
          <div>
            <div class="d-flex mx-3">
              <div class="d-flex justify-center my-3" style="width: 10%;">
                <v-avatar class="success">
                  
                </v-avatar>
              </div>

              <div class="my-3" style="width: 90%;">
                <div>
                  <div style="width: 90%;" class="d-flex">
                    <v-textarea flat solo auto-grow rows="1" label="¿Que esta pasando?"></v-textarea>
                  </div>

                  <div class="d-flex">
                    <v-btn icon>
                      <v-icon color="info">mdi-image-outline</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon color="info">mdi-gif</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon color="info">mdi-chart-bar</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon color="info">mdi-face</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon color="info">mdi-calendar-clock</v-icon>
                    </v-btn>

                    <v-spacer/>
                    <v-btn rounded depressed class="info" style="text-transform: none;">
                      Tweet
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
            <v-divider/>
          </div>

        </div>

        <div v-for="(item, key) in Store.tweets" :key="key">
          <TweetComponent :tweet="item"/>
        </div>
      </v-col>

      <v-divider style="z-index: 1;" vertical/>

      <v-col cols="4">
        <div class="d-flex align-center justify-center">
          <v-text-field :value="XD" placeholder="Buscar en Twitter..." outlined rounded prepend-inner-icon="mdi-magnify" class="mt-3 mx-2">
            
          </v-text-field>
        </div>

        <TredingsComponent :tredings="tredings"/>

      </v-col>
    </v-row>
    
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import TweetComponent from '../components/TweetComponent.vue'
import TredingsComponent from "@/components/TredingsComponent.vue";
import Store from '@/assets/Store.json'

@Component({
  components: { TweetComponent, TredingsComponent }
})

export default class Home extends Vue {

  XD = ""
  tredings = Store.tredings
  Store = Store
}
</script>