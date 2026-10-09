import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='w-full z-10 fixed p-10 right-0 justify-end  items-center flex'>
         <button className='bg-black text-white border-2 hover:bg-gray-800 rounded-full px-4 text-center py-2'>Hire me</button>
            <i className=" text-gray-300 text-4xl ml-3 ri-more-2-fill"></i>
    </div>
  )
}

export default Header