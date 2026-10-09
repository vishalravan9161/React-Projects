import React, { useRef } from 'react'
import Page1bottomtext from '../components/Page1bottomtext'
import Tiltetext from '../components/Tiltetext'

const Page1 = () => {
  const TiltRef = useRef(null)
  const mouseMoving =(e)=>{
    console.log(TiltRef.current.getBoundingClientRect())
  }
  return (
    <div 
     onMouseMove={(e)=>{
      mouseMoving(e)
     }}
    className=' h-screen w-screen p-3  bg-white'>
     <div className="h-full w-full p-8 bg-[url('/Gemini_Generated_Image_smmdcysmmdcysmmd.png')] shadow-xl/500 bg-cover bg-center object-cover rounded-4xl">
          <img className='h-25 w-38 ' src="./../../public/910c3d186408801.6574f23df0825-removebg-preview.png" alt="" />
          
            <div>
               <div ref={TiltRef} className=" pl-10">
      <h1 className="text-[5.5vw] leading-20 mt-10 font-bold w-190">
        I AM <span className="text-black">DARK MODE </span><span className="text-[9vw]"> DESIGNER</span>
      </h1>
      <h2 className="text-6xl font-bold ">TO HIRE </h2>
    </div>
            </div>


          <Page1bottomtext />
        
        </div>



    </div>
  )
}

export default Page1