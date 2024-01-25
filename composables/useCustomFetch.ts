import type { UseFetchOptions } from '#app';
import { defu } from 'defu';
import type { UseFetchResponse } from '@/types/fetch';

export async function useCustomFetch<T>(url: string, options?: UseFetchOptions<UseFetchResponse<T>>) {
	const config = useRuntimeConfig();
	const token = useCookie('token');
	const { $notify } = useNuxtApp();
	const isLoading = useLoading();

	const defaults: UseFetchOptions<UseFetchResponse<T>> = {
		baseURL: config.public.apiBase as string,
		key: url,
		headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},
		onRequestError() {
			if (process.client) {
				$notify({
					type: 'danger',
					text: '系統異常'
				});
			}
		},
		onResponseError({ response }) {
			if (process.client) {
				$notify({
					type: 'danger',
					text: response._data?.message
				});
			}
			setTimeout(() => {
				if (response.status === 403) {
					navigateTo('/login');
				}
			}, 2000);
		}
	};

	const params = defu(options, defaults);

	isLoading.value++;

	const { data: response, refresh } = await useFetch(url, params);

	if (isLoading.value > 0) {
		isLoading.value--;
	}

	return { response, refresh };
}
