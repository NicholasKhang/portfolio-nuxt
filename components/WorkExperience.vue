<template>
	<section id="experience">
		<v-card>
			<v-card-title class="font-exan section">
				<h1>Experience</h1>
			</v-card-title>
			<v-timeline dense>
				<v-timeline-item
					v-for="(exp, key) in experience"
					:key="key"
					class="pr-md-6 pr-sm-3 pr-3"
				>
					<v-card>
						<v-card-title class="bgDrawer">
							{{ exp.year }}
						</v-card-title>
						<v-container>
							<v-row>
								<v-col>
									<h3 class="font-exan">{{ exp.company }}</h3>
									<h4 class="font-exan">
										{{ exp.jobTitle }}
									</h4>
								</v-col>
							</v-row>
							<v-row>
								<v-col><span>Responsibilities:</span></v-col>
							</v-row>
							<v-row>
								<v-col>
								<ul>
									<li
										v-for="(item,
										key) in exp.responsibilities"
										:key="key"
									>
										{{ item }}
									</li>
								</ul>
								</v-col>
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
			experience: [
				{
					year: "2022 - NOW",
					company: "Stampede Solution Sdn Bhd",
					jobTitle: "Manager, Software Development (Department Head)",
					responsibilities: [
						"Managing projects for different clients",
						"Provide technical solution to internal or external parties",
						"Managing resources for development team (around 30 people)",
						"Mentoring, training and education to team members",
						"Define coding standards and best practices",
						"Decision maker for technical direction",
						"Conduct code review and quality control on the source code",
						"Development stacks: PHP, Laravel, NodeJs, VueJs, MySQL, Npm, Github, Linux, AWS"
					]
				},
				{
					year: "2021 - 2022",
					company: "Fourtitude Asia Sdn Bhd",
					jobTitle: "Head of PHP",
					responsibilities: [
						"Managing all projects for PHP team",
						"Scoping and RFP for new project",
						"As solution architect for PHP projects",
						"Managing resources for PHP team (20+ people)",
						"Mentoring, training and education to team members",
						"Develop libraries or plugins for internal used",
						"Development stacks: PHP, Laravel, Workpress, Drupal, NodeJs, VueJs, MySQL, Npm, Github, Linux, AWS"
					]
				},
				{
					year: "2019 - 2021",
					company: "Pentajeu Sdn Bhd",
					jobTitle: "Software Engineer",
					responsibilities: [
						"Maintenance of in-house application.",
						"Develop new web application (both front-end and back-end).",
						"Planning and design application architecture.",
						"Optimize performance of application and database query.",
						"Development stacks: PHP, Yii2, AngularJs ReactJs, NodeJs, MySQL, Npm, Github, Linux, AWS"
					]
				},
				{
					year: "2019",
					company: "Xeersoft Sdn Bhd",
					jobTitle: "Software Developer",
					responsibilities: [
						"Switch from accountant to software developer.",
						"Internship convert to permenant.",
						"Maintaining ERP core system (web-based) based on clients requirements.",
						"Debug system errors.",
						"System design for new requirements.",
						"Development stacks: HTML, PHP, MySQL, Javascript."
					]
				},
				{
					year: "2005 - 2019",
					company: "Accounting",
					responsibilities: [
						"14 years experience in accounting.",
						"Last position: Accounts Manager",
						"Last Company: Berjaya Hotels & Resorts",
						"Full set accounts.",
						"Management team."
					]
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
