export interface UseFetchResponse<K> {
	status: boolean;
	token?: string;
	result: K;
}
