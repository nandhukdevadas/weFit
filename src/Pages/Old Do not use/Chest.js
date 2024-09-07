// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import image1 from '../Images/EpzMl5cUYAE_bNb.jpeg';
// import image2 from '../Images/EpzMl5eVgAAwnsD.jpeg';
// import '../Pages/Shoulder.css';
// import video1 from '../Images/chest/incline-dumbbell-press.mp4';
// import video2 from '../Images/chest/incline-barbell-bench-press.mp4';
// import video3 from '../Images/chest/low-high-cable-cross-over.mp4';
// import video4 from '../Images/chest/dumbbell-pull-over.mp4';
// import video5 from '../Images/chest/cable-flys.mp4';
// import video6 from '../Images/chest/barbell-bench-press.mp4';
// import video7 from '../Images/chest/pec-deck-machine.mp4';
// import video8 from '../Images/chest/pinch-press.mp4';
// import video9 from '../Images/chest/incline-cable-flys.mp4';
// import video10 from '../Images/chest/high-low-cable-cross-over.mp4';
// import video11 from '../Images/chest/chest-dips.mp4';
// import video12 from '../Images/chest/dumbbell-press.mp4';
// import video13 from '../Images/chest/decline-dumbbell-press.mp4';
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

//         <div className='musclegroup-name'>Upper Chest</div>

//         <div className='workout-list-shoulder-front-delts'>


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
//               Incline Dumbbell Press | <div className='youtube-icon' onClick={playClickSound}> <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a></div>
//             </div>
//             </div>
            
            
//           </div>


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
//               Incline Barbell Bench Press | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>         
//           </div>


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
//               Low-High Cable Cross Over | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

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
//               Dumbbell Pullover | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>
//         </div>

//         <div className='musclegroup-name'>Mid Chest</div>

//         <div className='workout-list-shoulder-side-delts'>

//           {/* Dumbell Lateral Raise */}
//           <div className='workout-card'>
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
//               Standing Cable Fly | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Lying Incline Lateral Raise */}
//           <div className='workout-card '>
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
//               Barbell Bench Press | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
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
//               Pec Deck Machine | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Seated Dumbell Shoulder Press */}
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
//               Pinch Press | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           {/* Dumbell Lateral Raise */}
//           <div className='workout-card '>
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
//               Incline Cable Flys | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>
//         </div>

//         <div className='musclegroup-name'>Lower Chest</div>

//         <div className='workout-list-shoulder-rear-delts' >
//           <div className='workout-card'>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video10}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               High-Low Cable Cross over | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video11}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Chest Dips | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           <div className='workout-card '>
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
//               Standing Cable Flys | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video12}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Dumbbell Press | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//           <div className='workout-card '>
//           <div className='workout-demo'>
//               <ReactPlayer
//               url={video13}
//               playing
//               loop
//               height='calc(80px + 8vw)'
//               width='100%'
//               className='react-player'
//               />
//               <div className='workout-name'>
//               Decline Barbell Bench Press | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shoulder