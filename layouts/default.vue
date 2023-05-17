<template>
	<v-app dark>
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant="miniVariant"
			:clipped="clipped"
			fixed
			app
			width="200px"
			color="bgDrawer"
		>
			<v-list>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="font-exan">
							<h1>
								Nicholas <br />
								Lee
							</h1>
						</v-list-item-title>
						<v-list-item-subtitle class="font-exan">
							Full Stack Developer
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar
			:clipped-left="clipped"
			fixed
			app
			:hidden="hiddenAppBar"
			:height="heightAppBar"
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />

			<v-toolbar-title v-text="title" />
			<v-spacer />
		</v-app-bar>
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<!-- <v-footer :absolute="!fixed" app>
			<span>&copy; {{ new Date().getFullYear() }} Nicholas Lee</span>
		</v-footer> -->
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			clipped: false,
			drawer: null,
			fixed: true,
			items: [
				{
					icon: "mdi-home",
					title: "Home",
					to: "/#home"
				},
				{
					icon: "mdi-account",
					title: "About Me",
					to: "/#about"
				},
				{
					icon: "mdi-card-account-details",
					title: "Portolio",
					to: "/#portfolio"
				},
				{
					icon: "mdi-flask",
					title: "Skills",
					to: "/#skills"
				},
				{
					icon: "mdi-briefcase",
					title: "Experience",
					to: "/#experience"
				},
				{
					icon: "mdi-school",
					title: "Education",
					to: "/#education"
				},
				{
					icon: "mdi-phone",
					title: "Contact",
					to: "/#contact"
				},
				{
					icon: "mdi-card-text",
					title: "Blog",
					to: "/my-blog/"
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "NIC"
		};
	},

	computed: {
		hiddenAppBar() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					this.drawer = false;
					return false;
				case "sm":
					this.drawer = false;
					return false;
				case "md":
					this.drawer = true;
					return true;
				case "lg":
					this.drawer = true;
					return true;
				case "xl":
					this.drawer = true;
					return true;
			}
		},
		heightAppBar() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "64px";
				case "sm":
					return "64px";
				case "md":
					return "0";
				case "lg":
					return "0";
				case "xl":
					return "0";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	padding: 0;
}
</style>
