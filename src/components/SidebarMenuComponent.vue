<template>
    <v-navigation-drawer permanent stateless app width="100px" class="grey-margin-right">
        <v-layout column fill-height>
            <v-list dense>

                <v-list-item class="d-flex justify-center">
                    <v-btn icon x-large>
                        <v-icon class="mdi-36px blue--text">mdi-twitter</v-icon>
                    </v-btn>
                </v-list-item>
                
                <v-list-item v-for="(button, key) in sidebarIcons" class="ma-1 d-flex justify-center" :key="key">
                    <router-link class="text-decoration-none" :to="`${button.target}`">
                        <v-btn icon large>
                            <v-icon>{{button.icon}}</v-icon>
                        </v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {  },
})

export default class SidebarComponent extends Vue{
    sidebarIcons = [
		{ icon: "mdi-home", target: "/home" },
		{ icon: "mdi-pound", target: "/home" },
		{ icon: "mdi-bell", target: "/home" },
		{ icon: "mdi-email-outline", target: "/home" },
		{ icon: "mdi-account-outline", target: "/NiggaSoda" },
		{ icon: "mdi-dots-horizontal-circle-outline", target: "/home" },
	]
}

</script>

<style>
.grey-margin-right{
    border-right: 1px solid #c2c2c2;
}
</style>