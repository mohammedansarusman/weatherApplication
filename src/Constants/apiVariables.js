
export const url1 = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
export const url2 = '&days=3';

export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,

		// 'x-rapidapi-key': '1852580c53msh4d613febe8156c6p1cc646jsn028b30b01d69',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
