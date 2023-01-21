import React from 'react'
import './Personal.css'
import Sidebar from './Sidebar'

function Personal() {
  return (
    <>
  <div className='experience_main1'>
  <div className='side'>
      <Sidebar/>
    </div>
  <div className='main'>
  <h3>Personal Details</h3>
  <div className="center"> <div className="inputbox inputbox2"> <input type="text" required="required" /> <span>First Name</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox2"> <input type="text" required="required" /> <span>Last Name</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox2"> <input type="text" required="required" /> <span>Job Title</span> </div> </div>
  <br></br>
  <br></br>
  <h5 className='contact_details'>CONTACT DETAILS</h5>
  <div className="center"> <div className="inputbox inputbox2"> <input type="text" required="required" /> <span>Phone Number</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox2"> <input type="email" required="required" /> <span>Email Address</span> </div> </div>
  <h5 className='location_detail'>LOCATION</h5>
  <div className='location_personal'>
  <div className="center"> <div className="inputbox inputbox2 x"> <input type="text" required="required" /> <span>Phone Number</span> </div> </div>
  <div className="center"> <div className="inputbox inputbox2 x"> <input type="email" required="required" /> <span>Email Address</span> </div> </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Personal