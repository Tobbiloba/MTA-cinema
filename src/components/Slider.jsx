import React from 'react'
import img2 from '../assets/slider5.avif'
import img1 from '../assets/slider6.avif'
import img3 from '../assets/slider4.avif'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../styles/Slider.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

import TheatersIcon from '@mui/icons-material/Theaters'
const Slider = () => {
  return (
    <div className="z-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100vw] h-[438px] md:h-[30rem] lg:h-[50rem] hover:cursor-pointer z-0"
      >
        <SwiperSlide
          className="flex items-center px-[3rem]  md:px-[12%]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img1})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              PRE ORDER <br /> REFRESHMENT
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Lorem ipsum dolor sit amer, consecteur adipiscing elit, sel do
              eiusmod
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              MENUS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="flex items-center px-[3rem]  md:px-[12%] "
          style={{
            backgroundImage: `url(${img2})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              WELCOME TO <span className="text-red-500">AMTJ</span> <br />{' '}
              THEATER
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Lorem ipsum dolor sit amer, consecteur adipiscing elit, sel do
              eiusmod
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              SHOWTIMES
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="flex items-center px-[3rem]  md:px-[12%] "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img3})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              MOVIE PASS CLUB
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Pelllentesque in ipsum id orci porta dapibus. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Vestibulum ac
              diam sit amet quam vehicula elementum sed sit amet dui. Donec
              sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
              tinci
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              JOIN TODAY
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
