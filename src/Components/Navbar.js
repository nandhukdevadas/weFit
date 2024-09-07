import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
  return (
    <div>
        {/* -----Navbar Desktop------ */}

      <span className='navbar'>
        <div className='title'><Link to='/' >WeFit</Link></div>
      </span>
      
    </div>
  )
}

export default Navbar