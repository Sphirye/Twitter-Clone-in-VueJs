<template>
  <div class="grey lighten-2">
    <div v-for="(item, key) in Store.tweets" :key="key">
      <TweetComponent :tweet="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import TweetComponent from '../components/TweetComponent.vue'
import Store from '@/assets/Store.json'

@Component({
  components: { TweetComponent }
})

export default class Home extends Vue {
  Store = Store
}
</script>
