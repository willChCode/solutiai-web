import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Smartphone,
  Apple,
} from "lucide-react";
import { projects } from "../../data/projects";

const Portfolio: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 1.5
          : scrollLeft + clientWidth / 1.5;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="portafolio" className="pt-20 pb-12 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest uppercase font-bold mb-4">
            NUESTRO PORTAFOLIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white tracking-tight leading-tight">
            Portafolio de <span className="text-gradient">Impacto Real</span>
          </h2>
          <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
            Transformamos ideas complejas en soluciones digitales de alto
            rendimiento.
          </p>
        </div>

        <div className="relative group/slider">
          {/* Slider Controls - Lateral */}
          <button
            onClick={() => scrollSlider("left")}
            className="absolute -left-4 lg:-left-20 top-[35%] -translate-y-1/2 z-40 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl flex items-center justify-center text-white opacity-40 lg:opacity-0 group-hover/slider:opacity-100 hover:bg-[var(--brand-pink)] hover:border-[var(--brand-pink)] hover:scale-110 transition-all duration-500 shadow-2xl"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="absolute -right-4 lg:-right-20 top-[35%] -translate-y-1/2 z-40 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl flex items-center justify-center text-white opacity-40 lg:opacity-0 group-hover/slider:opacity-100 hover:bg-[var(--brand-pink)] hover:border-[var(--brand-pink)] hover:scale-110 transition-all duration-500 shadow-2xl"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto pt-10 pb-12 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)] snap-start group relative flex flex-col bg-[#110813]/40 border border-white/5 rounded-[32px] overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 70%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 70%, transparent 100%)",
                    }}
                  />

                  {/* Category Tag */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Play Button Overlay (Simulated for Video) */}
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-16 h-16 rounded-full bg-[var(--brand-pink)]/90 flex items-center justify-center shadow-[0_0_30px_rgba(249,59,105,0.5)] backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-all duration-500">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 pt-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed mb-6 h-[72px] line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between mt-auto">
                    {project.appLinks ? (
                      <div className="flex flex-wrap items-center gap-4 w-full justify-between px-2">
                        <a
                          href={project.appLinks.appStore}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest group/btn"
                        >
                          App Store
                          <div className="relative flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-[var(--brand-pink)] transition-all duration-300">
                              <Apple className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                            </div>
                          </div>
                        </a>
                        <a
                          href={project.appLinks.playStore}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest group/btn"
                        >
                          Google Play
                          <div className="relative flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-[var(--brand-pink)] transition-all duration-300">
                              <Smartphone className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                            </div>
                          </div>
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest group/btn"
                      >
                        Ver detalles
                        <div className="relative flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-[var(--brand-pink)] transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Background */}
                <div className="absolute -inset-px bg-gradient-to-br from-[var(--brand-pink)]/0 via-[var(--brand-purple)]/0 to-[var(--brand-pink)]/0 group-hover:from-[var(--brand-pink)]/10 group-hover:via-transparent group-hover:to-[var(--brand-purple)]/10 rounded-[32px] transition-all duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
