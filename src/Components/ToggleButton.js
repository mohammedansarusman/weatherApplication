import React, { useState } from 'react'

const ToggleButton = ({ value, blvalue, fontvalue }) => {
  const [align, setAlign] = useState(10);
  const [thumb, setThumb] = useState("bg-gray-800");

  return (
    <div>
      <button
        className={`toggle-btn w-[80px] h-[40px] bg-gray-400 rounded-full flex items-center relative`}
        onClick={
          () => {
            if (align === 10) {
              value("bg-gray-200");
              setAlign(145);
              setThumb("bg-gray-200");
              blvalue("bg-white")
              fontvalue("text-gray-900")

            } else {
              setAlign(10);
              value("bg-gray-800");
              setThumb("bg-gray-800");
              blvalue("bg-gray-900");
              fontvalue("text-white");
            }
          }
        }
      >
        <div
          className={`transition-all duration-300 w-[30px] h-[30px] ${thumb} rounded-full absolute`}
          style={{ transform: `translateX(${align}%)` }}
        >
        </div>
      </button>
    </div>
  )
}

export default ToggleButton