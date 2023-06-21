import React from 'react'
import img2 from '../assets/coming1.jpg'
import img1 from '../assets/coming2.jpg'
import img3 from '../assets/coming3.jpg'
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
const PlayingNow = () => {
  return (
    <div className="px-[2.2rem] md:px-[10%] bg-black py-[3rem] lg:px-[20%]">
      <div className="w-fit">
        <h1 className="text-red-600 font-bold text-[14px]">COMING SOON</h1>
        <h1 className="mt-[1rem] text-2xl font-mono lg:text-4xl  lg:w-[25rem]">
          MOVIES{' '}
          <span className="font-sans font-bold text-4xl lg:text-6xl">
            Coming Soon
          </span>
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%] h-[25rem] md:w-[inherit] mt-[2rem] lg:h-[45rem] md:h-[30rem] hover:cursor-pointer z-0"
      >
        <SwiperSlide
          className="flex items-center px-[1rem]  md:px-[12%]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img1})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              EXTRA SPACE
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Lorem ipsum dolor sit amer, consecteur adipiscing elit, sel do
              eiusmod
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              ORDER TICKETS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="flex items-center px-[1rem]  md:px-[12%] "
          style={{
            backgroundImage: `url(${img2})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              MONARCH
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Lorem ipsum dolor sit amer, consecteur adipiscing elit, sel do
              eiusmod
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              ORDER TICKETS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="flex items-center px-[1rem]  md:px-[12%] "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img3})`,
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-fit h-fit">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-slate-100">
              EXTRACTION 2
            </h1>
            <p className="text-[13px] lg:text-[12px] mt-[1rem]">
              Pelllentesque in ipsum id orci porta dapibus. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
            <button className="mt-[2rem] bg-red-600 hover:bg-black px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
              <TheatersIcon />
              ORDER TICKETS
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PlayingNow
