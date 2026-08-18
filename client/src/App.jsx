import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PortfolioContact from "./pages/PortfolioContact";
import Privacy from "./pages/Privacy";

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<PortfolioContact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <MusicPlayer />

      <Footer />
    </>
  );
}