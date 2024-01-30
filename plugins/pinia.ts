import type { Pinia } from 'pinia';
import { useMainStore } from '@/store';
import { useBookingStore } from '@/store/booking';

export default defineNuxtPlugin(app => {
	const pinia = app.$pinia as Pinia;
	return {
		provide: {
			store: useMainStore(pinia),
			bookingStore: useBookingStore(pinia)
		}
	};
});
