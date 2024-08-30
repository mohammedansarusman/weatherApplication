import React, { useState, useEffect } from 'react'
import { FiSearch } from "react-icons/fi"
import { searchUrl } from '../Constants/apiVariables';
import { options } from '../Constants/apiVariables';

const SearchBar = ({ placevalue }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState("")

  const searchApiData = async () => {
    const response = await fetch(searchUrl + inputValue, options)
    const data = await response.json()
    console.log("search results", data)
    setSearchResult(data)

  }

  useEffect(() => { searchApiData() }, [inputValue])
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[90%] h-[50px] bg-gray-400 rounded-full px-2 flex items-center '>
        <FiSearch color="white" size="40px" onClick={() => placevalue(inputValue)} className='cursor-pointer' />
        <input
          type="text"
          className='w-[90%] h-[100%]  focus outline-none  text-white px-5 text-xl placeholder-white bg-transparent relative'
          placeholder="Search for a city..."
          onChange={(e) => (setInputValue(e.target.value))}
        />
      </div>
        {
          searchResult.length > 0 && 
            searchResult.map(
              (res) => 
                <ul className='bg-white w-[80%]' key={res.id}>
                  <li 
                      onClick={()=>console.log(res.name)}
                    >
                      {res.name+","+res.region}
                  </li>
                </ul>
            )
        }
    </div>
  )
}

export default SearchBar