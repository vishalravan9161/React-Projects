// import React from 'react'

import { useContext} from "react"
import { AuthContext } from "../../context/AuthProvider"


const AllTask = () => {
   const AuthData = useContext(AuthContext)

//    console.log(AuthData)
  return (

    <div className="bg-gray-300 mt-5  rounded-xl p-5 "> 

                <div className="bg-red-400 mt-3 flex font-medium justify-between p-2 rounded">
                    <h2 className="w-1/5 ">Employee Name</h2>
                    <h2 className="w-1/5">New Task</h2>
                    <h2 className="w-1/5">Active Task</h2>
                    <h2 className="w-1/5">Completed</h2>
                    <h2 className="w-1/5">Failed</h2>
                </div>


           <div className="h-[80%] overflow-auto">
             {AuthData.employees.map(function(elem,idx){
            return  <div key={idx} className=" mt-3 border-2 border-blue-400 flex justify-between px-8 py-2  rounded"> 
                    <h2 className="w-1/5 text-md font-semibold ">{elem.firstName}</h2>
                    <h2 className="w-1/5 text-blue-700">{elem.taskNumber.newTask}</h2>
                    <h2 className="w-1/5 text-orange-500">{elem.taskNumber.active}</h2>
                    <h2 className="w-1/5 text-green-600">{elem.taskNumber.completed}</h2>
                    <h2 className="w-1/5 text-red-400">{elem.taskNumber.failed}</h2>
        </div>
            })}
           </div>

        

    </div>
  )
}

export default AllTask