import VueDOMPurifyHTML from 'vue-dompurify-html';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(VueDOMPurifyHTML as any, {
		default: {
			ADD_ATTR: [ 'target' ] // 支援屬性
		}
	});
});
