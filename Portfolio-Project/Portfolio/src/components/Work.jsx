// import React from 'react'

import Navbar from "./Navbar"

const Work = () => {
  return (
    <>
      <Navbar />
       <h1 className="text-[40vw] font-[font1] font-bold -mt-40 px-10">Works</h1>
      <div className="-mt-50 flex gap-10 px-10 pb-10 ">
        <div className="bg-red-400 w-1/2 h-100">
        
        </div>
        <div className="bg-blue-400 w-1/2 h-100"></div>
      </div>
      <div className="flex gap-10 px-10 pb-10 ">
         <div className="bg-red-400 w-1/2 h-100"></div>
        <div className="bg-blue-400 w-1/2 h-100"></div>
      </div>

    </>
  )
}

export default Work