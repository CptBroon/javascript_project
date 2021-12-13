import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import HomePage from "./HomePage";
import RegionsPage from "./RegionsPage";
import ConservationPage from "./ConservationPage";
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
            <header>
                <div id="top-bar">
                    Login
                </div>
                <div id="main-header" className="flex-row">
                    <div id="page-logo">Logo</div>
                    <nav id="nav-bar">
                        <Router>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/regions">Regions</Link>
                                </li>
                                <li>
                                    <Link to="/conservation">Conservation</Link>
                                </li>
                            </ul>
                        <Routes>
                            <Route path="/home" element={<HomePage/>}/>
                            <Route path="/regions" element={<RegionsPage/>}/>
                            <Route path="/conservation" element={<ConservationPage/>}/>
                        </Routes>
                        </Router>
                    </nav>
                </div>
            </header>
          <PageFooter />
        </>
      );
}

export default EducationalApp