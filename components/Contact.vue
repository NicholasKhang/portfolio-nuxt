<template>
	<section id="contact">
		<v-card>
			<v-card-title class="font-exan section">
				<h1>Contact</h1>
			</v-card-title>
			<v-container>
				<v-row class="font-exan text-center">
					<v-col>
						<h2>Feel free to contact me</h2>
					</v-col>
				</v-row>
				<v-row class="text-center">
					<v-col
						><a href="mailto:nicholaskhang87@gmail.com">
							<v-progress-circular
								size="200"
								value="100"
								color="grey"
								width="5"
							>
								<h2 class="hello">Say Hello</h2>
							</v-progress-circular>
						</a>
					</v-col>
				</v-row>
				<v-list class="text-center">
					<li class="ma-3">
						<a href="mailto:nicholaskhang87@gmail.com">
							<v-icon>mdi-email</v-icon>
							<span>Email: nicholaskhang87@gmail.com</span>
						</a>
					</li>
					<li class="ma-3">
						<a
							href="https://nicholaskhang.github.io"
							target="_blank"
						>
							<v-icon>mdi-web</v-icon>
							<span>Website</span>
						</a>
					</li>
					<li class="ma-3">
							<a href="https://facebook.com/nicholas.lee.372" target="_blank">
							<v-icon>mdi-facebook</v-icon>
							<span>Facebook</span>
						</a>
					</li>
				</v-list>
			</v-container>
		</v-card>
	</section>
</template>

<style lang="scss" scoped>
.v-card__title.section {
	background-color: #041b2b;
	border-top: medium ridge #a2f7f6;
	border-bottom: medium ridge #a2f7f6;
}

h2 {
	font-weight: normal;
}

h2.hello {
	color: white;
	font-size: 45px;
}

a {
	color: #a2f7f6;
	text-decoration: none;
}

a:hover {
	color: #aef9f8;
	text-shadow: 1px 0px 20px #f2fcfc;
}
</style>
