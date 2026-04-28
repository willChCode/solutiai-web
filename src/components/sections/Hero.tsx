import React, { useState, useEffect, useRef } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { tabs } from "../../data/tabs";

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || !isVisible) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, isVisible]);

  // Preload tab images to fix loading bug on first click
  useEffect(() => {
    tabs.forEach((tab) => {
      if (tab.image) {
        const img = new Image();
        img.src = tab.image;
      }
    });
  }, []);

  return (
    <div
      className="container mx-auto px-4 lg:px-0 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Secondary Navigation */}
      <div ref={containerRef} className="mt-4 mb-0">
        <div className="flex items-center gap-10 lg:gap-0 lg:justify-between w-full border-b border-white/5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className="pb-4 relative cursor-pointer group whitespace-nowrap"
              onClick={() => setActiveTab(idx)}
            >
              <span
                className={`text-sm tracking-wide font-bold transition-colors ${
                  activeTab === idx
                    ? "text-white"
                    : "text-gray-400 group-hover:text-gray-200"
                }`}
              >
                {tab.title}
              </span>
              {activeTab === idx && (
                <div
                  className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[var(--brand-pink)] transition-all duration-300"
                  style={{ boxShadow: "var(--neon-cyan-glow)" }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-4 lg:gap-10 items-center min-h-0 lg:min-h-[80vh] pt-22 pb-5 lg:py-0">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 mb-6 text-gray-300 text-[10px] sm:text-xs tracking-widest font-bold uppercase transition-all duration-300">
            Soluciones tecnológicas a medida
          </div>

          <h1
            key={`h1-${activeTab}`}
            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1] lg:leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          >
            {tabs[activeTab].heading
              .split(
                /(Inteligencia Artificial\.|crezca y venda online\.|funcione mejor que nunca\.|correos activos\.|hecho a medida\.)/,
              )
              .map((part, index) =>
                /(Inteligencia Artificial\.|crezca y venda online\.|funcione mejor que nunca\.|correos activos\.|hecho a medida\.)/i.test(
                  part,
                ) ? (
                  <span key={index} className="text-gradient">
                    {part}
                  </span>
                ) : (
                  <span key={index} className="text-white">
                    {part}
                  </span>
                ),
              )}
          </h1>

          <p
            key={`p-${activeTab}`}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-[90%] lg:max-w-[95%] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {tabs[activeTab].desc}
          </p>

          <div
            key={`btn-${activeTab}`}
            className="animate-fade-in-up mb-4 lg:mb-0"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-purple)] hover:from-[var(--brand-mid)] hover:to-[var(--brand-purple)] text-white font-bold py-4 px-8 rounded-xl shadow-[var(--neon-purple-glow)] transition-all transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 text-white/90" />
              <span className="text-white font-bold text-base tracking-wide">
                Agendar consulta{" "}
                <span className="font-extrabold text-[15px]">GRATUITA</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right Column - Image or Placeholder */}
        <div
          className={`w-full flex flex-col items-center justify-center relative ${
            activeTab === 2 || activeTab === 3 || activeTab === 0
              ? "p-0 overflow-visible"
              : "p-8 overflow-hidden"
          }`}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 pointer-events-none z-20"></div>

          <div
            key={`img-content-${activeTab}`}
            className="w-full h-full flex flex-col items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {tabs[activeTab].image ? (
              <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-0">
                <img
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className={`w-[85%] lg:w-full h-auto object-contain relative z-10 transition-all duration-500 ${
                    activeTab === 4 && "max-h-[300px] lg:max-h-[520px] w-auto"
                  }`}
                  style={
                    activeTab === 0
                      ? {
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 70%, transparent 98%)",
                          maskImage:
                            "linear-gradient(to bottom, black 70%, transparent 98%)",
                        }
                      : {}
                  }
                />

                {/* Chat Bubbles for IA Tab */}
                {activeTab === 0 && (
                  <div className="absolute inset-0 z-30 pointer-events-none">
                    {/* Bubble 1: Hola! Mi nombre es Ana */}
                    <div className="absolute top-[0%] left-[3%] lg:-left-[15%] lg:top-[-3%] animate-chat-sequence-1">
                      <div className="bg-[#120c10]/95 backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-2xl rounded-bl-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-purple)] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                          A
                        </div>
                        <span className="text-white text-xs lg:text-sm font-medium animate-typewriter-short">
                          Hola! Mi nombre es Ana 👋
                        </span>
                      </div>
                    </div>

                    {/* Bubble 2: ¿En qué puedo ayudarte hoy? */}
                    <div className="absolute top-[-0%] left-[2%] lg:-left-[15%] lg:top-[-3%] animate-chat-sequence-2">
                      <div className="bg-[#120c10]/95 backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-2xl rounded-bl-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-purple)] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                          A
                        </div>
                        <span className="text-white text-xs lg:text-sm font-medium animate-typewriter-long">
                          ¿En qué puedo ayudarte hoy?
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center relative z-10">
                <h3 className="text-white text-xl font-bold mb-4">
                  Imagen: {tabs[activeTab].title}
                </h3>
                <p className="text-gray-500 text-sm">
                  (Inserta tu imagen{" "}
                  <code className="text-gray-400 font-mono">.webp</code> o{" "}
                  <code className="text-gray-400 font-mono">.png</code> en este
                  contenedor)
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Deep Detail Section (Active Tab) */}
      <div className="mt-0 pt-16 pb-24">
        <section
          key={`detail-${activeTab}`}
          className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-center animate-fade-in-up"
        >
          {/* Text Content */}
          <div className="flex flex-col items-start order-1">
            <h2 className="text-4xl lg:text-[38px] font-semibold leading-[1.1] mb-6 text-white tracking-tight">
              {tabs[activeTab].detailTitle}
            </h2>
            <p className="text-gray-400 text-[17px] leading-normal mb-10">
              {tabs[activeTab].detailDesc}
            </p>
            <a
              href="#contacto"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-white font-bold text-sm tracking-wide">
                Agendar consulta gratuita
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-2">
            {tabs[activeTab].features.map((feat, i) => (
              <div
                key={i}
                className="bg-[#110813]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-6 transition-all duration-500 hover:bg-[#1a0e1c] hover:border-white/10 hover:-translate-y-1.5 hover:shadow-[var(--neon-purple-glow)] group relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-pink)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-white text-[17px] font-bold mb-2.5 group-hover:text-[var(--brand-pink)] transition-colors">
                  {feat.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                  {feat.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
