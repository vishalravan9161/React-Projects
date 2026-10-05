// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
     <div className="flex justify-between py-5 px-10 bg-gray-200 shadow-md/300  border-b">
        <div className=" logo h-10 w-10 max-inline-none hover:rotate-180">
          <img className="shadow-md/300"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/coding-icon-svg-download-png-7444768.png?f=webp"
            alt=""
          />
        </div>
        <div className="text-xl flex gap-5">
          <Link
            className="border px-8 mt-2 outline-none shadow-md/300 hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/"
          >
            Home
          </Link>
          <Link
            className="border px-8 mt-2 outline-none shadow-md/300 hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/about"
          >
            About
          </Link>
          <Link
            className="border px-8 mt-2 outline-none shadow-md/300 hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/work"
          >
            Work
          </Link>
          <Link
            className="border px-8 mt-2 outline-none shadow-md/300 hover:scale-120 rounded-xl hover:bg-black hover:text-white font-semibold hover:border-black"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
  )
}

export default Navbar