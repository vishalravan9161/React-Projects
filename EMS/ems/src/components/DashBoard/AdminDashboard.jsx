import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"

// import React from 'react'

const AdminDashboard = () => (
  <div className="p-3 bg-gray-200 h-screen ">
    <Header />
     <CreateTask />
     <AllTask />
  </div>
)

export default AdminDashboard