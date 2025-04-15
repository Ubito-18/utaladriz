import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectBiomateriales = () => {

    useEffect(() => {
      // Esto asegura que el scroll se coloque en la parte superior de la página
      window.scrollTo(0, 0);
    }, []); 
  
  return (
    <section className="min-h-screen flex items-center justify-center py-40 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">

          {/* Título */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 bg-clip-text tracking-tight text-transparent">
            Evaluación de viabilidad y proliferación celular
            </span>
            <p className="max-w-2xl py-2 font-semibold tracking-tighter text-teal-700">
            Biomateriales de origen natural sembrados con células madre mesenquimales (MSCs).
            </p>
          </div>

          {/* Línea separadora */}
          <div className="w-full border-b-2 border-stone-700/20 rounded-b mt-4 mb-12"></div>

          {/* PDF embebido */}
          <iframe src="/projects/biomateriales/Informe-Biomaterial.pdf" width="100%" height="600px" />
          
          {/* Link a la derecha */}
            <a href="/projects/biomateriales/Informe-Biomaterial.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">
            Abrir PDF en una pestaña.
            </a>
          
        </div>
      </RevealOnScroll>
    </section>
  );
};