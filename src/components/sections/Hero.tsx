import React from "react";
import { ArrowUpRight } from "lucide-react";
import { tabs } from "../../data/constants";

interface HeroProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
  setIsHovered: (hovered: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ activeTab, setActiveTab, setIsHovered }) => {
  return (
    <>
      {/* Secondary Navigation (Tabs) */}
      <div 
        className="mt-4 mb-0" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between w-full border-b border-white/5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className="pb-4 relative cursor-pointer group whitespace-nowrap"
              onClick={() => setActiveTab(idx)}
            >
              <span
                className={`text-sm tracking-wide font-bold transition-colors ${
                  activeTab === idx ? "text-white" : "text-gray-400 group-hover:text-gray-200"
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

      {/* Main Hero Content */}
      <main className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 items-center min-h-[80vh]">
        {/* Left Column */}
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 mb-8 text-gray-300 text-[10px] sm:text-xs tracking-widest font-bold uppercase transition-all duration-300">
            Soluciones tecnológicas a medida
          </div>

          <h1
            key={`h1-${activeTab}`}
            className="text-5xl lg:text-[54px] font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          >
            {tabs[activeTab].heading
              .split(
                /(Inteligencia Artificial\.|crezca y venda online\.|funcione mejor que nunca\.|correos activos\.|hecho a medida\.)/
              )
              .map((part, index) =>
                /(Inteligencia Artificial\.|crezca y venda online\.|funcione mejor que nunca\.|correos activos\.|hecho a medida\.)/i.test(
                  part
                ) ? (
                  <span key={index} className="text-gradient">
                    {part}
                  </span>
                ) : (
                  <span key={index} className="text-white">
                    {part}
                  </span>
                )
              )}
          </h1>

          <p
            key={`p-${activeTab}`}
            className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-100"
          >
            {tabs[activeTab].desc}
          </p>

          <div className="flex flex-wrap gap-5 animate-fade-in-up delay-200">
            <button className="px-8 py-4 bg-[var(--brand-pink)] rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[var(--neon-cyan-glow)]">
              Comenzar Proyecto
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
              Ver Servicios
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="relative group/image hidden lg:block">
          <div
            key={`img-${activeTab}`}
            className="relative z-10 w-full aspect-square rounded-[40px] overflow-hidden animate-fade-in-up"
          >
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a060a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
