import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../../Components/Navbar';

import image3 from '../../../Images/twist-front-transparent.png';
import image4 from '../../../Images/side-transparent.png';
import image5 from '../../../Images/twist-back-transparent.png';

import '../../Shoulder_Group.css';

const Shoulder_Group = () => {
  
  return (
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}
        {/* <div className='go-back-icon'>
            <Link to='/muscleMovementPushGroup'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Shoulder</div>
            <div className='description'>has 3 muscles group in total, You must</div>
            <div className='description'>do atleast 1 workout for each group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupFrontDeltoid' >Front Deltoid</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupFrontDeltoid' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image4} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupSideDeltoid' >Side Deltoid</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupSideDeltoid' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image5} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleGroupRearDeltoid' >Rear Deltoid</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleGroupRearDeltoid' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Shoulder_Group