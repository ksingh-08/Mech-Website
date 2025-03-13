import React from 'react';
import WhyLNMIITsection from '../WhySection/WhyLNMIITsection';
import ExperienceCard from '../Path/ExperienceCard';
import Achievements from '../AchievementCard/AchievementCard';


function Scope() {
  return (
    <>
      <div>
        {/* Shaily */}
        <WhyLNMIITsection />
      </div>
      <div>
        {/* Ankur */}
        <Achievements/>
      </div>
      <div>
        {/* Karan */}
        <ExperienceCard/>
        
      </div>
      
    </>
  );
}

export default Scope;
