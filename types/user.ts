export interface User {
	address: {
		zipcode: string;
		detail: string;
	},
	_id: string;
	name: string;
	email: string;
	phone: string;
	birthday: string;
	createdAt?: string;
	updatedAt?: string;
}
