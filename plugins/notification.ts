import Notifications, { useNotification } from '@kyvg/vue3-notification';
const { notify } = useNotification();

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Notifications as any);
	return {
		provide: {
			notify
		}
	};
});
