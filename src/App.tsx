import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Brands from "./components/sections/Brands";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import useFluidCursor from "./hooks/useFluidCursor";
import { tabs } from "./data/constants";
import "./index.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Preload tab images
  useEffect(() => {
    tabs.forEach((tab) => {
      if (tab.image) {
        const img = new Image();
        img.src = tab.image;
      }
    });
  }, []);

  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div id="inicio" className="min-h-screen text-white overflow-x-hidden pt-28 pb-0">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[850px] h-[440px] bg-[var(--brand-pink)]/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar isScrolled={isScrolled} />

      <div className="container mx-auto px-4 lg:px-0">
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} setIsHovered={setIsHovered} />
        <Features activeTab={activeTab} />
      </div>

      <Brands />

      <Portfolio sliderRef={sliderRef} scrollSlider={scrollSlider} />

      <Testimonials />

      <Contact />

      <Footer />

      {/* "Mira mas" Floating Button (Optional/Legacy) */}
      <button className="fixed bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-4 rounded-full backdrop-blur-sm transition-all border border-white/5 z-50">
        Mira mas
      </button>

      {/* Fluid Cursor Canvas */}
      <canvas
        id="fluid"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      ></canvas>
    </div>
  );
};

export default App;
