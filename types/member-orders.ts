// 訂單
export interface Order {
	status: number,
	userInfo: {
		name: string,
		phone: string,
		email: string
	}
}
