import type { GetRoomRes } from './rooms';

export interface Order {
	userInfo: {
		address: {
			zipcode: number;
			detail: string;
		},
		name: string;
		phone: string;
		email: string;
	},
	_id: string;
	roomId: GetRoomRes;
	checkInDate: Date;
	checkOutDate: Date;
	peopleNum: number;
	orderUserId: string;
	status: number;
	createdAt: string;
	updatedAt: string;
}
