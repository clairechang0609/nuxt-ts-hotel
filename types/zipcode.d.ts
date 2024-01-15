declare module 'twzipcode-data/src/zh-tw/counties.js' {
	export interface Counties {
		id: string;
		name: string;
	}
	const counties: Counties[];
	export default counties;
}

declare module 'twzipcode-data/src/zh-tw/zipcodes.js' {
	export interface Districts {
		id: string;
		zipcode: number;
		county: string;
		city: string;
	}
	const districts: Districts[];
	export default districts;
}
