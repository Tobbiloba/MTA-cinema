import React from 'react'
import cover1 from '../assets/cover-1.jpg'
import cover2 from '../assets/cover-2.jpg'
import TheatersIcon from '@mui/icons-material/Theaters'
const ComingSoon = () => {
  return (
    <div className="px-[2rem] lg:h-[55rem] md:px-[10%] bg-black py-[2rem] flex flex-col lg:flex-row w-[99vw] overflow-hidden lg:justify-evenly lg:py-[5rem]">
      <div className="h-fit">
        <img
          src={cover1}
          alt="cover image"
          className="w-[90%] md:w-[25rem] ml-[10%]"
        />
        <img
          src={cover2}
          alt="small cover image"
          className="relative bottom-[7rem] w-[10rem] md:w-[12.5rem] lg:w-[15rem] lg:right-[4rem] lg:bottom-[12.5rem]"
        />
      </div>
      <div className="relative bottom-[5rem] lg:w-[40%] lg:bottom-0 lg:pt-[10%]">
        <h1 className="text-xl font-bold text-red-500">PLAYING</h1>
        <h1 className="text-2xl font-mono mt-[1rem]">
          Now in <span className="font-bold font-2xl">CINEMAS</span>
        </h1>
        <p className="text-[15px] text-slate-300 leading-8 mt-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
          <TheatersIcon />
          MENUS
        </button>
      </div>
    </div>
  )
}

export default ComingSoon
