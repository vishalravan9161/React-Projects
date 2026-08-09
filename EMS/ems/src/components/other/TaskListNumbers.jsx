// import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <>
    
    <div className="flex screen justify-between gap-5 ">

        <div className=" w-[45%] p-10 rounded-2xl bg-red-400 text-white">
            <h2 className="text-3xl font-semibold">{data.taskNumber.newTask}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-blue-400 text-white">
            <h2 className="text-3xl font-semibold">{data.taskNumber.completed}</h2>
            <h3 className="text-xl font-medium">Completed Task</h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-green-400 text-white">
            <h2 className="text-3xl font-semibold">{data.taskNumber.active}</h2>
            <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>

         <div className=" w-[45%] p-10 rounded-2xl bg-yellow-400 text-white">
            <h2 className="text-3xl font-semibold">{data.taskNumber.failed}</h2>
            <h3 className="text-xl font-medium">Failed Task</h3>
        </div>

    </div>
    
    </>
  )
}

export default TaskListNumbers