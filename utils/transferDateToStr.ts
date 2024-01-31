export default (dateString: Date): string => {
	if (!dateString) {
		return '';
	}
	const date = new Date(dateString);
	const daysOfWeek = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ];
	const dayIndex = date.getUTCDay();
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	return `${year} 年 ${month} 月 ${day} 日 ${daysOfWeek[dayIndex]}`;
};
