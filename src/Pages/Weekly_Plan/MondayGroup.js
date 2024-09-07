import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../Components/Navbar';

import image1 from '../../Images/back-arms-up-transparent.png';
import image2 from '../../Images/biceps-transparent.png';

import '../Shoulder_Group.css';

const Shoulder_Group = () => {
  
  return (
    
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}

        <div className='go-back-icon'>
            <Link to='/'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div>

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Monday & Thursday</div>
            <div className='description'>On monday and thursday, focus on</div>
            <div className='description'>back and biceps.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsBackGroup' >Back</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsBackGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image2} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupBicepsGroup' >Biceps</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupBicepsGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

    </div>
  )
}

export default Shoulder_Group