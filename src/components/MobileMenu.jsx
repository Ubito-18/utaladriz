import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [showProjectsMobile, setShowProjectsMobile] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300"
      >
        Inicio
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300"
      >
        Sobre Mí
      </Link>

      {/* Sección desplegable Proyectos */}
      <div className="text-2xl font-semibold text-white my-4 text-center">
        <button
          onClick={() => setShowProjectsMobile((prev) => !prev)}
          className="focus:outline-none"
        >
          Proyectos
        </button>
        {showProjectsMobile && (
          <div className="mt-2 space-y-2">
            <Link
              to="/projects/engineering"
              onClick={() => {
                setMenuOpen(false);
                setShowProjectsMobile(false);
              }}
              className="block text-lg text-teal-100 hover:text-white"
            >
              Ingeniería & Fabricación
            </Link>
            <Link
              to="/projects/dev"
              onClick={() => {
                setMenuOpen(false);
                setShowProjectsMobile(false);
              }}
              className="block text-lg text-teal-100 hover:text-white"
            >
              Desarrollo & UX/UI
            </Link>
            <Link
              to="/projects/bioengineering"
              onClick={() => {
                setMenuOpen(false);
                setShowProjectsMobile(false);
              }}
              className="block text-lg text-teal-100 hover:text-white"
            >
              Bioingeniería
            </Link>
          </div>
        )}
      </div>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300"
      >
        Contacto
      </Link>
    </div>
  );
};