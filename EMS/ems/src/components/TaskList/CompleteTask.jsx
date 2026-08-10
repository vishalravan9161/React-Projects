// import React from 'react'

const CompleteTask = () => {
  return (
    <div className=" h-full shrink-0 w-[300px]  bg-green-400 rounded-xl">
           <div className="flex justify-between items-center p-5">
             <h3 className="bg-red-600 px-3 py-1 rounded-md font-medium text-white ">High</h3>
            <h4 className="font-medium text-gray-700 bg-yellow-500 px-5 rounded-md">01-08-2026</h4>
           </div>
                 <h2 className=" text-2xl text-white text-center font-semibold bg-amber-800 rounded">React Video</h2>
                <p className="font-sm text-gray-700  mt-5 text-center p-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto possimus dignissimos sapiente nihil, ipsa magni.
                </p>

                <div className="mt-2 bg-yellow-500">
                  <button className="w-full">Completed</button>
                </div>
       </div>
  )
}

export default CompleteTask