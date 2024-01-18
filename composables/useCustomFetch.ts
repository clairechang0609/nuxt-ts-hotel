import type { UseFetchOptions } from '#app';
import { defu } from 'defu';

interface UseFetchResponse<K> {
	status: boolean,
	token?: string,
	result: K
}

export async function useCustomFetch<T>(url: string, options?: UseFetchOptions<UseFetchResponse<T>>) {
	const config = useRuntimeConfig();
	const token = useCookie('token');
	const { $notify } = useNuxtApp();

	const defaults: UseFetchOptions<UseFetchResponse<T>> = {
		baseURL: config.public.apiBase as string,
		key: url,
		headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},
		onRequestError() {
			$notify({
				type: 'danger',
				text: '系統異常'
			});
		},
		onResponseError({ response }) {
			$notify({
				type: 'danger',
				text: response._data?.message
			});
			setTimeout(() => {
				if (response.status === 403) {
					navigateTo('/login');
				}
			}, 3000);
		}
	};

	const params = defu(options, defaults);
	const { data: response, refresh } = await useFetch(url, params);

	return { response, refresh };
}
