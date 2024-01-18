// 會員基本資料
export interface GetUserRes {
	email: string,
	name: string,
	phone: string,
	birthday: string,
	address: {
		detail: string,
		zipcode: string
	},
	_id: string
}
