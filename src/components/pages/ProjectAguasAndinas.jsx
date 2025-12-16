import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectAguasAndinas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          {/* Título del Proyecto */}
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="w-full text-center">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 bg-clip-text tracking-tight text-transparent">
                  Academia de Agua y Resiliencia Hídrica
                </span>
                <p className="my-2 max-w-2xl mx-auto py-2 font-semibold tracking-tighter text-teal-700">
                  Programa organizado por Uno Punto Cinco ONG y Aguas Andinas
                </p>
              </div>
            </div>

            <div className="w-full border-b-2 border-stone-700/20 rounded-b mt-0 mb-12"></div>
          </div>

          {/* Descripción del Programa */}
          <div className="mb-12 px-2">
            <p className="text-stone-700 font-light mb-6">
              La Academia de Agua y Resiliencia Hídrica fue un programa intensivo de 7 semanas que me permitió comprender con mayor profundidad la importancia de la resiliencia hídrica frente al cambio climático. A través de este programa, exploré diversos tópicos fundamentales para la gestión sostenible del agua en Chile.
            </p>
            <p className="text-stone-700 font-light mb-6">
              Este programa representó una experiencia transformadora que me entregó herramientas para impulsar iniciativas que fortalezcan la resiliencia de las comunidades y promuevan la protección de nuestros ecosistemas hídricos.
            </p>
          </div>

          {/* Galería de Imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            <img
              src="/projects/aguas-andinas/aa-1.jpeg"
              alt="Academia de Agua 1"
              className="w-full h-full object-cover object-[center_0%] rounded-lg shadow-lg"
            />
            <img
              src="/projects/aguas-andinas/aa-2.jpeg"
              alt="Academia de Agua 2"
              className="w-full h-full object-cover object-[center_0%] rounded-lg shadow-lg"
            />
            <img
              src="/projects/aguas-andinas/aa-3.jpeg"
              alt="Academia de Agua 3"
              className="w-full h-full object-cover object-[center_0%] rounded-lg shadow-lg"
            />
            <img
              src="/projects/aguas-andinas/aa-4.jpeg"
              alt="Academia de Agua 4"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Temas Explorados */}
          <div className="mb-12 px-2">
            <h3 className="text-2xl font-semibold mb-6 mt-18 text-stone-700 text-center lg:text-left">
              Temas Explorados:
            </h3>
            <ul className="list-disc list-inside space-y-4 text-stone-700 font-light">
              <li>
                <strong>Seguridad Hídrica:</strong> Análisis de la disponibilidad y acceso al agua en el territorio nacional, identificando desafíos y oportunidades para garantizar el suministro sostenible.
              </li>
              <li>
                <strong>Gobernanza del Agua:</strong> Estudio de los marcos institucionales, políticas públicas y mecanismos de participación ciudadana en la gestión del recurso hídrico.
              </li>
              <li>
                <strong>Políticas Públicas:</strong> Revisión de la normativa y políticas relacionadas con el agua en Chile, incluyendo regulación, protección de ecosistemas y gestión de cuencas.
              </li>
              <li>
                <strong>Innovación y Tecnología:</strong> Exploración de soluciones tecnológicas para la gestión hídrica, incluyendo sistemas de monitoreo, tratamiento de aguas y eficiencia en el uso del recurso.
              </li>
              <li>
                <strong>Cambio Climático y Adaptación:</strong> Comprensión de los impactos del cambio climático en los recursos hídricos y estrategias de adaptación para comunidades vulnerables.
              </li>
              <li>
                <strong>Protección de Ecosistemas:</strong> Importancia de la conservación de ecosistemas acuáticos y su rol en la resiliencia hídrica.
              </li>
            </ul>
          </div>

          {/* Instituciones Participantes */}
          <div className="mb-12 px-2">
            <h3 className="text-2xl font-semibold mb-6 mt-18 text-stone-700 text-center lg:text-left">
              Instituciones y Mentores Participantes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-700 font-light">
              <ul className="list-disc list-inside space-y-2">
                <li>Dirección General de Aguas (DGA)</li>
                <li>Dirección de Obras Hidráulicas (DOH)</li>
                <li>Ministerio de Medio Ambiente</li>
                <li>IUCN South America</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Remote Waters</li>
                <li>Kilimo</li>
                <li>Yaku Biofiltro</li>
                <li>Aguas Andinas</li>
              </ul>
            </div>
          </div>

          {/* Reflexión Final */}
          <div className="bg-teal-50 border-l-4 border-teal-700 p-6 rounded-lg my-12">
            <p className="text-stone-700 font-light italic text-lg text-center">
              💧 "El agua es más que un recurso: es resiliencia y vida"
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
