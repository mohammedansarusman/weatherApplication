// import logo from './logo.svg';
import './App.css';
import ToggleButton from './Components/ToggleButton';
import SearchBar from './Components/SearchBar';
import { useState, useEffect } from 'react';
import { url1,url2, options } from './Constants/apiVariables';
import BasicDetails from './Components/BasicDetails';
import TemperatureDetails from './Components/TemperatureDetails';
import {DaysForecast}  from './Components/DaysForecast';
import LocationError from './Components/LocationError';
function App() {
	const [bgColor, setBgcolor] = useState("bg-gray-800");
	const [resultData, setResultData] = useState(null);
	const [blockColor,setBlockColor] = useState("bg-gray-900");
	const [fontColor,setFontColor] = useState("text-white");
	const [location,setLocation] = useState("London");
	const [locationError,setLocationError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(url1+location+url2, options);
			const result = await response.json();
			console.log("fetching data",result)
			setResultData(result);
			setLocationError(result.error ? true : false);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => { fetchData() }, [location])

	if (locationError) {
		return (
			<LocationError />
            
        )
	}

	return (
		<div className="w-full bg-orange-400 flex flex-col justify-center items-center py-[30px]">
			{console.log("hello",location)}
			<div className={`w-[450px] ${bgColor} flex flex-col items-center rounded-xl py-5`}>
				<div className='flex items-center p-7 gap-7'>
					<ToggleButton value={setBgcolor} blvalue = {setBlockColor} fontvalue = {setFontColor} />
					<h1 className={`pl-5 text-xl text-center ${bgColor === "bg-gray-800" ? 'text-white' : 'text-black'}`}>{bgColor === "bg-gray-800" ? "Dark Mode" : "Light Mode"}</h1>
				</div>
				<div className="flex justify-center">
					<SearchBar placevalue = {setLocation}/>
				</div>
				<div className={`w-[90%] h-[100px] ${blockColor} mt-5 shadow-lg shadow-slate-600 rounded-lg ${fontColor}`}>
					{resultData ? <BasicDetails data={resultData} /> : ""}
				</div>
				<div className={`w-[90%]  ${blockColor} mt-5 shadow-lg shadow-slate-600 rounded-lg ${fontColor} flex justify-center`}>
					{resultData ? <TemperatureDetails data={resultData} /> : ""}
				</div>
				<div className={`w-[90%]  ${blockColor} mt-5 shadow-lg shadow-slate-600 rounded-lg ${fontColor}`}>
					{resultData ? <DaysForecast data={resultData} /> : ""}
				</div>
			</div>
		</div>
	);
}

export default App;

