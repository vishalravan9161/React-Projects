// import React from 'react'

import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
  <>
 
  <Navbar />
    <div className=" h-140">
      
      <div className="flex gap-45 px-10">
        <div className="w-1/2 mt-5  ">
          <span className=" text-8xl outline-none shadow-sm/100 bg-[#FFDCDC] leading-20 rounded-xl inline-block  font-[font2] font-semibold">
            CRAFTING MODERN
          </span>
          <span className=" outline-none shadow-sm/100 bg-[#FFDCDC] text-7xl leading-20 rounded-xl inline-block mt-2 font-[font2] font-semibold">
            WEB EXPERIENCES
          </span>
          <p className="text-[18px] mt-8 font-[font2]">
            I am a Frontend Developer dedicated to building visually engaging,
            highly responsive, and user-friendly web applications. I transform
            complex ideas into clean code and pixel-perfect digital solutions.
          </p>
          <button className="mt-8 ">
            <Link
              className="border shadow-md/300 outline-none hover:text-white hover:border-black hover:bg-black hover:scale-20 px-7 text-[15px] font-sans font-semibold outline-0 mt-8 py-2 rounded-xl"
              to="/contact"
            >
              Contact Me
            </Link>
          </button>
        
        </div>
       <div className="mt-5">
         <img
          className="h-140 w-115 object-fit shadow-xl/800 bg-[#9fbee9] rounded-t-xl"
          src="./../../public/recreated1.png"
          alt=""
        />
       </div>
      </div>
    </div>
     </>
  );
};

export default Home;
