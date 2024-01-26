export default defineNuxtRouteMiddleware(to => {
	// Guideline 頁僅限開發環境
	if (to.fullPath === '/guideline' && process.env.NODE_ENV !== 'development') {
		return showError({
			statusCode: 404,
			message: '找不到頁面'
		});
	}
});
