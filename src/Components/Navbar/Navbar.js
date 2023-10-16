import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Maincontainer'>
    <div className='leftside'>
        <div style={{backgroundColor:"white"}}>APP LOGO</div>
    </div>
    <div className='Rightside_nav' >
        <div style={{backgroundColor:"white"}}>DASHBOARD</div>
        <div style={{backgroundColor:"white"}}>CREATE ADD</div>
    </div>
    </div>
  )
}

export default Navbar