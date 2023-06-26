import React from 'react'
import background from '../assets/background.jpg'
import BookmarkIcon from '@mui/icons-material/Bookmark'
const Banner = () => {
  return (
    <div
      className="flex flex-col md:items-center borders px-[2.5rem] md:py-[3rem]  md:px-[12%] pb-[2rem]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${background})`,
        objectFit: 'cover',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-row bg-red-600 px-[15%] py-6 gap-2 md:w-fit">
        <BookmarkIcon style={{ fontSize: '28px' }} />
        <div className="font-bold lg:text-xl">
          SEE ALL OFFERS AND PROMOTIONS
        </div>
      </div>

      <div className="flex flex-col mt-[4rem] lg:flex-row lg:gap-[5%] lg:mt-[10rem]">
        <div className="md:flex flex-row justify-between">
          <div className="md:w-[40%]">
            <h1 className="font-mono text-xl lg:text-4xl md:text-2xl">
              Divi <span className="font-black">Movies</span>
            </h1>
            <p className="text-red-600 font-bold md:text-xl font-mono">
              EXPERIENCE MOVIES
            </p>
          </div>
          <div className="mt-[3rem] md:w-[45%] md:mt-0">
            <h1 className="font-bold lg:text-2xl text-slate-400 text-xl">
              ABOUT US
            </h1>
            <p className="text-[16px] lg:text-[20px] mt-2">
              Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Curabitur non nulla sit amet nisl
            </p>
          </div>
        </div>
        <div className="md:flex flex-row justify-between md:mt-[4rem] lg:mt-0">
          <div className="mt-[2rem] md:w-[45%] lg:mt-0">
            <h1 className="font-bold text-slate-400 lg:text-2xl">MOVIES</h1>
            <p className="w-[60%] leading-10 lg:text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="mt-[2rem] md:w-[45%] lg:mt-0">
            <h1 className="font-bold text-slate-400 lg:text-2xl ">INFO</h1>
            <p className="w-[60%] leading-10 lg:text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
