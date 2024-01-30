export default (dateString: Date): string => {
	const dateTime = new Date(dateString);
	const month = dateTime.getMonth();
	const date = dateTime.getDate();
	const monthFormat = month + 1 < 10 ? `0${month + 1}` : month;
	const dateFormat = date < 10 ? `0${date}` : date;
	return `${dateTime.getFullYear()}/${monthFormat}/${dateFormat}`;
};
