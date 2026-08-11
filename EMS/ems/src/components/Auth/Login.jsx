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

      <div className="flex place-content-center items-center h-screen w-screen bg-[url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg')] bg-cover ">
        <div className="border-2 border-gray-400 p-20 rounded-2xl text-md grid bg-gray-300 opacity-60">
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
