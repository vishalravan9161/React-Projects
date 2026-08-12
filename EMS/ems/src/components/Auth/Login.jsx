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
        <div className="border-5 border-gray-800 p-20 rounded-2xl text-md grid opacity-60">
            <form  onSubmit={(e)=>{
                submithandler(e)
              }}
            
            className="grid gap-4">
              <input 
              value={Email}
              onChange={(e)=>{
               setEmail(e.target.value)
              }}
              className="border-2 p-1 border-emerald-800 outline-none rounded"
               placeholder="Enter your email" type="email" required />

              <input  
               value={Password}
              onChange={(e)=>{
               setPassword(e.target.value)
              }}
              className="border-2 border-emerald-800 p-1 outline-none rounded"
              placeholder="Password" type="password" required />

              <button
              className=" cursor-pointer active:scale-95 rounded p-2 bg-green-500 font-semibold ">Login</button>
            </form>
        </div>
           
      </div>

  </>
  )
}

export default Login;
