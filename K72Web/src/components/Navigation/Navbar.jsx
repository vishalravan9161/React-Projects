// import React from 'react'

import { useContext, useRef } from "react"
import { NavbarContext } from "../../context/NavContext"
import K72 from "../NavComponent/k72"

const Navbar = () => {
  const naveGreenRef = useRef(null)
   const [navOpen, setNavOpen] = useContext(NavbarContext)
      console.log(navOpen)

  return (
    <div className="z-4 flex fixed w-full items-start justify-between top-0  ">
      <div className="lg:ml-2 ml-1 ">
       <K72/>
      </div>

      <div onClick={()=>{
        setNavOpen(true)
      }}
       onMouseEnter={()=>{
        naveGreenRef.current.style.height ='100%'
      }}
      onMouseLeave={()=>{
         naveGreenRef.current.style.height ='0%'
      }}
       className="lg:h-12 h-8 lg:w-50 w-15 bg-black cursor-pointer  relative ">
          <div ref={naveGreenRef} className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"></div>
          <div className="relative gap-1 flex justify-center h-full items-end mr-7 flex-col">
            <div className="bg-white lg:w-15 w-7 h-0.5"></div>
            <div className="bg-white lg:w-10 w-4 h-0.5"></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar