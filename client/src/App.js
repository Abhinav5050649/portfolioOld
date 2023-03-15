import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from './components/contact';
import Project from './components/projects';
import Home from './components/home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="App">
            <Routes>
              <Route exact path='/' element={<Home key="home"/>}/>
              <Route exact path='/projects' element={<Project key="projects"/>}/>
              <Route exact path='/contact' element={<Contact key="contact"/>}/>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;