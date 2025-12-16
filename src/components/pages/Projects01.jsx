import { useEffect } from 'react';
import { Link } from "react-router-dom"; //Link para manejar la navegación entre páginas
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects01 = () => {

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
         Proyectos: <span className="text-teal-700">Ingeniería & Fabricación</span>
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Proyecto Drone V.A. */}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <img 
                src="/projects/exe-iot/drone-va.jpg" 
                alt="Drone V.A." 
                className="w-full h-72 object-cover object-[center_10%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">METALOGI.AI - Drone V.A.: Video Analítica</h3>
              <p className="text-stone-700 mb-4">
                Modelación e impresión 3D de piezas para Dron de video analítica, junto con calibración de vuelo y realización de pruebas para poder reconocer inventario en bodegas industriales.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Modelación 3D", "CAD", "Impresión 3D", "Video Analytics", "Dron"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-600 text-stone-50 py-1 px-3 rounded-full text-sm hover:bg-stone-900/90 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/projects/drone-va"
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

            {/* Proyecto Warehouse 4.0 - Nodos IoT */}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <img 
                src="/projects/exe-iot/nodo-1.jpg" 
                alt="Nodo IoT" 
                className="w-full h-88 object-cover object-[center_30%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">METALOGI.AI - Control de Acceso: Nodos IoT</h3>
              <p className="text-stone-700 mb-4">
                Elaboración de documentación técnica, planimetrías y modelos 3D de dispositivos IoT con tecnología de procesamiento de datos de forma local. Utilización de cámaras de video analítica para acceso de vehículos, reconocimiento de personal y automatización de procesos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Documentación Técnica", "Modelación 3D", "CAD", "Planimetría","IoT", "Video Analytics"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-600 text-stone-50 py-1 px-3 rounded-full text-sm hover:bg-stone-900/90 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/projects/warehouse-40"
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

            {/* Proyecto Aqua RDC */}
            <div
              className="
              glass p-6 rounded-xl border border-stone-900/20
              hover:-translate-y-1 hover:border-stone-50 
              hover:shadow-[0_0_10px_rgba(0,0,0,100)]
              transition-all
            "
            >
              <img 
                src="/projects/aqua-rdc/demoday.png" 
                alt="Aqua RDC" 
                className="w-full h-88 object-cover object-[center_15%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">Aqua RDC - Startup School UAI</h3>
              <p className="text-stone-700 mb-4">
                Proyecto de emprendimiento Startup School | Facultad de Ingeniería y Ciencias Universidad Adolfo Ibáñez.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Arduino", "Figma", "Rhino", "Adobe Creative Suite", "Laser Cutting", "3D Printing"].map(
                  (tech) => (
                    <span
                      key={tech}
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
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/projects/aqua-rdc" // Ruta a la página del proyecto
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

            {/* Proyecto Life Paths */}
            <div
              className="
              glass p-6 rounded-xl border border-stone-900/20
              hover:-translate-y-1 hover:border-stone-50 
              hover:shadow-[0_0_10px_rgba(0,0,0,100)]
              transition-all
            "
            >
              <img 
                src="/projects/life-paths/LifePaths-1.jpg" 
                alt="Life Paths" 
                className="w-full h-88 object-cover object-[center_0%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">Life Paths - Concurso Internacional de Diseño: Park-Fit - uni.xyz</h3>
              <p className="text-stone-700 mb-4">
              Concurso internacional de diseño, rediseño y propuesta de infraestructura y mobiliario urbano para el parque Victoria Park, Sydney, Australia.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Rhino", "Blender", "Enscape", "Adobe Creative Suite"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <Link
                   to="/projects/life-paths" // Ruta a la página del proyecto
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

            {/* Proyecto Archviz */}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <img 
                src="/projects/archviz/render-1.png" 
                alt="Archviz" 
                className="w-full h-88 object-cover object-[center_10%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">Archviz - Planimetrías</h3>
              <p className="text-stone-700 mb-4">
              Modelación 3D, trabajo de planimetrías 2D, renderización.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Rhino", "Unreal Engine 5", "DaVinci Resolve", "Adobe Creative Suite"].map((tech, key) => (
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
                  to="/projects/archviz" // Ruta a la página del proyecto
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

            {/* Proyecto FabDigital UAI */}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <img 
                src="/projects/fabricación-digital-UAI/pabellón.png" 
                alt="Fabricación Digital" 
                className="w-full h-88 object-cover object-[center_0%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2"> Fabricación Digital</h3>
              <p className="text-stone-700 mb-4">
                Algunos proyectos realizados en la Universidad.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Arduino","Rhino","3D Modeling", "3D Printing", "CNC", "Lasser Cutting", "Waterjet", "KUKA|prc"].map((tech, key) => (
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
                  to="/projects/fabricación-digital" // Ruta a la página del proyecto
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