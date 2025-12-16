import { useEffect } from 'react';
import { Link } from "react-router-dom"; //Link para manejar la navegación entre páginas
import { RevealOnScroll } from "../RevealOnScroll";

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
         Proyectos: <span className="text-teal-700">Desarrollo & UX/UI</span>
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Proyecto Miralemu App - Metalogi.ai*/}
            <div className="p-6 rounded-xl border border-stone-900/20 hover:-translate-y-1 hover:border-stone-50 hover:shadow-[0_0px_8px_rgba(0,0,0,100)] transition">              <img 
                src="/projects/exe-iot/miralemu-app.png" 
                alt="Miralemu App" 
                className="w-full h-48 object-contain object-[center_0%] rounded-lg mb-4"
              />              <h3 className="text-xl text-stone-700 font-bold mb-2">METALOGI.AI - Aplicación Móvil IoT “Miralemu”.</h3>
              <p className="text-stone-700 mb-4">
              Desarrollo de aplicación móvil multiplataforma (Android/iOS) para control de accesos inteligentes, entre otros. Integra autenticación segura, gestión de visitas, notificaciones push en tiempo real, comunicación con plataforma Cloud...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Expo", "TypeScript", "Tailwind CSS", "Firebase", "WebSockets", "REST APIs", "Android/iOS"].map((tech, key) => (
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
                  to="/projects/miralemu" // Ruta a la página del proyecto
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
              <img 
                src="/projects/myservice/MyService-Home.jpg" 
                alt="MyService" 
                className="w-full h-48 object-cover object-[center_60%] rounded-lg mb-4"
              />
              <h3 className="text-xl text-stone-700 font-bold mb-2">INDUMOTORA - Kia Chile, Hyundai Camiones & Buses: "MyService".</h3>
              <p className="text-stone-700 mb-4">
              MyService es un proyecto de postventa que involucra a la red de concesionarios, orientado a estandarizar los flujos de atención, mejorar la gestión de los dealers y unificar la experiencia del cliente.
              Fui responsable de la gestión del proyecto liderando la fase de diseño de interfaces.  
              Además, participé en la definición de procesos, gestión de requerimientos y realización de focus groups con key users y stakeholders para su correcta implementación.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["UX/UI Design", "User Research", "Wireframing", "Prototyping", "Figma", "Miro", "Design Systems", "Gestión de Proyectos"].map((tech, key) => (
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