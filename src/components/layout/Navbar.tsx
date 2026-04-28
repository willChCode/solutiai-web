import React from "react";
import logo from "../../assets/img/logo/logo-blanco.svg";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(18,12,16,0.5)] backdrop-blur-[10px] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between h-[80px]">
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="SolutiAI"
            style={{ height: "35px", width: "auto" }}
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          <a href="#inicio" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#portafolio" className="hover:text-white transition-colors">
            Portafolio
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
          <a href="#contacto" className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white font-semibold ml-4">
            Agenda tu Consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
