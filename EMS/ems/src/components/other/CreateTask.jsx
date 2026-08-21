import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find(
      (emp) =>
        emp.firstName.toLowerCase() ===
        assignedTo.trim().toLowerCase()
    );

    if (!employee) {
      alert("Employee not found!");
      return;
    }

    // New task
    const newTask = {
      active: true,
      newTask: true,
      failed: false,
      completed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    // Add task
    employee.tasks.push(newTask);

    // Update task numbers
    employee.taskNumber.newTask += 1;
    employee.taskNumber.active += 1;

    // Save updated data
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    console.log(employees)

    // Reset form
    setTaskTitle("");
    setTaskDate("");
    setAssignedTo("");
    setTaskDescription("");
    setCategory("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-start gap-10 justify-between p-20 bg-[url('https://images.pexels.com/photos/7134991/pexels-photo-7134991.jpeg')] bg-cover rounded-xl"
    >
      {/* Left Section */}
      <div className="w-1/2">
        <h1 className="text-md font-semibold">
          Task Title
        </h1>

        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Make a UI design"
          className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
        />

        <h2 className="text-md font-semibold mt-4">
          Date
        </h2>

        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
        />

        <h2 className="text-md font-semibold mt-4">
          Assign To
        </h2>

        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          placeholder="Employee Name"
          className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
        />

        <h2 className="text-md font-semibold mt-4">
          Category
        </h2>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Design / Development"
          className="w-full border-2 rounded-md p-2 border-gray-500 outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <h2 className="text-md font-semibold">
          Description
        </h2>

        <textarea
          value={taskDescription}
          onChange={(e) =>
            setTaskDescription(e.target.value)
          }
          placeholder="Detailed description of task"
          className="w-full p-5 h-50 rounded-md border-2 border-gray-800 mt-2 outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-green-400 text-xl font-semibold cursor-pointer active:scale-95 text-gray-900 w-full p-2 rounded-md mt-4"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;