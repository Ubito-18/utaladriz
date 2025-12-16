import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="flex items-center gap-3">
            <Link to="/" className="font-mono text-xl font-bold text-stone-700">
              &lt;<span className="text-teal-700">utaladriz</span>&gt;
            </Link>
            <a
              href="https://www.linkedin.com/in/ubaldo-taladriz-ram%C3%ADrez-4ba40b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-teal-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

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
                  to="/projects/engineering"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  Ingeniería & Fabricación
                </Link>
                <Link
                  to="/projects/dev"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  Desarrollo & UX/UI
                </Link>
                <Link
                  to="/projects/bioengineering"
                  className="block px-4 py-2 text-sm text-stone-700 hover:bg-teal-800/10"
                  onClick={() => setShowProjects(false)}
                >
                  Bioingeniería
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