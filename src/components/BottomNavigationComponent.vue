<template>
    <v-bottom-navigation app fixed grow class="elevation-0 divider">
        <v-btn v-for="(button, key) in navIcons" icon :key="key">
            <v-icon> {{button.icon}} </v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {  },
})

export default class BottomNavigationComponent extends Vue{

    navIcons = [
		{ icon: "mdi-home", target: "/home" },
		{ icon: "mdi-magnify", target: "/home" },
		{ icon: "mdi-bell", target: "/home" },
		{ icon: "mdi-email-outline", target: "/home" },
	]

}

</script>

<style>
.divider {
    border-top: 1px solid black;
}
</style>