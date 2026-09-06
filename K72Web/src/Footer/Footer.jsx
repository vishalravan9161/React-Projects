// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white h-110 hover:rounded-t-4xl  ">
       <div className="flex flex-row justify-between p-5">
        <div className="text-5xl gap-5 p-2 flex font-semibold uppercase   ">
        <h1 className="border-2 w-30 p-3 rounded-full text-center hover:text-[#D3FD50] hover:border-[#D3FD50]">Fb</h1>
        <h1 className="border-2 w-30 p-3 rounded-full text-center hover:text-[#D3FD50] hover:border-[#D3FD50]">ig</h1>
        <h1 className="border-2 w-30 p-3 rounded-full text-center hover:text-[#D3FD50] hover:border-[#D3FD50]">in</h1>
        <h1 className="border-2 w-30 p-3 rounded-full text-center hover:text-[#D3FD50] hover:border-[#D3FD50]">be</h1>
       </div>

        <div className="text-5xl gap-5 p-2 flex font-semibold uppercase pr-4">
            <h1 className="border-2  p-4 rounded-full text-center hover:text-[#D3FD50] hover:border-[#D3FD50]">contact</h1>
            </div>
       </div>

      <div className="flex mt-60 w-full justify-center ">
         <div className=" flex bottom-0 font-[font2] uppercase gap-5 items-center ">
        <h1 className="hover:text-[#D3FD50]">privacy policy</h1>
        <h1 className="hover:text-[#D3FD50]">privacy notice</h1>
        <h1 className="hover:text-[#D3FD50]">ethics report</h1>
        <h1 className="hover:text-[#D3FD50]">consent choices</h1>
       </div>
      </div>
    </div>
  )
}

export default Footer