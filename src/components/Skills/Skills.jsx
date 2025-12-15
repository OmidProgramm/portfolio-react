import React from 'react';
import './Skills.css';
import UIDsign from '../../assets/images/ui-design.png';
import WebDsign from '../../assets/images/website-design.png';
import AppDsign from '../../assets/images/app-design.png';

export const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with a strong focus on creating clean, responsive, and user-friendly websites that combine modern design principles with solid technical implementation.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="" alt="skill-image" className="skillBarImg" />
            </div>
        </div>
    </section>
  )
}
export default Skills;
