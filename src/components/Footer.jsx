import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
const Footer = () => {
  return (
    <div className="px-[10%] flex flex-col lg:flex-row-reverse lg:justify-between lg:px-[15%] justify-center border border-[#242424] border-t-white text-center items-center py-[2rem]">
      <div className="flex flex-row gap-[1rem] w-fit">
        <TwitterIcon style={{ color: 'gray', fontSize: '30px' }} />
        <LinkedInIcon style={{ color: 'gray', fontSize: '30px' }} />
        <InstagramIcon style={{ color: 'gray', fontSize: '30px' }} />
      </div>
      <div className="mt-[1rem]">
        <h1 className="text-gray-500 text-[16px] font-mono">
          Designed by <span className="text-[19px] font-bold">AMTJ GROUP</span>{' '}
          | Powered by <span className="text-[19px] font-bold">WordPress</span>
        </h1>
      </div>
    </div>
  )
}

export default Footer
