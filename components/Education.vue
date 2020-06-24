<template>
	<section id="education">
		<v-card>
			<v-card-title class="font-exan section">
				<h1>Education</h1>
			</v-card-title>
			<v-timeline dense>
				<v-timeline-item
					v-for="(edu, key) in education"
					:key="key"
					class="pr-md-6 pr-sm-3 pr-3"
				>
					<v-card>
						<v-card-title class="bgDrawer">
							{{ edu.year }}
						</v-card-title>
						<v-container>
							<v-row>
								<v-col>
									<h3 class="font-exan">{{ edu.school }}</h3>
									<h4 class="font-exan">
										{{ edu.certification }}
									</h4>
								</v-col>
							</v-row>
							<v-row v-if="edu.major">
								<v-col><span>Major: {{edu.major}}</span></v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>
			</v-timeline>
		</v-card>
	</section>
</template>

<script>
export default {
	data() {
		return {
			education: [
				{
					year: "2016 - 2020",
					school: "Wawasan Open University",
					certification: "Bachelor Degree in Technologies",
					major: "Software Engineering"
				},
				{
					year: "2003 - 2004",
					school: "Kolej Bandar",
					certification: "LCCI Diploma",
					major: "Accounting"
				},
				{
					year: "1999 - 2004",
					school: "SMK Menjalara",
					certification: "SPM"
				}
			]
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

li {
	text-shadow: 0px 0px 0px;
}
</style>
