import React, { useRef, useState } from "react";
import Page1bottomtext from "../components/Page1bottomtext";
// import Tiltetext from "../components/Tiltetext";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import Tiltetext from "../components/Tiltetext";

const Page1 = () => {
  const TiltRef = useRef(null);
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)
  const mouseMoving = (e) => {
 
    setxVal((e.clientX - TiltRef.current.getBoundingClientRect().x-TiltRef.current.getBoundingClientRect().width/2)/30);
    setyVal(-(e.clientY - TiltRef.current.getBoundingClientRect().y-TiltRef.current.getBoundingClientRect().height/2)/10);
    // TiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  };

    useGSAP(function() {
      gsap.to(TiltRef.current,{
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration:1
      })
    },[xVal,yVal])

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className=" relative h-screen w-screen p-4 bg-white "
    >
      <div
        id="page1-in"
        className="relative h-full w-full p-8 bg-[url('/Gemini_Generated_Image_smmdcysmmdcysmmd.png')] shadow-xl/500 bg-cover bg-center object-cover rounded-4xl"
      >
        <img
          className="h-25 w-38 "
          src="./../../public/910c3d186408801.6574f23df0825-removebg-preview.png"
          alt=""
        />
          <Tiltetext abc={TiltRef} />
        <Page1bottomtext />
      </div>
    </div>
  );
};

export default Page1;
