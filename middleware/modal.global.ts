export default defineNuxtRouteMiddleware((_to, _from) => {
	// 以下先手動加，bootstrap 的 bug 正在修復中
	// https://github.com/twbs/bootstrap/issues/35934
	if (process.client) {
		document.body.removeAttribute('style');
		document.body.classList.remove('modal-open');
	}
});
