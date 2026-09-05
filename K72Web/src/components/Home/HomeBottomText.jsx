// import React from 'react'

import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className=" text-white mb-5 lg:font-[font2] flex items-center justify-center gap-5 ">
     <div>
       <Link to='/projects' className="text-[5.5vw] border-2 border-white rounded-full px-6 py-1 pt-3 mb-2 hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase">Projects</Link>
     </div>

     <div className="">  
         <Link to='/agence' className="text-[5.5vw] border-2 border-white rounded-full px-6  py-1 pt-3  mb-2 hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase">Agance</Link>
     </div>
    </div>
  )
}

export default HomeBottomText