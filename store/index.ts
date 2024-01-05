import { type User } from '@/types/user';

const initialState = {
	name: '',
	id: ''
};

export const useMainStore = defineStore('main', () => {
	const user = reactive({ ...initialState });

	const setUser = (info: User) => {
		Object.assign(user, info);
	};

	const reset = () => {
		Object.assign(user, initialState);
	};

	return {
		user,
		reset,
		setUser
	};
}, {
	persist: {
		storage: persistedState.localStorage
	}
});
