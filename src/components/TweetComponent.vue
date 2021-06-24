<template>
<div class="white">
	<div>
		<div class="d-flex">

			<div class="my-2 ml-6">
				<router-link class="text-decoration-none" :to="user.tag">
					<v-avatar class="info">
						<v-img :src="require(`@/assets/data/images/${user.profilePhoto}`)"></v-img>
					</v-avatar>
				</router-link>
			</div>

			<div class="full-width mt-2">
				<div class="d-flex">
					<div class="d-flex align-center mx-2">
						<router-link class="text-decoration-none" :to="user.tag">
							<span class="mx-1 font-weight-bold grey--text text--darken-4">{{user.username}}</span>
							<span class="text--secondary">@{{user.tag}}</span>
						</router-link>
					</div>	

					<v-spacer/>	

					<v-btn class="mx-5" small icon>
						<v-icon> mdi-dots-horizontal </v-icon>
					</v-btn>

				</div>

				<div style="width: 90%;">
					<p class="mx-3">{{tweet.body}}</p>
				</div>

			</div>
		</div>

	
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
import { Tweet } from "@/model/Tweet"
import UserService from "@/services/UserService"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  components: { }
})

export default class TweetComponent extends Vue {

    @Prop() readonly tweet!: Tweet

    user: any = undefined

    created() {
      UserService.findById(this, this.tweet.userId!)
    }

}
</script>