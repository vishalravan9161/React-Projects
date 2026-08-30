// import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef  = useRef(null)
  const imageArray = [
        '../../public/Images/(1) Carl_480x640.jpg',
        '../../public/Images/(2) Olivier_480x640 (2).jpg',
        '../../public/Images/(3) ChantalG_480x640 (3).jpg',
        '../../public/Images/(4) Michele_480X640 (4).jpg',
        '../../public/Images/(5) MEL_480X640 (5).jpg',
        '../../public/Images/(6) CAMILLE_480X640_2 (6).jpg',
        '../../public/Images/(7) MEGGIE_480X640_2.jpg',
        '../../public/Images/(8) joel_480X640_3.jpg',
  ]
  // console.log(imageArray)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
     scrollTrigger:{
      trigger:imageDivRef.current,
      start: 'top 22%',
      end: 'top -140%',
      scrub: 1,
      pin: true,
      pinSpacer: true,
      pinReparent: true,
      pinType: 'transform',
      invalidateOnRefresh: true,
      onUpdate:function(elem){
        let imageIndex;
       if(elem.progress<1){
         imageIndex = Math.floor(elem.progress * imageArray.length);
       }else {
        imageIndex = imageArray.length - 1;
       }
        imageRef.current.src = imageArray[imageIndex]
      }
     }
    })
  })
  
  return (
   <div>
    <div className="sectoion1 relative py-1">
    <div ref={imageDivRef} className=" h-[20vw] w-[15vw] overflow-hidden rounded-2xl absolute top-43 left-102">
      <img ref={imageRef} className="rounded-2xl h-full w-full" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
    </div>
     <div className=" relative font-[font2]">
      <div className="mt-[55vh] ">
        <h1 className=" text-[20vw] text-center leading-[17vw] uppercase">SEVEN7Y <br />TWO</h1>
        
      </div>

      <div className="mt-5">
        <p className="text-[3.5vw] leading-[4vw] ml-[42%]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We're inquisitive and open-minded, and we make sure creativity
           crowds out ego from every corner. A brand is a living thing, with 
           values, a personality and a story. If we ignore that, we can achieve 
           short-term success, but not influence that goes the distance. We bring
            that perspective to every brand story we help tell.</p>
      </div>
    </div>
   </div>
   <div className="section2 h-screen">
    
   </div>
   </div>
  );
};

export default Agence;
 