import React,{useState} from 'react'
import { FiSearch } from "react-icons/fi"

const SearchBar = ({placevalue}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className='w-[90%] h-[50px] bg-gray-400 rounded-full px-2 flex items-center '>
      <FiSearch color = "white" size = "40px" onClick={()=>placevalue(inputValue)} className='cursor-pointer'/>
      <input 
        type="text" 
        className='w-[90%] h-[100%]  focus outline-none  text-white px-5 text-xl placeholder-white bg-transparent' 
        placeholder="Search for a city..."
        onChange={(e)=>(setInputValue(e.target.value))}  
      />
    </div>
  )
}

export default SearchBar