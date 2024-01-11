export default () => {
	const config = useRuntimeConfig();
	const { $notify } = useNuxtApp();
	const router = useRouter();

	// 參數選項：https://nuxt.com/docs/api/composables/use-fetch#params
	const fetchData = async function({ url }) {
		try {
			// const isLoading = useLoading();
			// isLoading.value = true;

			let returnVal = null;

			await $fetch(url, {
				baseURL: config.public.apiBase,
				...arguments[0],
				onRequestError({ _request, _options, _error }) {
					$notify({
						type: 'danger',
						text: '系統異常'
					});
				},
				onResponse({ _request, response, _options }) {
					returnVal = response._data;
				},
				onResponseError({ _request, response, _options }) {
					$notify({
						type: 'danger',
						text: response._data?.message
					});

					setTimeout(() => {
						if (response.status === 403) {
							router.push('/login');
						}
					}, 3000);
				}
			});

			// isLoading.value = false;

			return returnVal;
		} catch (err) {
			console.log(err.message);
		}
	};

	return {
		fetchData
	};
};
