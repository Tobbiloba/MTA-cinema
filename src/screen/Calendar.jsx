import React from 'react'
import background from '../assets/movie-02.jpg'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
const Calendar = () => {
  const object = [
    {
      id: 1,
      title: 'Fast X',
      date: '12:30pm | 3:30pm | 5:50pm',
    },
    {
      id: 2,
      title: 'Extraction 3',
      date: '2:10pm | 3:30pm | 5:50pm',
    },
    {
      id: 3,
      title: 'Fast and furious 8',
      date: '12:30pm | 3:30pm | 5:50pm',
    },
    {
      id: 4,
      title: 'John wick',
      date: '12:30pm | 3:30pm | 5:50pm',
    },
    {
      id: 5,
      title: 'Shaolin Soccer',
      date: '12:30pm | 3:30pm | 5:50pm',
    },
    {
      id: 6,
      title: 'Monkey King',
      date: '12:30pm | 3:30pm | 5:50pm',
    },
  ]
  return (
    <div className="bg-black overflow-hidden">
      <Menu />
      <div
        className="flex items-center px-[3rem]  md:px-[12%] h-[25rem] md:h-[35rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${background})`,
          objectFit: 'cover',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-fit h-fit">
          <p className="text-red-600 mb-3 font-bold text-xl">PLAYING SOON</p>
          <h1 className="text-4xl md:text-6xl font-thin  text-slate-100">
            MOVIE <span className="font-bold">CALENDAR</span>
          </h1>
        </div>
      </div>
      <div className="px-[2rem] mt-[3rem] pb-[4rem] md:px-[10%] lg:px-[20%]">
        <div>
          <h1 className="font-bold text-xl lg:text-4xl">MARCH 1</h1>
          <div className="mt-[2rem] flex flex-col gap-[1.25rem] lg:flex-row lg:flex-wrap lg:gap-[15%] lg:justify-between">
            {object.map((item) => {
              return (
                <div
                  className="border-4 pl-[1.25rem] border-black border-l-red-500 mt-[2rem]"
                  key={item.id}
                >
                  <h1 className="font-bold text-xl lg:text-3xl">
                    {item.title}
                  </h1>
                  <p className="font-bold lg:text-xl">{item.date}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-[8rem]">
          <h1 className="font-bold text-xl lg:text-4xl">MARCH 2</h1>
          <div className="mt-[2rem] flex flex-col gap-[1.25rem] lg:flex-row lg:flex-wrap lg:gap-[15%] lg:justify-between">
            {object.map((item) => {
              return (
                <div
                  className="border-4 pl-[1.25rem] border-black border-l-red-500"
                  key={item.id}
                >
                  <h1 className="font-bold text-xl lg:text-3xl">
                    {item.title}
                  </h1>
                  <p className="font-bold lg:text-xl">{item.date}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-[8rem]">
          <h1 className="font-bold text-xl lg:text-4xl">MARCH 3</h1>
          <div className="mt-[2rem] flex flex-col gap-[1.25rem] lg:flex-row lg:flex-wrap lg:gap-[15%] lg:justify-between">
            {object.map((item) => {
              return (
                <div
                  className="border-4 pl-[1.25rem] border-black border-l-red-500"
                  key={item.id}
                >
                  <h1 className="font-bold text-xl lg:text-3xl">
                    {item.title}
                  </h1>
                  <p className="font-bold lg:text-xl">{item.date}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Banner />

      <Footer />
    </div>
  )
}

export default Calendar
