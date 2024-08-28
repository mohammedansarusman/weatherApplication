import React from 'react'
import { RiCelsiusFill } from "react-icons/ri";
import { GiSunrise,GiSunset } from "react-icons/gi";



const TemperatureDetails = (props) => {
    const { temp_c, feelslike_c, humidity, uv, wind_kph  } = props?.data?.current;
    const {sunrise, sunset} = props?.data?.forecast?.forecastday[0]?.astro;
    const {icon, text} = props?.data?.current?.condition

    return (
        <div className='flex items-center w-[95%]'>
            <div className='w-[33.3%] h-[100%] flex flex-col'>
                <div className='flex items-center justify-center'>
                    <h1 className='font-extrabold text-3xl'>{temp_c}</h1><RiCelsiusFill size="20" type='bold' />
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-sm'>Feels like:</h1>
                    <p>{feelslike_c}</p>
                </div>
                <div className='flex items-center justify-between mt-5 px-2'>
                     <div className=''>
                        <GiSunrise size="30"/>
                    </div>
                    <div className='text-xs'>
                        <h1>Sunrise</h1>
                        <h1>{sunrise}</h1>
                    </div>
                </div>
                <div className='flex items-center justify-between px-2'>
                    <div>
                        <GiSunset size="30"/>
                    </div>
                    <div className='text-xs'>
                        <h1>Sunset</h1>
                        <h1>{sunset}</h1>
                    </div>
                </div>
            </div>
            <div className='w-[33.3%] flex flex-col items-center'>
                <img className = "w-[140px] object-fill" src={"http://"+icon} alt=""></img>
                <div className='    h-[50px] w-full flex justify-center items-center'>
                    <h1 className='text-sm'>{text}</h1>
                </div>
            </div>
            <div className='w-[33.3%] flex flex-col items-center gap-2 '>
                <div className='flex flex-col items-center leading-none'>
                    <h1 className='text-lg'>{humidity}%</h1>
                    <h1 className='text-xs'> Humidity</h1>
                </div>
                <div className='flex flex-col items-center leading-none'>
                    <h1 className='text-lg'>{wind_kph}</h1>
                    <h1 className='text-xs'>Wind(km/h)</h1>
                </div>
                <div className='flex flex-col items-center leading-none'>
                    <h1 className='text-lg'>{uv}</h1>
                    <h1 className='text-xs'>UV</h1>
                </div>
            </div>
        </div>
    )
}

export default TemperatureDetails