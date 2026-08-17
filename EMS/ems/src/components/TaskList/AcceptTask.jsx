// import React from 'react'

const AcceptTask = ({ data }) => {
  // console.log(data.taskTitle)
  return (
    <div className=" h-full shrink-0 w-75 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center p-5">
        <h3 className="bg-red-600 px-3 py-1 rounded-md font-medium text-white ">
          {data.category}
        </h3>
        <h4 className="font-medium text-gray-700 bg-yellow-500 px-5 rounded-md">
          {data.taskDate}
        </h4>
      </div>
      <h2 className=" text-2xl text-white text-center font-semibold bg-amber-800 rounded">
        {data.taskTitle}
      </h2>
      <p className="font-sm text-gray-700  mt-5 text-center p-1">
        {data.taskDescription}
      </p>

      <div className="flex justify-between mt-4 p-2">
        <button className="bg-green-500 rounded cursor-pointer active:scale-95 py-1 px-2 text-sm">
          Mark as Comleted
        </button>
        <button className="bg-red-500 rounded cursor-pointer active:scale-95 py-1 px-2 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
