import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom"; //Link para manejar la navegación entre páginas

export const Projects = () => {

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
          <h2 className="text-5xl font-bold mb-10 text-stone-700 text-left">
            {" "}
            Proyectos
          </h2>

          {/* Proyecto Exe*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">
              <h3 className="text-xl text-stone-700 font-bold mb-2">  EXE IoT - Smart Warning Systems.</h3>
              <p className="text-stone-700 mb-4">
              Empresa de inteligencia artificial a nivel industrial para la entrega de servicios IoT.
              presentes en Chile, Argentina, USA y próximamente en Canadá. Entre sus servicios, destacan plataformas de «Smart Logistics», «Smart Parking» y «Smart Condominium».
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Rhino","V-Ray", "3D Modeling", "3D Printing", "Adobe Creative Suite", "Jira"].map((tech, key) => (
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
                  to="/projects/smart-systems" // Ruta a la página del proyecto
                  className="font-bold text-stone-700 hover:text-teal-700 transition-colors my-4"
                >
                  Ver Proyecto →
                </Link>
              </div>
            </div>

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

            {/* Proyecto Aqua RDC */}
            <div
              className="
              glass p-6 rounded-xl border border-stone-900/20
              hover:-translate-y-1 hover:border-stone-50 
              hover:shadow-[0_0_10px_rgba(0,0,0,100)]
              transition-all
            "
            >
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
              <h3 className="text-xl text-stone-700 font-bold mb-2"> Fabricación Digital - UAI</h3>
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