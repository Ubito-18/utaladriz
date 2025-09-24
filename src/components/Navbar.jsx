import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showProjects, setShowProjects] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProjects(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
  <nav className="fixed top-0 w-full z-40 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-stone-700">
            &lt;<span className="text-teal-700">utaladriz</span>&gt;
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-stone-700 font-semibold hover:text-teal-700 hover:font-bold transition-all"
            >
              Inicio
            </Link>

            <Link
              to="/about"
              className="text-stone-700 font-semibold hover:text-teal-700 hover:font-bold transition-all"
            >
              Sobre Mí
            </Link>

            {/* Menú desplegable de Proyectos */}
            <div
              className="relative text-stone-700 font-semibold hover:text-teal-700 hover:font-bold transition-all cursor-pointer"
              onClick={() => setShowProjects(!showProjects)}
              ref={dropdownRef}
            >
              Proyectos
              <div
                className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-50 transition-all duration-200 ${
                  showProjects ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/projects/cad-cam"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  CAD/CAM
                </Link>
                <Link
                  to="/projects/dev"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  Web/Mobile Dev.
                </Link>
                <Link
                  to="/projects/data-science"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  Ciencia y Análisis de Datos
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-stone-700 font-semibold hover:text-teal-700 hover:font-bold transition-all"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};