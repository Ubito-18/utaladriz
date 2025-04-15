import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom"; //Link para manejar la navegación entre páginas

export const Projects02 = () => {

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
         Proyectos: <span className="text-teal-700">Web/Mobile Dev</span>
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Proyecto Indumotora*/}
            <div
              className="glass p-6 rounded-xl border border-stone-900/20
              hover:-translate-y-1 hover:border-stone-50 
              hover:shadow-[0_0_10px_rgba(0,0,0,100)]
              transition-all
            "
            >
              <h3 className="text-xl text-stone-700 font-bold mb-2">Indumotora l Kia Chile, Hyundai Camiones & Buses.</h3>
              <p className="text-stone-700 mb-4">
              Empresa con representación de marcas: Kia, Nammi, Hyundai Camiones & Buses y Landking. 
              Dedicada a la importación, distribución y venta de vehículos nuevos y usados, repuestos y servicios postventa.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma","Adobe XD","Adobe Creative Suite", "Celoxis", "Miro", "Visio"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-teal-600 text-stone-50  py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-stone-900/90 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/projects/myservice" // Ruta a la página del proyecto
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