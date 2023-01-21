import React from 'react'
import './Education.css'
import Sidebar from './Sidebar'

function Education() {
  return (
    <div className='cnt'>
    <div className='side'>
      <Sidebar/>
    </div>
  <div className='experience_main'>
  <div className='main'>
  <h3>Education</h3>
  <div className="center"> <div className="inputbox inputbox1"> <input type="text" required="required" /> <span>University/School</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox2"> <input type="text" required="required" /> <span>Degree (Eg.Bachelor's  degree High school, etc.)</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox4"> <input type="text" required="required" /> <span>Graduation Year</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox4"> <input type="text" required="required" /> <span>Field of Study</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox4"> <input type="text" required="required" /> <span>Achievements</span> </div> </div>
  </div>
  </div>

    </div>
  )
}

export default Education