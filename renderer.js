
function calculateLayoutSize() {
	const webview = document.querySelector('webview');
	const windowWidth = document.documentElement.clientWidth;
	const windowHeight = document.documentElement.clientHeight;

	webview.style.width = windowWidth + 'px';
	webview.style.height = windowHeight + 'px';
}

window.addEventListener('load', () => {
	calculateLayoutSize();
});

window.addEventListener('resize', () => {
	calculateLayoutSize();
});
