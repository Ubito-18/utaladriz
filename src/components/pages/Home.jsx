import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";
import Technologies from '../Technologies';

export const Home = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <RevealOnScroll>
        
        <div className="text-center z-10 px-0 mt-10">
          <div className="container mx-auto px-8"></div>

          <div className="relative flex justify-center w-screen border border-stone-300 bg-gray-200 shadow-inner mb-10 h-[360px]">
          <img 
          src="/Uba.png"
          alt="Proyecto 1" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-auto"
          />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-10 text-stone-700">
            Hola, Soy Ubaldo Taladriz
          </h1>

          <p className="text-2xl md:text-2xl font-bold pb-16 bg-gradient-to-br from-teal-700 to-teal-400 bg-clip-text text-transparent leading-right">
          Bioengineering - Data Science - Development - Product Design
          </p>

        
          <Technologies/>


          <div className="flex justify-center py-10 space-x-4">
            <Link
              to="/about"
              className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(0,0,0,100)] hover:bg-teal-700 hover:text-gray-100"
            >
              Sobre Mí
            </Link>

            <Link
              to="/contact"
              className="border border-teal-700/50 text-teal-700 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-teal-700/10"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};