<template>
    <v-container fluid class="pa-0 ma-0">
        <v-row no-gutters>
            <v-col cols="12" md="8" v-if="(user != null) && (user != undefined)">
                <v-row no-gutters class="white" style="position: sticky; top: 0; z-index: 1;">
                    <v-col cols="12">
                        <div class="d-flex align-center mx-3 my-1">
                            <v-btn icon x-large @click="$router.go(-1)">
                                <v-icon color="blue"> mdi-arrow-left </v-icon>
                            </v-btn>
                            
                            <div class="d-flex flex-column mx-5">
                                <span class="font-weight-bold text-h6">{{user.username}}</span>
                                <span class="text--secondary">10 tweets</span>
                            </div>

                        </div>
                        <v-divider/>
                    </v-col>
                </v-row>

                <v-row no-gutters class="ma-0">
                        <v-img class="info" width="100%" height="250px"></v-img>
                </v-row>

                <v-row no-gutters>
                    <div class="d-flex align-center full-width">
                        <v-avatar size="180px" style="margin-top: -90px; border: 3px solid white;" class="mx-5" rounded="50%">
                            <v-img :src="require(`@/assets/data/images/${user.profilePhoto}`)" class="info"/>
                        </v-avatar>
                        
                        <v-spacer/>

                        <v-btn rounded class="mx-5 my-auto" outlined color="blue">
                            Editar perfil
                        </v-btn>
                    </div>
                </v-row>

                <v-row no-gutters>
                    <div class="full-width mx-8">
                        <div class="d-flex flex-column">
                            <span class="font-weight-black text-h5">{{user.username}}</span>
                            <span class="text--secondary">@{{user.tag}}</span>
                        </div>

                        <div class="mt-2">
                            <p>{{user.bio}}</p>
                        </div>

                        <div>
                            <div class="d-flex">
                                <span><v-icon>mdi-map-marker</v-icon>desaparecido en accion</span>
                                <span class="mx-5"><v-icon>mdi-link-variant</v-icon>trucoteca.com</span>
                            </div>

                            <div class="d-flex">
                                <span><v-icon>mdi-balloon</v-icon>Fecha de nacimiento: 00/00/0000</span>
                                <span class="mx-5"><v-icon>mdi-calendar-month-outline</v-icon>Se unió en Junio de 2019</span>
                            </div>
                        </div>
                    </div>
                </v-row>

                <v-row no-gutters>
                    <v-tabs v-model="tab" centered>

                        <v-tab v-for="(tab, key) in tabs" :key="key">
                                {{tab.title}}
                        </v-tab>
                        

                        <v-tabs-items v-model="tab">

                            <v-divider/>

                            <v-tab-item>
                                <div v-for="(tweet, key) in tweets" :key="key">
                                    <TweetComponent :tweet="tweet"/>
                                </div>
                            </v-tab-item>

                            <v-tab-item>
                                reply
                            </v-tab-item>

                            <v-tab-item>
                                media
                            </v-tab-item>

                            <v-tab-item>
                                likes
                            </v-tab-item>

                        </v-tabs-items>
                    </v-tabs>
                    <v-divider/>
                </v-row>
            </v-col>

            <v-col cols="12" md="8" v-if="(user == null)">
                <v-row no-gutters class="white" style="position: sticky; top: 0; z-index: 1;">
                    <v-col cols="12">
                        <div class="d-flex align-center mx-3 my-1">
                            <v-btn icon x-large>
                                <v-icon color="blue"> mdi-arrow-left </v-icon>
                            </v-btn>
                            
                            <div class="d-flex flex-column mx-5">
                                <span class="font-weight-bold text-h6">Perfil</span>
                            </div>

                        </div>
                        <v-divider/>
                    </v-col>
                </v-row>

                <v-row no-gutters class="ma-0">
                        <v-img class="info" width="100%" height="250px"></v-img>
                </v-row>

                <v-row no-gutters>
                    <div class="d-flex align-center full-width">
                        <v-avatar size="180px" style="margin-top: -90px; border: 3px solid white;" class="mx-5" rounded="50%">
                            <v-img class="info"/>
                        </v-avatar>
                    </div>
                </v-row>

                <v-row no-gutters>
                    <div class="full-width mx-8">
                        <div class="d-flex flex-column">
                            <span class="font-weight-black text-h5">@{{$route.params.userTag}}</span>
                        </div>
                    </div>
                </v-row>

                <v-divider class="my-3"/>
                
                <v-row no-gutters>
                    <div class="full-width text-center d-flex flex-column">
                        <span class="font-weight-black text-h5">Esta cuenta no existe.</span>
                        <span class="text--secondary">Intenta hacer otra busqueda.</span>
                    </div>
                </v-row>
            </v-col>

            <v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">
                <div>XD</div>
                lol
            </v-col>
        </v-row>

    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import UserService from "@/services/UserService"
import TweetService from "@/services/TweetService"

import { User } from "@/model/User"
import TweetComponent from "@/components/TweetComponent.vue"
import { Tweet } from "@/model/Tweet"

@Component({
  components: { TweetComponent }
})

export default class ProfileUser extends Vue {

    tab: any = null
    user: User | undefined = undefined
    tweets: Tweet[] = []

    tabs: any = {
        "tweets": { title: "Tweets" },
        "replys": { title: "Tweets y respuestas" },
        "media": { title: "Fotos y videos" },
        "likes": { title: "Me gusta" }
    }

    created() {
        UserService.findByUserTag(this, this.$route.params.userTag).then(() => { })

        if (this.user != undefined) { TweetService.findTweetsByUserId(this, this.user.id!) }
        else { console.log("User does not exists.") }

    }



    @Watch('user', { immediate: true })
    onUserChanged () {

        /*if (this.user == undefined) {
            console.log("User does not exists.")
        }*/


        /*if ((this.user != undefined) && (this.user != null)) {
            TweetService.findTweetsByUserId(this, this.user.id!)
        }*/
    }


}
</script>