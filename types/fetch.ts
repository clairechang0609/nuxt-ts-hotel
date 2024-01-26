export interface UseFetchResponse<T> {
	status: boolean;
	token?: string;
	result: T;
}
