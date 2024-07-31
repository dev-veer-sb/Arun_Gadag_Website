// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Home from "./components/homePage";
import About from "./components/aboutPage";
import Contact from "./components/contactPage";
import Navigation from "./components/navigationMenu";
import Footer from "./components/footerMenu";
import Services from "./components/servicesPage";
import Practice from "./components/practicePage";
import Gallery from "./components/galleryPage";

function App() {
    return (
        <Router>
          <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/service" element={<Services />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
