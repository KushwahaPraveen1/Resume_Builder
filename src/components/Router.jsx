import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Education from "./Education";
import Experience from "./Experience";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from "./Footer";
// import { Footer } from "./Footer";

function Routers() {
  return (
   <>
     <Router>
      <Nav></Nav>
    <Routes>
    <Route  exact path='/'element = {<Home />} /> 
    <Route  path='/login'element = {<Login />} />   
    <Route path='/education' element = {<Education/>}/>   
    <Route path='/experience' element = {<Experience/>}/>   
    <Route path='/sidebar' element = {<Sidebar/>}/>
    </Routes>
     </Router>
   <Footer/>
   </>
  );
}

export default Routers;