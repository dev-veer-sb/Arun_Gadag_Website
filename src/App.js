// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,Navigate 
} from "react-router-dom";
import Home from "./components/homePage";
import About from "./components/aboutPage";
import Contact from "./components/contactPage";
import Navigation from "./components/navigationMenu";
import Footer from "./components/footerMenu";
import Services from "./components/servicesPage";
import Practice from "./components/practicePage";
import Gallery from "./components/galleryPage";
import './App.css'
import ScrollTop from "./components/scrollToTop";
import Litigation from "./components/litigationPage";
import NonLitigation from "./components/nonLitigationPage";
import RealEstate from "./components/realEstatePage";

function App() {
    return (
      <div className="background">
        <Router>
          <ScrollTop/>
          <Navigation/>
            <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/service" element={<Services />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/litigation" element={<Litigation/>} />
                <Route path="/nonlitigation" element={<NonLitigation />} />
                <Route path="/realestate" element={<RealEstate />} />


            </Routes>
            <Footer/>
        </Router>
        </div>
    );
}

export default App;
