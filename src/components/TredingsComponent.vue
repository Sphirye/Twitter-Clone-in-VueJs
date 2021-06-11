<template>
    <div class="d-flex align-center justify-center">

      <v-card class="grey lighten-3 mx-5" width="100%" rounded="xl" flat>

        <v-card-title>
          <span>Tendencias para ti</span>
          <v-spacer/>
          <v-btn icon>
            <v-icon color="blue">mdi-cog-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider/>

        <div v-for="(treding, key) in tredings" :key="key">
          <v-list-item three-line>
            <v-list-item-content>
                  <v-list-item-subtitle>Tendencia en {{treding.location}}</v-list-item-subtitle>
                  <v-list-item-title class="font-weight-bold">{{treding.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{treding.tweets}} tweets</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                  <v-btn icon>
                    <v-icon> mdi-dots-horizontal </v-icon>
                  </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider/>
        </div>

        <v-card-actions>
          <v-btn text class="text-none">
            <span class="blue--text">Mostrar más</span>
          </v-btn>
        </v-card-actions>
      </v-card>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  components: { }
})

export default class TredingsComponent extends Vue {

    @Prop() readonly tredings!: any

}
</script>