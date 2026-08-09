// import React from 'react'



const Header = ({data}) => {
  console.log(data)
  return (
   <>
    <div className="flex justify-between mb-2 ">

      <h2 className="text-xl font-medium">Hello <br /><span className="font-semibold text-3xl" >{data.firstName}👋 </span></h2>
        <button className="bg-red-500 text-sm cursor-pointer active:scale-95 h-8 w-20 rounded-md">Log Out</button>

      
    </div>

    
   
   </>

    
  )
}

export default Header