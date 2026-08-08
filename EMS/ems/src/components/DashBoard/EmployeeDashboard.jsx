// import React from 'react'

import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className="bg-gray-200 h-screen  p-10">
      <Header/>
      <TaskListNumbers />
      <TaskList />
    
    </div>
  )
}

export default EmployeeDashboard