// 利用起迄日取得預約天數
export default (startDate: Date, endDate: Date): number => {
	const timeDifference = new Date(endDate).valueOf() - new Date(startDate).valueOf();
	return timeDifference / (1000 * 60 * 60 * 24);
};
