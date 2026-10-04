// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </div>
  );
};

export default App;
