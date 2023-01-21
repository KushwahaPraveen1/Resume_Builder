import React from "react";
import "./Experience.css";
import Sidebar from './Sidebar'
function Experience() {
  return (
    <>
      <div className="_experience">
      <div className='side'>
      <Sidebar/>
    </div>

        <div className="experience_main">
          <div className="main">
            <h3>Experience</h3>
            <div className="center">
              {" "}
              <div className="inputbox inputbox1">
                {" "}
                <input type="text" required="required" /> <span>Job Ttile</span>{" "}
              </div>{" "}
            </div>
            <div className="center">
              {" "}
              <div className="inputbox inputbox2">
                {" "}
                <input type="text" required="required" />{" "}
                <span>Company or Project Name</span>{" "}
              </div>{" "}
            </div>
            <div className="center">
              {" "}
              <div className="inputbox inputbox3">
                {" "}
                <input type="date" required="required" /> <span></span>{" "}
              </div>{" "}
            </div>
            <div className="center">
              {" "}
              <div className="inputbox inputbox4">
                {" "}
                <input type="text" required="required" />{" "}
                <span>Accomplishment</span>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
