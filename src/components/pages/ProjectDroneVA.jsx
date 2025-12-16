import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectDroneVA = () => {

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

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">METALOGI.AI </h3>
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

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto "Drone V.A" - Dron de Video Analítica</h3>
          <p className="text-stone-700 font-light mb-10">
            El Drone V.A. permite automatizar el reconocimiento y conteo de inventario en bodegas de gran escala, reduciendo tiempos de operación y minimizando errores humanos en la gestión de stock. La solución combina tecnología de video analítica con movilidad aérea para acceder a zonas de difícil alcance.
            Trabajé en la modelación 3D e impresión de piezas estructurales, además de la calibración y pruebas de vuelo para asegurar un rendimiento óptimo.
          </p>

          {/* Imágenes del drone */}
          <div className="flex flex-col md:flex-row gap-6 my-10 items-start justify-center mb-24">
            <img
              src="/projects/exe-iot/drone-va.jpg"
              alt="Drone V.A."
              className="w-full md:w-4/5 h-auto rounded-lg shadow-lg"
            />
            <img
              src="/projects/exe-iot/drone-2.jpg"
              alt="Drone 2"
              className="w-full md:w-2/5 h-auto rounded-lg shadow-lg"
            />
          </div>

          <h4 className="text-xl font-semibold mb-4 text-stone-700">Contribución técnica:</h4>
          
          <div className="text-stone-700 font-light mb-10 space-y-4">
            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Diseño y Fabricación de Componentes:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Modelación 3D de piezas estructurales y carcasas para protección de componentes electrónicos.</li>
                <li>• Diseño optimizado para reducción de peso y máxima resistencia estructural.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Calibración y Pruebas de Vuelo:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Calibración de sistemas de control de vuelo y estabilización</li>
                <li>• Pruebas de autonomía y rendimiento de batería</li>
              </ul>
            </div>

          </div>

          {/* Video de YouTube */}
          <div className="flex justify-center my-10 mb-24">
            <iframe
              className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YzVvWxcm3Jk"
              title="Video Drone V.A."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
