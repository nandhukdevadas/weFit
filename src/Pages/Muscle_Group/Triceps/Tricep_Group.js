import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/triceps-transparent.png';
import '../../Shoulder_Group.css';


const Shoulder_Group = () => {
  
  return (
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}

        {/* <div className='go-back-icon'>
            <Link to='/'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Triceps</div>
            <div className='description'>has 3 muscles group in total, You must</div>
            <div className='description'>do atleast 1 workout for each group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupLongHeadTriceps' >Long Head</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupLongHeadTriceps' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupLateralHead' >Lateral Head</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupLateralHead' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleGroupMedialHead' >Medial Head</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleGroupMedialHead' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Shoulder_Group