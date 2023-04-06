import React from "react";
import Home from './components/Home'
import Crew from './components/Crew'
import Technology from './components/Technology'
import Destination from './components/Destination'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Crew" element={<Crew />}></Route>
          <Route path="/Destination" element={<Destination />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
