import Home from './Pages/Home';

import ShoulderGroup from './Pages/Muscle_Group/Shoulder/Shoulder_Group';
import FrontDeltoid from './Pages/Muscle_Group/Shoulder/FrontDeltoid';
import SideDeltoid from './Pages/Muscle_Group/Shoulder/SideDeltoid';
import RearDeltoid from './Pages/Muscle_Group/Shoulder/RearDeltoid';

import BackGroup from './Pages/Muscle_Group/Back/Back_Group';
import UpperBack from './Pages/Muscle_Group/Back/UpperBack';
import Lats from './Pages/Muscle_Group/Back/Lats';
import LowerBack from './Pages/Muscle_Group/Back/LowerBack';

import ChestGroup from './Pages/Muscle_Group/Chest/Chest_Group';
import UpperChest from './Pages/Muscle_Group/Chest/UpperChest';
import LowerChest from './Pages/Muscle_Group/Chest/LowerChest';
import MidChest from './Pages/Muscle_Group/Chest/MidChest';

import BicepsGroup from './Pages/Muscle_Group/Biceps/Bicep_Group';
import LongHead from './Pages/Muscle_Group/Biceps/LongHead';
import ShortHead from './Pages/Muscle_Group/Biceps/ShortHead';
import Brachialis from './Pages/Muscle_Group/Biceps/Brachialis';

import TricepsGroup from './Pages/Muscle_Group/Triceps/Tricep_Group';
import LongHeadTriceps from './Pages/Muscle_Group/Triceps/LongHeadTricep';
import LateralHead from './Pages/Muscle_Group/Triceps/Lateral_Head';
import MedialHead from './Pages/Muscle_Group/Triceps/Medial_Head';

import AbsGroup from './Pages/Muscle_Group/Abs/Abs_Group';
import UpperAbs from './Pages/Muscle_Group/Abs/UpperAbs';
import LowerAbs from './Pages/Muscle_Group/Abs/LowerAbs';
import Oblique from './Pages/Muscle_Group/Abs/Oblique';

import LegsGroup from './Pages/Muscle_Group/Legs/LegsGroup';
import Quads from './Pages/Muscle_Group/Legs/Quads';
import Hamstrings from './Pages/Muscle_Group/Legs/Hamstrings';
import Calves from './Pages/Muscle_Group/Legs/Calves';

import PushGroup from './Pages/Muscle_Movement/Push/PushGroup';
import PullGroup from './Pages/Muscle_Movement/Pull/PullGroup';

import ChestGroupPush from './Pages/Muscle_Movement/Push/Chest_Group_For_Push';
import TricepsGroupPush from './Pages/Muscle_Movement/Push/Tricep_Group_For_Push';
import ShouldersGroupPush from './Pages/Muscle_Movement/Push/Shoulder_Group_For_Push';

import BackGroupPull from './Pages/Muscle_Movement/Pull/Back_Group_For_Pull';
import BicepsGroupPull from './Pages/Muscle_Movement/Pull/Bicep_Group_For_Pull';
import ShoulderGroupPull from './Pages/Muscle_Movement/Pull/Shoulder_Group_For_Pull';

import MondayGroup from './Pages/Weekly_Plan/MondayGroup';
import BackGroupMonThr from './Pages/BackGroup_For_Mon_Thr';
import TuesdayGroup from './Pages/Weekly_Plan/Tuesday_Group';
import WednesdayGroup from './Pages/Weekly_Plan/Wednesday_Group';
import SaturdayGroup from './Pages/Weekly_Plan/Saturday_Group';

import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>

        {/* Shoulders */}
        <Route path='/muscleGroupShoulderGroup' element={<ShoulderGroup/>}></Route>
        <Route path='/muscleGroupFrontDeltoid' element={<FrontDeltoid/>}></Route>
        <Route path='/muscleGroupSideDeltoid' element={<SideDeltoid/>}></Route>
        <Route path='/muscleGroupRearDeltoid' element={<RearDeltoid/>}></Route>

        {/* Back */}
        <Route path='/muscleGroupsBackGroup' element={<BackGroup/>}></Route>
        <Route path='/muscleGroupsUpperBack' element={<UpperBack/>}></Route>
        <Route path='/muscleGroupsLats' element={<Lats/>}></Route>
        <Route path='/muscleGroupsLowerBack' element={<LowerBack/>}></Route>

        {/* Chest */}
        <Route path='/muscleGroupsChestGroup' element={<ChestGroup/>}></Route>
        <Route path='/muscleGroupsUpperChest' element={<UpperChest/>}></Route>
        <Route path='/muscleGroupsMidChest' element={<MidChest/>}></Route>
        <Route path='/muscleGroupsLowerChest' element={<LowerChest/>}></Route>

        {/* Biceps */}
        <Route path='/muscleGroupBicepsGroup' element={<BicepsGroup/>}></Route>
        <Route path='/muscleGroupLongHead' element={<LongHead/>}></Route>
        <Route path='/muscleGroupShortHead' element={<ShortHead/>}></Route>
        <Route path='/muscleGroupBrachialis' element={<Brachialis/>}></Route>

        {/* Triceps */}
        <Route path='/muscleGroupTricepsGroup' element={<TricepsGroup/>}></Route>
        <Route path='/muscleGroupLongHeadTriceps' element={<LongHeadTriceps/>}></Route>
        <Route path='/muscleGroupLateralHead' element={<LateralHead/>}></Route>
        <Route path='/muscleGroupMedialHead' element={<MedialHead/>}></Route>

        {/* Abs */}
        <Route path='/muscleGroupAbsGroup' element={<AbsGroup/>}></Route>
        <Route path='/muscleGroupUpperAbs' element={<UpperAbs/>}></Route>
        <Route path='/muscleGroupLowerAbs' element={<LowerAbs/>}></Route>
        <Route path='/muscleGroupOblique' element={<Oblique/>}></Route>

        {/* Legs */}
        <Route path='/muscleGroupLegsGroup' element={<LegsGroup/>}></Route>
        <Route path='/muscleGroupQuads' element={<Quads/>}></Route>
        <Route path='/muscleGroupHamstrings' element={<Hamstrings/>}></Route>
        <Route path='/muscleGroupCalves' element={<Calves/>}></Route>
        
        {/* Push */}
        <Route path='/muscleMovementPushGroup' element={<PushGroup/>}></Route>
        <Route path='/muscleMovementChestGroupPush' element={<ChestGroupPush/>}></Route>
        <Route path='/muscleMovementTricepsGroupPush' element={<TricepsGroupPush/>}></Route>
        <Route path='/muscleMovementShouldersGroupPush' element={<ShouldersGroupPush/>}></Route>

        {/* Pull */}
        <Route path='/muscleMovementPullGroup' element={<PullGroup/>}></Route>
        <Route path='/muscleMovementBackGroupPull' element={<BackGroupPull/>}></Route>
        <Route path='/muscleMovementBicepsGroupPull' element={<BicepsGroupPull/>}></Route>
        <Route path='/muscleMovementShouldersGroupPull' element={<ShoulderGroupPull/>}></Route>

        {/* Weekly */}
        <Route path='/weeklyWorkoutMonday' element={<MondayGroup/>}></Route>
        <Route path='/weeklyWorkoutTuesday' element={<TuesdayGroup/>}></Route>
        <Route path='/weeklyWorkoutWednesday' element={<WednesdayGroup/>}></Route>
        <Route path='/weeklyWorkoutSaturday' element={<SaturdayGroup/>}></Route> 

      </Routes>
    </AnimatePresence>
  );
}

export default App;
