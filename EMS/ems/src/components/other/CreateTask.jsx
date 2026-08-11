// import React from 'react'

const CreateTask = () => {
  return (
    <form className="flex items-start gap-5 justify-between p-20  bg-[url('https://images.pexels.com/photos/7134991/pexels-photo-7134991.jpeg')] bg-cover rounded-xl">
        <div className="">
        <h1 className="text-md font-semibold ">Task title</h1>
        <input className="w-full border-2 rounded-md p-2 border-gray-500  outline-none"
        type="text" placeholder="Make a UI design" />

          
      <div>
        <h2 className="text-md font-semibold mt-2">Date</h2>
        <input className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
        type="date" name="" id="" />
      </div>
      <div>
        <h2 className="text-md font-semibold mt-2 ">Assign To</h2>
        <input className="w-full  border-2 rounded-md p-2 border-gray-500  outline-none"
        type="text" name="" id="" placeholder="Employee Name" />
        <div>
          <h2 className="text-md font-semibold  mt-2">Category</h2>
          <input className="w-110  border-2 rounded-md p-2 border-gray-500  outline-none"
          type="text" placeholder="Design / Devolopment etc."/>
        </div>

        
      </div>

      </div>

      <div className="items-center">
        <h2 className="text-md font-semibold">Description</h2>
        <textarea className="w-full p-5 h-50 rounded-md border-2 border-gray-800 mt-5 outline-none"
          name="" id="" placeholder="Detailed description of task"></textarea>
         <button className="bg-green-400 text-xl font-semibold cursor-pointer active:scale-95 text-gray-900 w-full p-2 rounded-md">Create Task</button>
      </div>
           

      </form>
  )
}

export default CreateTask