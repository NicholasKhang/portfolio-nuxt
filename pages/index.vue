<template>
	<div>
		<home />
		<about-me />
		<portfolio />
		<skills />
		<work-experience />
		<education />
		<contact />
	</div>
</template>

<script>
import Home from '~/components/Home.vue'
import AboutMe from '~/components/AboutMe.vue'
import Portfolio from '~/components/Portfolio.vue'
import Skills from '~/components/Skills.vue'
import WorkExperience from '~/components/WorkExperience.vue'
import Education from '~/components/Education.vue'
import Contact from '~/components/Contact.vue'

export default {
	components: {
		Home,
		AboutMe,
		Portfolio,
		Skills,
		WorkExperience,
		Education,
		Contact,
	}
};
</script>

<style lang="scss" scoped>
section {
	margin: 12px;
}

.v-card__title {
	background-color: #041b2b;
	border-top: medium ridge #a2f7f6;
	border-bottom: medium ridge #a2f7f6;
}
</style>
