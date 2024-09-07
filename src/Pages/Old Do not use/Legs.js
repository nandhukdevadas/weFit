// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import image1 from '../Images/EpzMl5cUYAE_bNb.jpeg';
// import image2 from '../Images/EpzMl5eVgAAwnsD.jpeg';
// import '../Pages/Shoulder.css';
// import video1 from '../Images/legs/barbell-squats.mp4';
// import video2 from '../Images/legs/split-squats.mp4';
// import video3 from '../Images/legs/leg-extension.mp4';
// import video4 from '../Images/legs/hamstring-curls.mp4';
// import video5 from '../Images/legs/sumo-squats.mp4';
// import video6 from '../Images/legs/calf-raise.mp4';
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

//         <div className='musclegroup-name'>Quads</div>
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
//               Crunches | <div className='youtube-icon' onClick={playClickSound}> <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a></div>
//               </div>
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
//               Split Squats | <div className='youtube-icon' onClick={playClickSound}> <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a></div>
//               </div>
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
//               Leg Extension | <div className='youtube-icon' onClick={playClickSound}> <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a></div>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>

//         <div className='musclegroup-name'>Hamstring</div>

//         <div className='workout-list-shoulder-side-delts'>

//           <div className='workout-card'>
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
//               Hamstring Curls | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

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
//               Sumo Squats | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//         <div className='musclegroup-name'>Calves</div>


//         <div className='workout-list-shoulder-rear-delts' >

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
//               Calf Raise | <div className='youtube-icon'> <Link to=''><FaYoutube /></Link></div>
//             </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shoulder