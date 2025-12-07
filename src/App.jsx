import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./Components/ThemeProvider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import SEOHead from "./Components/SEOHead";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Achievements from "./Pages/Achievements";
import Portfolio from "./Pages/Portfolio";
import Research from "./Pages/Research";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router basename="/Sineth-Jayasundara-Potfolio">
          <SEOHead />
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/aboutme" element={<About />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <ScrollToTop />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;



