export const useMainStore = defineStore('main', () => {
	// TODO: 等串接
	const user = ref({
		name: '',
		id: ''
	});

	return {
		user
	};
}, {
	persist: {
		storage: persistedState.localStorage
	}
});
