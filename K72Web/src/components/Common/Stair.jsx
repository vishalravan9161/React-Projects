// import React from 'react'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Stair = () => {
    const stairparentref = useRef(null)

  useGSAP(function(){
    const tl = gsap.timeline()
     tl.to(stairparentref.current,{
      display:'block'
    })
    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to(".stair",{
      y:'100%',
      stagger:{
        amount:-0.25
      }

    })

    tl.to(stairparentref.current,{
      display:'none'
    })

    tl.to(".stair",{
      y:'0%',
    })
  })
  return (
   <div ref={stairparentref} className="h-screen fixed w-full z-20 top-0"> 
           <div className="h-full flex w-full">
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
      </div>
     </div>
  )
}

export default Stair