import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function Pages() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        </>
  )
}

export default Pages