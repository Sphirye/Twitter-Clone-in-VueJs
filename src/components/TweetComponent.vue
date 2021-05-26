<template>
  <div class="white">

	<div class="mb-1">
    	<div class="d-flex">

      <div class="my-2 ml-3">
        <v-avatar class="info"></v-avatar>
      </div>

      <div class="full-width">
        <div class="d-flex">

          <div class="d-flex align-center mx-2">
            <span class="mx-1 font-weight-bold">Username</span>
            <span class="text--secondary">@Usertag</span>
          </div>

          <v-spacer/>

          <v-btn icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>

        </div>

        <div>
          <p class="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate eligendi iusto sapiente deserunt laudantium sequi molestias, molestiae optio quisquam consequuntur fuga pariatur veniam, beatae dignissimos voluptatem aliquam ex quia.</p>
        </div>

      </div>
    	</div>

    	<v-divider/>
 
    	<div class="d-flex justify-space-around">
		<v-btn icon>
			<v-icon> mdi-message-outline </v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon> mdi-twitter-retweet </v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon> mdi-heart-outline </v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon> mdi-share </v-icon>
		</v-btn>
		</div>

		<v-divider/>
	</div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  components: { }
})

export default class TweetComponent extends Vue {

    @Prop() readonly tweet!: any

}
</script>