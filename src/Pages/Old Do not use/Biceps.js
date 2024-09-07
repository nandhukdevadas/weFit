// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import image1 from '../Images/EpzMl5cUYAE_bNb.jpeg';
// import image2 from '../Images/EpzMl5eVgAAwnsD.jpeg';
// import '../Pages/Shoulder.css';
// import video1 from '../Images/biceps/concentration-curls.mp4';
// import video2 from '../Images/biceps/cable-curls.mp4';
// import video3 from '../Images/biceps/chin-ups.mp4';
// import video4 from '../Images/biceps/preacher-curls.mp4';
// import video5 from '../Images/biceps/barbell-curls.mp4';
// import video6 from '../Images/biceps/incline-dumbell-curl.mp4';
// import video7 from '../Images/biceps/drag-curls.mp4';
// import video8 from '../Images/biceps/cross-hammer-curls.mp4';
// import video9 from '../Images/biceps/hammer-curls.mp4';
// import ReactPlayer from 'react-player';
// import { FaYoutube } from "react-icons/fa";
// import clickSound from '../Audio/screen-tap-38717.mp3';

// const Shoulder = () => {
//   const [audio] = useState(new Audio(clickSound));
//   const playClickSound = () => {
//     audio.play();
//   }

//   return (
//     <div>
//       <Navbar/>

//       <div className='image-section'>
//         <span className='shoulder-front-image'>
//         <img src={image1} alt="Image" />
//         </span>       
//       </div>

//       <div className='general-instructions'>
//         <div><b>General instructions</b></div>
//         <div>1. Aim for at least 3 sets, 8-12 reps each, for optimal training.</div>
//         <div>2. <b>Form First</b>: Choose weight that challenges you, but prioritize proper form over heavier loads.</div>
//         <div>3. <b>Move with Control</b>: Avoid jerky motions, breathe smoothly, and maintain core engagement.. Remember, form over ego!</div>
//         <div>4. <b>Respect Your Limits</b>: Listen to your body and adjust intensity to suit your capabilities.</div>
//       </div>

//       <div className='workout-list-shoulder'>

//         <div className='musclegroup-name'>Short Head</div>

//         {/* Front delts */}
//         <div className='workout-list-shoulder-front-delts'>

//           {/* Seated Dumbell shoulder press */}

//           <div className='workout-card seated-dumbell-press'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video1}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Seated Concentration Curls | <div className='youtube-icon' onClick={playClickSound}> <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a></div>
//             </div>
//             </div>
            
            
//           </div>

//           {/* Seated Barbell shoulder press */}
//           <div className='workout-card seated-dumbell-press'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video2}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Cable Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>         
//           </div>

//           {/* Seated Arnold Press */}
//           <div className='workout-card seated-dumbell-press'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video3}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Chin Ups | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Dumbell Front Raise */}
//           <div className='workout-card seated-dumbell-press'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video4}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Preacher Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>
//         </div>

//         <div className='workout-card seated-dumbell-press'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video5}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Barbell Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>
//         </div>

//         <div className='musclegroup-name'>Long Head</div>

//         {/* Side delts */}
//         <div className='workout-list-shoulder-side-delts'>

//           {/* Dumbell Lateral Raise */}
//           <div className='workout-card'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video6}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Incline Dumbbell Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Lying Incline Lateral Raise */}
//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video8}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Cross Hammer Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Cable Incline Lateral Raise */}
//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video7}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Drag Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//         <div className='musclegroup-name'>Brachialis</div>

//         {/* Rear delts */}
//         <div className='workout-list-shoulder-rear-delts' >
//           {/* Dumbell Lateral Raise */}
//           <div className='workout-card'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video9}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Hammer Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Cable Incline Lateral Raise */}
//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video8}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Cross Hammer Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Shoulder