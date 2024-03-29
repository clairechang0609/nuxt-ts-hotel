import counties from 'twzipcode-data/src/zh-tw/counties.js';
import districts from 'twzipcode-data/src/zh-tw/zipcodes.js';

export default () => {
	const getCounties = counties;
	const getDist = function(county: string) {
		return districts.filter(item => item.county === county);
	};
	return {
		districts,
		getCounties,
		getDist
	};
};
