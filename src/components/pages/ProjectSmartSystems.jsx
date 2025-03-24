import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectSmartSystems = () => {

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
              EXE IoT «Smart Warning Systems».
            </span>
            <p className="max-w-xl py-2 font-semibold tracking-tighter text-teal-700">
              Empresa de inteligencia artificial a nivel industrial para la entrega de servicios IoT.
            </p>
          </div>

          {/* Línea separadora */}
          <div className="w-full border-b-2 border-stone-700/20 rounded-b mt-4 mb-12"></div>

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Exe IoT - Metalogic</h3>
          <p className="text-stone-700 font-light mb-10">
            Empresa de inteligencia artificial a nivel industrial para la entrega de servicios IoT, presentes en Chile, Argentina, USA y próximamente en Canadá. Entre sus servicios, destacan plataformas de «Smart Logistics», «Smart Parking» y «Smart Condominium», las cuales integran servicios de notificaciones y alertas inteligentes personalizadas según reglas de seguridad para automatizar operaciones, a través de algoritmos de Video Analytics en conjunto con una Plataforma Cloud.
          </p>
          
          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Nodos de procesamiento de datos</h3>
          <p className="text-stone-700 font-light mb-10">
            Elaboración de documentación técnica, planimetrías y modelos 3D de dispositivos IoT (nodos), los cuales cuentan con tecnología de procesamiento de datos localmente, para luego ejecutar acciones y automatizar procesos operacionales. Proyectos como Smart Condominium y Smart Logistics utilizan cámaras de video analítica para el acceso de vehículos, reconocimiento de personal, cargas, entre otros.
          </p>
          
          {/* Galería de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            {[1, 2, 3, 4].map((num) => (
              <img
                key={num}
                src={`/projects/exe-iot/nodo-${num}.png`}
                alt={`Nodo ${num}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Dron de Video Analítica</h3>
          <p className="text-stone-700 font-light mb-10">
            Trabajo de modelación e impresión 3D para piezas de Dron de video analítica, diseñado para reconocer inventario en bodegas industriales. Por otro lado, también colaboré con la calibración de vuelo del Dron y en la realización de pruebas.
          </p>

          {/* Video de YouTube */}
          <div className="flex justify-center my-10">
            <iframe
              className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YzVvWxcm3Jk"
              title="Video de YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};