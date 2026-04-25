import React from "react";
import { testimonials } from "../../data/constants";

const Testimonials: React.FC = () => {
  return (
    <div id="testimonios" className="pt-24 pb-32 border-t border-white/5">
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm tracking-widest uppercase font-bold mb-4">
          RECOMENDACIONES
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
          Nuestros clientes <span className="text-gradient">hablan por nosotros.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Descubre cómo hemos ayudado a empresas de diversos sectores a escalar, automatizar y
          dominar el mundo digital con tecnología de punta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <div
            key={i}
            className="bg-[#110813]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-[#1a0e1c] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--neon-purple-glow)] group relative overflow-hidden flex flex-col"
          >
            {/* Decorative quote mark */}
            <div className="absolute top-2 right-6 text-7xl text-white/5 font-serif leading-none group-hover:text-[var(--brand-pink)]/10 transition-colors duration-500">
              "
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(test.rating)].map((_, idx) => (
                <svg
                  key={idx}
                  className="w-5 h-5 text-[var(--brand-pink)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-300 text-[16px] leading-relaxed mb-8 relative z-10 italic flex-grow">
              "{test.content}"
            </p>

            <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-purple)] flex items-center justify-center text-white font-bold text-xl shadow-[var(--neon-purple-glow)]">
                {test.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{test.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
