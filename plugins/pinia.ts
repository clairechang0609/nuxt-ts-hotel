import { Pinia } from 'pinia';
import { useMainStore } from '@/store';

export default defineNuxtPlugin(app => {
	const pinia = app.$pinia as Pinia;
	return {
		provide: {
			store: useMainStore(pinia)
		}
	};
});
