// import React from 'react'

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className=" h-[55%] w-full flex items-center overflow-x-auto justify-start flex-nowrap gap-5 py-5 mt-10 ">
       
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask />
       
    </div>
  )
}

export default TaskList