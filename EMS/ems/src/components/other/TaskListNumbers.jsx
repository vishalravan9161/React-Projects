// import React from 'react'

const TaskListNumbers = () => {
  return (
    <>
    
    <div className="flex screen justify-between gap-5 ">

        <div className=" w-[45%] p-10 rounded-2xl bg-red-400 text-white">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium"></h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-blue-400 text-white">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-green-400 text-white">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-yellow-400 text-white">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

    </div>
    
    </>
  )
}

export default TaskListNumbers