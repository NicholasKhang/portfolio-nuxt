<template>
	<section id="skills">
		<v-card>
			<v-card-title class="font-exan section">
				<h1>Skills</h1>
			</v-card-title>
		</v-card>
		<br />
		<div v-for="(skill, key1) in skills" :key="key1">
			<v-card>
				<v-card-title class="font-exan">
					<h1>{{ skill.name }}</h1>
				</v-card-title>
				<v-divider />
				<v-row class="mx-3" justify="start">
					<v-col
						v-for="(item, key2) in skill.items"
						:key="key2"
						class="pa-6 text-center"
						cols="6"
						md="2"
						sm="3"
						xs="4"
					>
						<v-img
							:src="'/images/skills/' + item.src"
							alt="item.name"
							max-height="135"
						/>
						<span>{{ item.name }}</span>
					</v-col>
				</v-row>
			</v-card>
			<br />
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			skills: {
				html: {
					name: "HTML",
					items: [
						{
							name: "HTML5",
							src: "html5.png"
						},
						{
							name: "JSX",
							src: "react.png"
						},
						{
							name: "Jade",
							src: "jade.png"
						},
						{
							name: "Pug",
							src: "pug.png"
						}
					]
				},
				css: {
					name: "CSS",
					items: [
						{
							name: "CSS3",
							src: "css3.png"
						},
						{
							name: "SASS",
							src: "sass.png"
						},
						{
							name: "Bootstrap",
							src: "bootstrap.png"
						},
						{
							name: "Vuetify",
							src: "vuetify-logo.svg"
						},
						{
							name: "Adminlte",
							src: "adminlte.png"
						},
						{
							name: "Reactstrap",
							src: "reactstrap.png"
						},
						{
							name: "CoreUI",
							src: "coreui.png"
						}
					]
				},
				javascript: {
					name: "Javascript",
					items: [
						{
							name: "Javascript",
							src: "javascript.png"
						},
						{
							name: "Node",
							src: "nodejs.png"
						},
						{
							name: "jQuery",
							src: "jquery.png"
						},
						{
							name: "Angular1",
							src: "angular.png"
						},
						{
							name: "Vue",
							src: "vuejs.png"
						},
						{
							name: "React",
							src: "react.png"
						},
						{
							name: "Socket.io",
							src: "socketio.png"
						},
						{
							name: "ExpressJs",
							src: "expressjs.png"
						},
						{
							name: "Nuxt",
							src: "nuxt.svg"
						}
					]
				},
				backend: {
					name: "Back-End",
					items: [
						{
							name: "PHP",
							src: "php.png"
						},
						{
							name: "Yii2",
							src: "yii.png"
						},
						{
							name: "MySQL",
							src: "mysql.png"
						},
						{
							name: "API",
							src: "restapi.png"
						}
					]
				},
				others: {
					name: "Others",
					items: [
						{
							name: "Github",
							src: "github.png"
						},
						{
							name: "npm",
							src: "npm.png"
						},
						{
							name: "composer",
							src: "composer.png"
						},
						{
							name: "VBA",
							src: "vba.png"
						}
					]
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.v-card__title.section {
	background-color: #041b2b;
	border-top: medium ridge #a2f7f6;
	border-bottom: medium ridge #a2f7f6;
}
</style>
