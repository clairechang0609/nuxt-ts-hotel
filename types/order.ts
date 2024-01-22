// 訂單
export interface Order {
	userInfo: {
		address: {
			zipcode: number,
			detail: string
		},
		name: string,
		phone: string,
		email: string
	},
	checkInDate: string,
	checkOutDate: string,
	peopleNum: number,
	orderUserId: string,
	status: number,
	createdAt: string,
	updatedAt: string
}
