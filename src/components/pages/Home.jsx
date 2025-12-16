import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import Technologies from '../Technologies';

export const Home = () => {

  return (
    <section id="home" className="main-content min-h-full flex items-center justify-center py-16">
      <RevealOnScroll>
          <div className="bg-gray-200 border border-gray-700/20 shadow-inner w-screen left-1/2 -translate-x-1/2 relative flex flex-col justify-end items-center h-[360px]">
            <img 
              src="/Uba.png"
              alt="Ubaldo Taladriz"
              className="w-80 h-auto mb-0"
            />
          </div>
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-700">
          Hola, Soy Ubaldo Taladriz
        </h1>
        <p className="text-2xl md:text-2xl font-bold pb-4 bg-gradient-to-br from-teal-700 to-teal-400 bg-clip-text text-transparent leading-right">
          Bioengineering - Data Analytics - Development - Product Design
        </p>
        
        {/* Badges de información */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl">
          <span className="px-4 py-2 bg-stone-100 border border-teal-300 rounded-full text-teal-700 text-sm font-medium">
            💼 Disponible para trabajar
          </span>
          <span className="px-4 py-2 bg-stone-100 border border-teal-300 rounded-full text-teal-700 text-sm font-medium">
            🎓 Doble titulación UAI
          </span>
          <span className="px-4 py-2 bg-stone-100 border border-teal-300 rounded-full text-teal-700 text-sm font-medium">
            🚀 3+ años de experiencia
          </span>
        </div>

        {/* Accesos Directos a Proyectos */}
        <div className="w-full max-w-4xl mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-8 text-stone-700 text-center">Explora mis Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Ingeniería & Fabricación */}
            <Link
              to="/projects/engineering"
              className="group p-8 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all text-center"
            >
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-stone-700 group-hover:text-teal-700 transition-colors mb-2">
                Ingeniería & Fabricación
              </h3>
              <p className="text-sm text-stone-600">
                Proyectos de ingeniería, diseño industrial, fabricación digital y prototipado.
              </p>
            </Link>

            {/* Desarrollo & UX/UI */}
            <Link
              to="/projects/dev"
              className="group p-8 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all text-center"
            >
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-stone-700 group-hover:text-teal-700 transition-colors mb-2">
                Desarrollo & UX/UI
              </h3>
              <p className="text-sm text-stone-600">
                Proyectos orientados al diseño y desarrollo de productos digitales end-to-end.
                UX/UI, desarrollo y coordinación de requerimientos.
              </p>
            </Link>

            {/* Bioingeniería */}
            <Link
              to="/projects/bioengineering"
              className="group p-8 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all text-center"
            >
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-stone-700 group-hover:text-teal-700 transition-colors mb-2">
                Bioingeniería
              </h3>
              <p className="text-sm text-stone-600">
                Proyectos relacionados con ingeniería, ciencias biológicas y tecnologías aplicadas.
              </p>
            </Link>
          </div>
        </div>

        {/* Technologies al final */}
        <div className="mt-20">
          <Technologies/>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};