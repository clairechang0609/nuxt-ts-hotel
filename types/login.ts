export interface LoginRes {
	status: boolean,
	token: string,
	result: {
		address: {
			zipcode: number,
			detail: string,
			city: string,
			county: string
		}
	},
	_id: string,
	name: string,
	email: string,
	phone: string,
	birthday: string,
	createdAt: string,
	updatedAt: string,
	id: string
};
