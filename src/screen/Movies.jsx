import React from 'react'
import background from '../assets/theater-02.jpg'
import TheatersIcon from '@mui/icons-material/Theaters'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
const Movies = () => {
  const object = [
    {
      id: 1,
      img: 'https://static.netnaija.com/i/9bVNrDw27Wv.webp',
      title: 'Fast X',
      duration: '2hr 30 mins',
      pg: true,
      date: 'Jun 11, 2023',
    },
    {
      id: 2,
      img: 'https://static.netnaija.com/i/WAPK4oXDN0B.webp',
      title: 'The Machine',
      duration: '1hr 23mins',
      pg: true,
      date: 'Jun 20 2023',
    },
    {
      id: 3,
      img: 'https://static.netnaija.com/i/LqXNE1MyNlE.webp',
      title: 'The wrath of Becky',
      duration: '1 hr 05mins',
      pg: true,
      date: 'Jun 18',
    },

    {
      id: 4,
      img: 'https://static.netnaija.com/i/DpraRe827Ao.webp',
      title: 'Extraction 2',
      duration: '2hr 10mins',
      pg: true,
      date: 'Jun 16',
    },

    {
      id: 5,
      img: 'https://static.netnaija.com/i/bvoKdbrYarx.webp',
      title: 'B Cut',
      duration: '1hr 25mins',
      pg: true,
      date: 'Jun 14',
    },

    {
      id: 6,
      img: 'https://static.netnaija.com/i/XV5Kv8dZa9m.webp',
      title: 'My Fault',
      duration: '1hr 45mins',
      pg: true,
      date: 'Jun 09',
    },

    {
      id: 7,
      img: 'https://static.netnaija.com/i/1xYNe4GPaLJ.webp',
      title: 'Ride On',
      duration: '2hr 2min',
      pg: true,
      date: 'Jun 04',
    },

    {
      id: 8,
      img: 'https://static.netnaija.com/i/gVpagv947wO.webp',
      title: 'His Only Son',
      duration: '1hr 15mins',
      pg: true,
      date: 'Jun 02',
    },

    {
      id: 9,
      img: 'https://static.netnaija.com/i/W4lNm8kOaRo.webp',
      title: 'The Black Demon',
      duration: '2hr 1 min',
      pg: true,
      date: 'May 30',
    },

    {
      id: 10,
      img: 'https://static.netnaija.com/i/5wPKLkmLNVB.webp',
      title: 'John Wick: Chapter 4',
      duration: '2hr 4mins',
      pg: true,
      date: 'May 22',
    },

    {
      id: 11,
      img: 'https://static.netnaija.com/i/x5PKDnqqanM.webp',
      title: 'The Super Mario Bros',
      duration: '1hr 15mins',
      pg: true,
      date: 'May 16',
    },
  ]
  return (
    <div className="bg-black overflow-hidden">
      <Menu />
      <div
        className="flex items-center px-[3rem]  md:px-[12%] h-[25rem] md:h-[45rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${background})`,
          objectFit: 'cover',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-fit h-fit">
          <p className="text-red-600 mb-3 font-bold text-xl">NOW PLAYING</p>
          <h1 className="text-4xl md:text-8xl font-bold font-mono text-slate-100">
            NOW <span className="font-thin">PLAYING</span>
          </h1>
          <button className="mt-[2rem] bg-red-600 hover:bg-black text-xl font-bold px-7 py-3 rounded-md flex items-center flex-row gap-2 font-mono">
            <TheatersIcon />
            View Showtime
          </button>
        </div>
      </div>
      <div className="px-[2.5rem]  md:px-[7.5%] flex flex-row md:justify-between flex-wrap py-[2rem]">
        {object.map((item) => {
          return (
            <div className="w-fit mt-[6rem] md:w-[30rem]" key={item.id}>
              <img src={item.img} className="h-[30rem] md:h-[40rem] w-[100%]" />

              <div className="w-[100%] mt-[6rem]" key={item.id}>
                <img src={item.img} className="h-[30rem] w-[100%]" />

                <div className="mt-[2rem]">
                  <h1 className="text-slate-500 font-mono font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-slate-300 font-mono mt-3">
                    {item.duration} | <span>{item.pg && 'PG'}</span>
                  </p>
                  <p className="text-slate-300 font-mono mt-">
                    Released <span>{item.date}</span>
                  </p>
                  <button className="px-6 rounded-md font-mono font-bold hover:bg-black hover:border border-red-600 hover:text-red-600 bg-red-600 py-2  mt-3">
                    Get Ticket
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="relative mt-[5rem]">
        <Banner />
        <Footer />
      </div>
    </div>
  )
}

export default Movies
