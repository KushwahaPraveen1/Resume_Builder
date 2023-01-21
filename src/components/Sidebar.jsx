import React from 'react';
import "./Sidebar.css"

function Sidebar() {
  return (
    <>
        <div className='sidebar'>
          <ul>
            <li>Personal Details</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Languages</li>
            <li>About Me</li>
        </ul>
        </div>
    </>
  )
}

export default Sidebar;