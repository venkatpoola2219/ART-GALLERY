import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import pic from './Images/logoven.png'

export default function Navbar() {
  return (
 <div className='container-fluid '>
    <nav className="navbar1 navbar-expand-lg" id="nav"style={{paddingTop:'30px' }} >
      
         
          <Link className="navbar-brand" to="/" id="logo">
            <img src={pic} alt="" width={120} height={70}  />
         
          </Link>
         <Link to="" style={{textDecoration:'none'}} > <span className='app-title ' ><b style={{color:'white'}}>BOOKS LIST</b></span> </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link text-light" to="/ArtworkList">
                  
                </Link>
              </li>
             
              </ul>
              </div>
       
      </nav> 
      </div>
  )
}
