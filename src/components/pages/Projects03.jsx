import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom"; //Link para manejar la navegación entre páginas

export const Projects03 = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte
  
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-40"
    >
       <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-5xl font-bold mb-10 text-left text-stone-700">
         Proyectos: <span className="text-teal-700">Ciencia y Análisis de Datos</span>
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        

            {/* Proyecto FabDigital UAI */}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <h3 className="text-xl text-stone-700 font-bold mb-2"> Informe de Investigación - Ramo Biomateriales UAI</h3>
              <p className="text-stone-700 mb-4">
                Evaluación de la capacidad 
                de un biomaterial de origen natural para promover 
                la proliferación celular en MSCs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Excel"," Ing. De tejidos","Bioingeniería"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-600 text-stone-50  py-1 px-3 rounded-full text-sm hover:bg-stone-900/90 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  to="/projects/biomateriales" // Ruta a la página del proyecto
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>


            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};