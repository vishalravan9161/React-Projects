// import React from 'react'

import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
  return (
    <div className="bg-gray-200 h-screen  p-10">
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    
    </div>
  )
}

export default EmployeeDashboard