export default (dateString: Date): string => {
	const date = new Date(dateString);
	const daysOfWeek = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ];
	const dayIndex = date.getUTCDay();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	return `${month} 月 ${day} 日 ${daysOfWeek[dayIndex]}`;
};
