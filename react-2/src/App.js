import React from 'react'
//import axios from 'axios'
//import Sample from './Axios/Sample'
import Navbar from './Restaurent/Navbar'
import Home from './Restaurent/Home'
import About from './Restaurent/About'
import Contact from './Restaurent/Contact'
import Testimonials from './Restaurent/Testimonials'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/testimonials" element={<Testimonials/>}></Route>
      </Routes>
    </Router>
  
    
  </>
   
  ) 
}

export default App