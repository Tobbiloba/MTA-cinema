import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="">
      <div className="lg:hidden md:px-[10%] bg-white w-[100vhw] h-[60px] md:h-[80px] px-[1.5rem] flex flex-row items-center justify-between">
        <h1 className="text-red-500 text-2xl font-mono font-bold ">
          MTA
          <span className="text-black text-[17px] ml-1 font-mono">cinema.</span>
        </h1>
        <div className="w-[5rem] flex justify-between">
          <ShoppingCartIcon
            style={{ color: 'black' }}
            className="cursor-pointer"
          />
          <MenuIcon
            style={{ color: 'black' }}
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
        {showMenu && (
          <div className="absolute h-[100vh] w-[60vw] top-0 right-0 bg-white flex flex-col justify-between">
            <div></div>
            <div className="text-black">
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Home
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Movies
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Calendar
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Movie
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Membership
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                Contact
              </h1>
              <h1 className="text-center cursor-pointer mt-4 text-xl font-mono hover:text-red-500">
                About
              </h1>
            </div>
            <div className="w-fit p-3 ml-[1rem] mb-[1rem] rounded-full bg-red-500 hover:bg-black">
              <ArrowForwardIcon
                style={{ color: 'white' }}
                onClick={() => setShowMenu(false)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="lg:flex hidden w-[100vw] md:px-[10%] h-[60px] flex-row bg-white justify-between items-center">
        <h1 className="text-red-500 text-2xl font-mono font-bold ">
          MTA
          <span className="text-black text-[19px] ml-1 font-mono">cinema.</span>
        </h1>
        <div className="flex flex-row items-center ">
          <div className="text-black flex mr-[1.5rem]">
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Home
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Movies
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Calendar
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Movie
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Membership
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              Contact
            </h1>
            <h1 className="text-center cursor-pointer ml-4 text-[17px] font-mono hover:text-red-500">
              About
            </h1>
          </div>
          <ShoppingCartIcon
            style={{ color: 'black' }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
