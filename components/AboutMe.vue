<template>
	<section id="about">
		<v-card>
			<v-card-title class="font-exan">
				<h1>About Me</h1>
			</v-card-title>

			<v-col class="px-6">
				<h2>Hello, My name is Nicholas Lee</h2>
				<br />
				<p>
					I was born and grew up in Kuala Lumpur, Malaysia. I am a
					software developer with set of modern web application
					development skills.
				</p>
				<p>
					You may wonder, I was an 14-years experienced accountant in
					various industry such as hospitality, food and beverage,
					retail and trading. I decided to make a move from comfort
					zone to change my profession from an accountant to a
					software engineer. It was not an easy path, however, I made
					this without any regret.
				</p>
				<br />
				
				<h3><u>WHY NOT ACCOUNTING ?</u></h3>
				<p>
					I love Mathematics, and this is my strength, that's why I
					started my path from accounting. Accounting is good, it pay
					for my family and my life. But I feel that I can do more
					with my strength, I wish to create something that can help
					others.
				</p>
				<br />

				<h3><u>WHY PROGRAMMING ?</u></h3>
				<p>
					I love coding and self-learn programming on my own. I love
					to spend my time on doing research to explore the
					technologies in this world. I hope that one day I could
					contribute to the world to create future with my skills and
					knowledges.
				</p>
				<br />

				<h3><u>HOW DO I MADE IT ?</u></h3>
				<p>
					It's all about the passion. I read a lot of articles related
					to programming everyday to keep on learning. Just pick a
					programming language, start a project and start coding, it
					doesn't matter if it is just a "Hello World" program.
					Everyone is start from here, if you don't start, you will
					never learn. I am an accountant, I can do it, I know you can
					do it too!
				</p>
			</v-col>

			<v-row class="mx-3">
				<v-col>
					<h4 class="about">CONTACT DETAILS</h4>
					<v-list>
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
						<v-btn>
							<a
								href="/pdf/Resume - Nicholas.pdf"
								download
								target="_blank"
							>
								<v-icon>mdi-link-variant</v-icon>
								<span><i>Download Resume</i></span>
							</a>
						</v-btn>
					</v-list>
				</v-col>
				<v-col>
					<v-img
						src="/images/profile-picture.jpg"
						alt="Profile Picture"
					></v-img>
				</v-col>
			</v-row>
		</v-card>
	</section>
</template>

<style lang="scss" scoped>
.v-card__title {
	background-color: #041b2b;
	border-top: medium ridge #a2f7f6;
	border-bottom: medium ridge #a2f7f6;
}

p,
i {
	text-shadow: 0px 0px 0px;
}

a {
	color: #a2f7f6;
	text-shadow: 0px 0px 0px;
	text-decoration: none;
}

a:hover {
	color: #aef9f8;
	text-shadow: 1px 0px 20px #f2fcfc;
}
</style>
