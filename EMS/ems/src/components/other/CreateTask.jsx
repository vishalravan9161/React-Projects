// import React from 'react'

import { useState } from "react";
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assingto, setAssingto] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Newtask, setNewTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      NewTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    // console.log(data)

    data.forEach(function (elem) {
      if (assingto == elem.firstName) {
        elem.tasks.push(Newtask);
        console.log(elem);
      }
    });
    // console.log(data)
    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle('')
    setTaskDate('')
    setCategory('')
    setTaskDescription('')
    setAssingto('')
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="flex items-start gap-5 justify-between p-20  bg-[url('https://images.pexels.com/photos/7134991/pexels-photo-7134991.jpeg')] bg-cover rounded-xl"
    >
      <div>
        <h1 className="text-md font-semibold ">Task title</h1>
        <input
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          className="w-full border-2 rounded-md p-2 border-gray-500  outline-none"
          type="text"
          placeholder="Make a UI design"
        />

        <div>
          <h2 className="text-md font-semibold mt-2">Date</h2>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
            type="date"
            name=""
            id=""
          />
        </div>
        <div>
          <h2 className="text-md font-semibold mt-2 ">Assign To</h2>
          <input
            value={assingto}
            onChange={(e) => {
              setAssingto(e.target.value);
            }}
            className="w-full  border-2 rounded-md p-2 border-gray-500  outline-none"
            type="text"
            name=""
            id=""
            placeholder="Employee Name"
          />
          <div>
            <h2 className="text-md font-semibold  mt-2">Category</h2>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-110  border-2 rounded-md p-2 border-gray-500  outline-none"
              type="text"
              placeholder="Design / Devolopment etc."
            />
          </div>
        </div>
      </div>

      <div className="items-center">
        <h2 className="text-md font-semibold">Description</h2>
        <textarea
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          className="w-full p-5 h-50 rounded-md border-2 border-gray-800 mt-5 outline-none"
          name=""
          id=""
          placeholder="Detailed description of task"
        ></textarea>
        <button className="bg-green-400 text-xl font-semibold cursor-pointer active:scale-95 text-gray-900 w-full p-2 rounded-md">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
