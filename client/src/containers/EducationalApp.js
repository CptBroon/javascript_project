import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import HomePage from "./HomePage";
import RegionsPage from "./RegionsPage";
import ConservationPage from "./ConservationPage";
import logo from "../img/bbc-logo.png";
import { useState, useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

const EducationalApp = () => {

    const [allAnimals, setAllAnimals] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/animals")
            .then(res => res.json())
            .then(data => setAllAnimals(data))
    }, []) 

    return (
        <>
            <Router>
            <header className="flex-column">
                <div id="top-bar">
                    Login
                </div>
                <div id="main-header" className="flex-row">
                    <div id="page-logo" className="flex-row">
                        <img id="logo" src={logo} alt="BBC"/>
                        <h2>Education App</h2>
                    </div>
                    <nav id="nav-bar">
                        <ul className="flex-row">
                            <li>
                                <Link to="/home"><i className="fas fa-home"></i> Home</Link>
                            </li>
                            <li>
                                <Link to="/regions"><i className="fas fa-globe-americas"></i> Regions</Link>
                            </li>
                            <li>
                                <Link to="/conservation" ><i className="fas fa-leaf"></i> Conservation</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/regions" element={<RegionsPage/>}/>
                <Route path="/conservation" element={<ConservationPage/>}/>
            </Routes>
          <PageFooter />
          </Router>
        </>
      );
}

export default EducationalApp