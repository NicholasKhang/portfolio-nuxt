export default function (to, from, savedPosition) {
	if (to.hash == "#home") {
		return window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	if (to.hash) {
		return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
	}

	return window.scrollTo({ top: 0, behavior: 'smooth' });
}