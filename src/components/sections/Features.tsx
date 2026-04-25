import React from "react";
import { ChevronRight } from "lucide-react";
import { tabs } from "../../data/constants";

interface FeaturesProps {
  activeTab: number;
}

const Features: React.FC<FeaturesProps> = ({ activeTab }) => {
  return (
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
          <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
            <span className="text-white font-bold text-sm tracking-wide">
              Agendar consulta gratuita
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
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
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">{feat.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
