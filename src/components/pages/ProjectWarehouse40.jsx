import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectWarehouse40 = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
  
  return (
    <section className="min-h-screen flex items-center justify-center py-40 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          {/* Título */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 bg-clip-text tracking-tight text-transparent">
              METALOGI.AI
            </span>
            <p className="max-w-xl py-2 font-semibold tracking-tighter text-teal-700">
              Empresa de inteligencia artificial para la entrega de servicios IoT.
            </p>
          </div>

          {/* Línea separadora */}
          <div className="w-full border-b-2 border-stone-700/20 rounded-b mt-4 mb-12"></div>

          <h3 className="text-2xl font-semibold mb-6 text-stone-700"> METALOGI.AI </h3>
          <p className="text-stone-700 font-light mb-10">
            Plataforma de Servicios IA diseñada para optimizar la operación logística dentro de Centros de Abastecimiento y Distribución. Su misión es ayudar a almacenar, consolidar, distribuir y despachar carga de forma eficiente, coordinada y 100% segura, eliminando fricciones y reduciendo incidencias en todo el flujo operativo.
          </p>
          <p className="text-stone-700 font-light mb-10">
            A través de un sistema unificado, METALOGI.AI integra sus principales Servicios IA en un único Dashboard centralizado, desde donde es posible gestionar:
          </p>
          <ul className="text-stone-700 font-light mb-24 ml-6 space-y-2">
            <li>• <strong>Control de Acceso Operacional Inteligente.</strong></li>
            <li>• <strong>Warehouse 4.0:</strong> Picking, Recepción, Acopio, Carguío y otros procesos críticos.</li>
            <li>• <strong>Maquinaria Inteligente:</strong> integración con cargadores frontales, grúas y equipos de apoyo.</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto "Control de Acceso" - Nodos de procesamiento de datos</h3>
          <p className="text-stone-700 font-light mb-10">
            Elaboración de documentación técnica, planimetrías y modelos 3D de dispositivos IoT (nodos), los cuales cuentan con tecnología de procesamiento de datos localmente, para luego ejecutar acciones y automatizar procesos operacionales. Utilizan cámaras de video analítica para el acceso de vehículos, reconocimiento de personal, cargas, entre otros.
          </p>
          
          {/* Galería de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 mb-24">
            {[1, 2, 3, 4].map((num) => (
              <img
                key={num}
                src={`/projects/exe-iot/nodo-${num}.jpg`}
                alt={`Nodo ${num}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4 text-stone-700">Contribución técnica:</h4>
          
          <div className="text-stone-700 font-light mb-10 space-y-4">
            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Modelación y Diseño 3D:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Desarrollo de modelos 3D detallados de gabinetes y estructuras de montaje para nodos IoT.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Documentación Técnica:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Elaboración de planimetrías técnicas con especificaciones de montaje.</li>
                <li>• Creación de diagramas de instalación y configuración de dispositivos.</li>
              </ul>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
