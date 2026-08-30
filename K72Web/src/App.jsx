// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Agence from "./Pages/Agence"
import Projects from "./Pages/Projects"
import Navbar from "./components/Navigation/Navbar"
const App = () => {
  
  return (
    <div className=" h-screen"> 
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/agence" element={<Agence/>}/>
       <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  ) 
}

export default App