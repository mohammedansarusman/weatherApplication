import React from 'react'
import { RiCelsiusFill } from "react-icons/ri";

export const DaysForecast = (props) => {
    const {forecastday} = props?.data?.forecast;
    return (
    <div className='flex flex-col items-center py-5'>
        <h1 className='font-bold text-xl'>3 Days Forecast</h1>
            {forecastday.map(
                (item)=>(
                    <div key = {Math.random()} className = "flex items-center justify-around gap-8 w-[90%]">
                        <img src = {"http://"+item.day.condition.icon} alt="img"></img>
                        <div className='flex items-center'>
                            <h1>{item.day.avgtemp_c}</h1>
                            <RiCelsiusFill/>
                        </div>
                        <h1>{item.date}</h1>
                    </div>
                )    
            )}
    </div>
    )
}
