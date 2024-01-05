export interface User {
	id: number | string;
	name: string;
	[ propName: string ]: any;
}
