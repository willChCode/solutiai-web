import React from "react";
import BookingCalendar from "../features/BookingCalendar";

const Contact: React.FC = () => {
  return (
    <div id="contacto" className="pt-24 pb-32 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-purple)]/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm tracking-widest uppercase font-bold mb-4">
              CONTÁCTANOS
            </p>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1]">
              Conéctate con <span className="text-gradient">nosotros</span>
            </h2>
            <p className="text-gray-400 text-lg leading-normal mb-6 max-w-xl">
              Estamos aquí para ayudarte. Si tienes preguntas, necesitas soporte
              o simplemente quieres conocer más sobre nuestros servicios, no
              dudes en escribirnos o visitarnos. ¡Será un placer atenderte!
            </p>
            <p className="text-gray-400 text-[17px] leading-relaxed mb-12 max-w-xl flex items-center gap-2">
              Agenda una consulta gratuita por GOOGLE MEET usando nuestro panel
              de la derecha ➪
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#110813] border border-white/10 flex items-center justify-center shrink-0 shadow-[var(--neon-purple-glow)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-[17px]">
                    Miguel Hidalgo 2404,
                  </p>
                  <p className="text-gray-400 text-[17px]">Monterrey, N.L.</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#110813] border border-white/10 flex items-center justify-center shrink-0 shadow-[var(--neon-purple-glow)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-[17px]">+52 81 3576 3561</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#110813] border border-white/10 flex items-center justify-center shrink-0 shadow-[var(--neon-purple-glow)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-[17px]">
                    contacto@solutiai.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <BookingCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
