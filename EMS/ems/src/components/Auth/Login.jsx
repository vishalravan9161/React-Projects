// import React from 'react'
import { useState } from "react"
const Login = ({handleLogin}) => {



   const [Email, setEmail] = useState('')
   const [Password, setPassword] = useState('')

  const submithandler = (e)=>{
    e.preventDefault()
    handleLogin(Email,Password)
    //  console.log("Email is-",Email)
    //   console.log("Password is-",Password)
      setEmail('')
      setPassword('')
  }


  return( <>

      <div className="flex place-content-center items-center h-screen w-screen bg-[url('https://images.unsplash.com/photo-1507187632231-5beb21a654a2?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover ">
        <div className="border-2 border-gray-400 p-20 rounded-2xl text-md grid bg-gray-300 opacity-90">
            <form  onSubmit={(e)=>{
                submithandler(e)
              }}
            
            className="grid gap-4">
              <input 
              value={Email}
              onChange={(e)=>{
               setEmail(e.target.value)
              }}
              className="border-2 p-1 border-emerald-400 outline-none rounded"
               placeholder="Enter your email" type="email" required />

              <input  
               value={Password}
              onChange={(e)=>{
               setPassword(e.target.value)
              }}
              className="border-2 border-emerald-400 p-1 outline-none rounded"
              placeholder="Password" type="password" required />

              <button
              className=" rounded  bg-emerald-500  ">Login</button>
            </form>
        </div>
           
      </div>

  </>
  )
}

export default Login;
