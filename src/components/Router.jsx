import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function Routers() {
  return (
   <>
     <Router>
      <Nav></Nav>
    <Routes>
    <Route  exact path='/'element = {<Home />} /> 
    <Route  path='/login'element = {<Login />} />      
    </Routes>
     </Router>
   
   </>
  );
}

export default Routers;