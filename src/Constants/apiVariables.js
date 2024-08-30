
export const url1 = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
export const url2 = '&days=3';

export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
