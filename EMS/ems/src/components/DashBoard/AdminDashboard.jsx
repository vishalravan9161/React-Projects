import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

// import React from 'react'

const AdminDashboard = (props) => (
  <div className="p-3 bg-[url('https://images.pexels.com/photos/7134991/pexels-photo-7134991.jpeg')] bg-cover h-screen ">
    <Header data={props.data} changeUser={props.changeUser} />
    <CreateTask />
    <AllTask />
  </div>
);

export default AdminDashboard;
