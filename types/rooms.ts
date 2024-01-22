interface info {
	title: string;
	isProvide: boolean;
}

export interface GetRoomRes {
	name: string;
	description: string;
	imageUrl: string;
	imageUrlList: string[];
	areaInfo: string;
	bedInfo: string;
	maxPeople: number;
	price: number;
	status: number;
	facilityInfo: info[],
	amenityInfo: info[],
	_id: string;
	createdAt: string;
	updatedAt: string;
}
