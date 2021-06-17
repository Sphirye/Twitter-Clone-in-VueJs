<template>
    <v-navigation-drawer :permanent="$vuetify.breakpoint.width > 500" app width="100px">
        <v-layout column fill-height>
            <v-list dense>

                <v-list-item class="d-flex justify-center">
                    <v-btn icon x-large>
                        <v-icon class="mdi-36px blue--text">mdi-twitter</v-icon>
                    </v-btn>
                </v-list-item>

                <v-list-item v-for="(button, key) in navIcons" class="ma-1 d-flex justify-center" :key="key">
                    <router-link class="text-decoration-none" :to="`${button.target}`">
                        <v-btn icon large>
                            <v-icon>{{button.icon}}</v-icon>
                        </v-btn>
                    </router-link>
                </v-list-item>

                <v-list-item class="ma-1 d-flex justify-center">
                    <v-btn icon class="pa-7 blue">
                        <v-icon color="white">mdi-feather</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"

@Component({
  components: {  },
})

export default class SidebarComponent extends Vue{

    navIcons = [
		{ icon: "mdi-home", target: "/home" },
		{ icon: "mdi-pound", target: "/home" },
		{ icon: "mdi-bell", target: "/home" },
		{ icon: "mdi-email-outline", target: "/home" },
		{ icon: "mdi-account-outline", target: "/NiggaSoda" },
		{ icon: "mdi-dots-horizontal-circle-outline", target: "/home" },
	]
}

</script>