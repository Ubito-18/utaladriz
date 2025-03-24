import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectAquaRDC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          {/* Título e Imagen del Proyecto */}
          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between py-20 px-4">
              <div className="w-full lg:w-auto flex justify-center lg:justify-start px-4">
                <img
                  src="/projects/aqua-rdc/logo-aquaRDC.png"
                  alt="Aqua RDC"
                  className="w-32"
                />
              </div>

              <div className="w-full lg:flex-1 text-center lg:text-left mt-4 lg:mt-0">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 bg-clip-text tracking-tight text-transparent">
                  Aqua RDC
                </span>
                <p className="my-2 max-w-xl mx-auto lg:mx-0 py-2 font-semibold tracking-tighter text-teal-700">
                  Proyecto de emprendimiento Startup School | Facultad de Ingeniería y Ciencias UAI.
                </p>
              </div>
            </div>

            <div className="w-full border-b-2 border-stone-700/20 rounded-b mt-0 mb-12"></div>
          </div>

          {/* Descripción del Proyecto */}
          <div className="mb-12 px-2">
            <p className="text-stone-700 font-light mb-6">
              Diseño utilizando microcontroladores, sensores y circuitos electrónicos
              trabajando dentro del marco y la metodología Design Thinking. Observando, ideando, iterando y ajustando el enfoque en función de la
              retroalimentación obtenida. En la instancia final del proceso se realizó un Demo Day, en el
              cuál, junto con mi compañero, obtuvimos el 2° lugar de 6 equipos.
            </p>
          </div>

          {/* Imagen individual */}
          <div className="flex justify-center my-10">
            <img
              src="/projects/aqua-rdc/demoday.png"
              alt="Demo Day"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Más descripción */}
          <div className="mb-12 px-2">
            <p className="text-stone-700 font-light mb-6">
              Aqua RDC consta de dispositivos IoT capaces de medir pulsos para detectar el flujo de agua en duchas, riego, entre otros. 
              Captura datos como los litros consumidos, 
              de una forma rápida y sencilla para optimizar el ahorro hídrico en el consumo doméstico con "Warning Systems", 
              señales lumínicas respecto al tiempo, notificaciones relacionadas a su actividad a través de una App, entre otras funciones.

            </p>
            <p className="text-stone-700 font-light mb-18">
              El propósito es fomentar el ahorro hídrico a través de una experiencia interactiva y educativa que combina tecnología, información de fácil acceso y dinámicas de gamificación. 
              Este enfoque busca no solo reducir el consumo de agua, sino también impulsar un cambio cultural hacia el uso responsable de este recurso vital.
            </p>
          </div>

          {/* Prototipos de Interfaces */}
          <h3 className="text-2xl font-semibold text-stone-700 text-center lg:text-left">
            Algunos Prototipos de Interfaces:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-10">
            <img
              src="/projects/aqua-rdc/interfaz-2.png"
              alt="Interfaz 2"
              className="w-48 h-auto rounded-lg shadow-lg mix-blend-overlay"
            />
            <img
              src="/projects/aqua-rdc/interfaz-1.png"
              alt="Interfaz 1"
              className="w-48 h-auto rounded-lg shadow-lg"
            />
            <img
              src="/projects/aqua-rdc/interfaz-3.png"
              alt="Interfaz 3"
              className="w-48 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Resumen Componentes Clave */}
          <div className="mb-12 px-2">
            <h3 className="text-2xl font-semibold mb-6 mt-18 text-stone-700 text-center lg:text-left">
              Resumen de Componentes Clave:
            </h3>
            <ul className="list-disc list-inside space-y-4 text-stone-700">
              <li><strong>Asistencia: </strong>Alertas personalizadas para prevenir desperdicios, como avisos en caso de detectar un flujo continuo en el tiempo y detección de una temperatura determinada.</li>
              <li><strong>Seguimiento: </strong>Herramientas para establecer metas semanales o mensuales de reducción del consumo hídrico. Reportes gráficos que muestran avances, comparaciones con usuarios y ahorros acumulados.</li>
              <li><strong>Información: </strong>Equivalencia monetaria, comparación de consumo por habitantes/usuarios, a nivel del hogar, equivalencia de litros utilizados por usuarios vs litros para la producción de ciertos alimentos, entre otros.</li>
              <li><strong>Gamificación: </strong>Incorporación de gamificación con recompensas digitales por el cumplimiento de metas (ej. insignias, niveles, desafíos colectivos).</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-6 mt-18 text-stone-700 text-center lg:text-left">
            Iteraciones del Dispositivo:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center my-10">
            <img
              src="/projects/aqua-rdc/dispositivo-2.png"
              alt="Dispositivo 2"
              className="w-48 h-48 object-contain rounded-lg shadow-lg"
            />
          <img
            src="/projects/aqua-rdc/dispositivo-1.png"
            alt="Dispositivo 1"
            className="w-48 h-48 object-contain rounded-lg shadow-lg"
          />
            <img
              src="/projects/aqua-rdc/dispositivo-ducha.png"
              alt="Dispositivo Ducha"
              className="w-48 h-48 object-contain rounded-lg shadow-lg"
            />
            <img
              src="/projects/aqua-rdc/render-1.png"
              alt="Render"
              className="w-48 h-48 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
