// import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-screen bg-[#FAFAFA] shadow-2xl">
      <div className="flex justify-between py-5 px-10  border-b">
        <div className=" logo h-10 w-10 max-inline-none hover:rotate-180">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/coding-icon-svg-download-png-7444768.png?f=webp"
            alt=""
          />
        </div>
        <div className="text-xl flex gap-5">
          <Link
            className="border px-8 mt-2 outline-none hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/"
          >
            Home
          </Link>
          <Link
            className="border px-8 mt-2 outline-none hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/about"
          >
            About
          </Link>
          <Link
            className="border px-8 mt-2 outline-none hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/work"
          >
            Work
          </Link>
          <Link
            className="border px-8 mt-2 outline-none hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex gap-40 px-10">
        <div className="w-1/2 mt-15">
          <span className="text-[5vw] leading-15 font-sans font-semibold">
            CRAFTING MODERN{" "}
          </span>
          <span className="text-[5vw] leading-15 font-sans font-semibold">
            WEB EXPERIENCES
          </span>
          <p className="text-[18px] mt-8 font-sans">
            I am a Frontend Developer dedicated to building visually engaging,
            highly responsive, and user-friendly web applications. I transform
            complex ideas into clean code and pixel-perfect digital solutions.
          </p>
          <button className="mt-8 ">
            <Link
              className="border hover:text-white hover:border-black hover:bg-black px-7 text-[15px] font-sans font-semibold outline-0 mt-8 py-2 rounded-xl"
              to="/contact"
            >
              Contact Me
            </Link>
          </button>
          <img
            className="h-40 w-full mt-5"
            src="./../../public/final_logo-removebg-preview.png"
            alt=""
          />
        </div>
        <img
          className="h-138 w-120"
          src="./../../public/recreated.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
