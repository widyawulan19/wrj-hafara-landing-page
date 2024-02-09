import React from 'react'
import '../style/navbar-style.css'

const Navbar = () => {
  return (
    <>
         <div className="Navbar-Container">
        <ul>
            <img src="./images/logo.png" alt="" />
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BENEFIT</li>
            <li>PRODUCT</li>
            <li>CONTACT</li>
            <button>Donasi Di Sini</button>
        </ul>
        </div>
    </>
  )
}

export default Navbar