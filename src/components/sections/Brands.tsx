import React from "react";
import { brandLogos } from "../../data/constants";

const Brands: React.FC = () => {
  return (
    <div id="marcas" className="pt-20 pb-28 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0 text-center">
        <p className="text-gray-400 text-lg tracking-widest uppercase font-bold mb-18">
          Empresas que confían en nuestras soluciones
        </p>
      </div>

      <div className="relative w-full mask-edges flex flex-col gap-16">
        {/* Row 1: Moving Left */}
        <div className="flex w-fit animate-marquee gap-24 pr-24">
          {[...brandLogos, ...brandLogos].map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
            >
              <img src={src} alt="Brand" className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex w-fit animate-marquee-reverse gap-24 pr-24">
          {[...brandLogos, ...brandLogos].map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
            >
              <img src={src} alt="Brand" className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
