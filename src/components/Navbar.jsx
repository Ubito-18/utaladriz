import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import { useEffect } from "react"; 

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
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
            {/* Usamos <Link> en lugar de <a> */}
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
            <Link
              to="/projects"
              className="text-stone-700 font-semibold hover:text-teal-700 hover:font-bold transition-all"
            >
              Proyectos
            </Link>
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