<template>
<v-hover>
	<div slot-scope="{ hover }" :class="`${hover? 'grey lighten-4' : 'white'}`">
		<!--@click="$router.push(`${user.tag}/status/${tweet.id}`)"-->
		<div class="pt-2">
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

						<v-menu offset-y>
							<template v-slot:activator="{ on, attrs }">
								<v-btn class="mx-5" v-bind="attrs" v-on="on" small icon>
									<v-icon> mdi-dots-horizontal </v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item v-for="(item, key) in menuList" :key="key">
									<v-list-item-title> <v-icon>{{item.icon}}</v-icon><span class="mx-2">{{item.body}}</span></v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>

					</div>

					<div style="width: 90%;">
						<p class="mx-3">{{tweet.body}}</p>
					</div>

				</div>
			</div>

			<div class="d-flex justify-space-around">
				<div v-for="(item, key) in tweetButtons" :key="key">
					<v-hover>
						<v-btn icon slot-scope="{ hover }">
								<v-icon :color="`${hover? item.onHoverColor : ''}`"> {{item.icon}} </v-icon>
						</v-btn>
					</v-hover>
				</div>
			</div>

			<v-divider/>
		</div>

	</div>
</v-hover>
</template>

<script lang="ts">
import { Tweet } from "@/model/Tweet"
import UserService from "@/services/UserService"
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  components: { }
})

export default class TweetComponent extends Vue {

    @Prop() readonly tweet!: Tweet

	user: any = undefined
	
	tweetButtons: any = [
		{ icon: "mdi-message-outline", onHoverColor: "blue" },
		{ icon: "mdi-twitter-retweet", onHoverColor: "green" },
		{ icon: "mdi-heart-outline", onHoverColor: "red" },
		{ icon: "mdi-share", onHoverColor: "blue" },
		{ icon: "mdi-chart-bar", onHoverColor: "blue"}
	]

	menuList: any = []

    async created() {
		await UserService.findById(this, this.tweet.userId!)
		if (this.user != undefined) { this.setMenuList() }
	}
	
	setMenuList() {
		this.menuList = [
			{ body: `Not interesed in this tweet`, icon: `mdi-emoticon-sad-outline` },
			{ body: `Follow @${this.user.tag}`, icon: `mdi-account-plus-outline` },
			{ body: `Add/remove @${this.user.tag} from Lists`, icon: `mdi-card-plus-outline` },
			{ body: `Mute @${this.user.tag}`, icon: `mdi-volume-variant-off` },
			{ body: `Block @${this.user.tag}`, icon: `mdi-circle-off-outline` },
			{ body: `Embed Tweet`, icon: `mdi-code-tags` },
			{ body: `Report Tweet`, icon: `mdi-flag-outline` }
		]

	}
}
</script>