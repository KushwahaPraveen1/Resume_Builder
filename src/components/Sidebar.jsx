import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"

function Sidebar() {
  return (
    <>
        <div className='sidebar'>
          <ul>
           <NavLink to ="/personal-details" className="_nav"><li>Personal Details</li></NavLink> 
           <NavLink to ="/experience" className="_nav"><li>Experience</li></NavLink>
           <NavLink to ="/education"className="_nav"><li>Education</li></NavLink>
           <NavLink to ="/Skills" className="_nav"><li>Skills</li></NavLink>
            <li>Languages</li>
            <li>About Me</li>
        </ul>
        </div>
    </>
  )
}

export default Sidebar;