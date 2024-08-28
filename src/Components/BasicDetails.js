import React from 'react'

const BasicDetails = (props) => {
    const { name,localtime } = props?.data?.location;
    const time = localtime.split(" ")[1];
    const date = localtime.split(" ")[0];
    const myDate = new Date(date);
    const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    
  return (
    <div className='flex flex-col justify-center items-center pt-2'>
        <h3>{name}</h3>
        <h1 className='text-3xl font-bold'>{time}</h1>
        <h3>{weekDays[myDate.getDay()] + "," + myDate.getDate()}</h3>
    </div>
  )
}

export default BasicDetails