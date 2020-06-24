<template>
	<section id="home">
		<h1 class="font-exan big">I'm Nicholas Lee</h1>
		<h1 class="font-exan small">Full Stack Developer</h1>
		<p class="home">
			I'm a software developer, I love coding, playing games, and music
		</p>
	</section>
</template>

<style lang="scss" scoped>
#home {
	margin: 0;
	background-image: url("/images/background.jpg");
	background-repeat: no-repeat;
	background-position: center bottom;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	-o-background-size: cover;
	position: relative;
	padding: 50vh 0 50vh 0;
	text-align: center;

	.big {
		font-weight: bolder;
		font-size: 30px;
	}

	.small {
		font-weight: normal;
		font-size: 30px;
	}
}
</style>
