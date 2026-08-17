// import React from 'react'

import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/6985184/pexels-photo-6985184.jpeg')] bg-cover h-screen  p-10">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    
    </div>
  )
}

export default EmployeeDashboard