import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectArchviz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-40">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto px-4 md:px-6">
          {/* Título */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to bg-stone-700 bg-clip-text tracking-tight text-transparent">
              Archviz & Planimetrías
            </span>
            <p className="max-w-xl py-2 font-semibold tracking-tighter text-teal-700 text-center md:text-left">
              Modelación 3D y trabajo de planimetrías 2D.
            </p>
          </div>

          <div className="w-full border-b-2 border-stone-700/20 rounded-b- mt-4 mb-8"></div>

          {/* Descripción del Proyecto */}
          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Archviz: Rhino + UE5</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
            <li>Modelado y UV mapping en <strong>Rhino.</strong></li>
            <li>Renders estilo maqueta con <strong>V-Ray</strong></li>
            <li>Environment, materiales, texturización, iluminación y renderizado en <strong>Unreal Engine 5.</strong></li>
            <li>Posproducción en <strong>DaVinci Resolve:</strong> Edición de video, edición de audio, composición y corrección de color</li>
          </ul>

          {/* Contenedor de imagen */}
          <div className="flex justify-center my-6">
            <img src="/projects/archviz/render-1.png" alt="Imagen Destacada" className="w-full md:w-3/4 rounded-lg shadow-lg" />
          </div>

          {/* Video de YouTube */}
          <div className="flex justify-center my-6">
            <iframe
              className="w-full md:w-3/4 h-48 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/usj02Bqiy8Y"
              title="Video de YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>


          {/* Imagen individual */}
          <div className="flex justify-center my-10">
            <img
              src="/projects/archviz/render-3.png"
              alt="Imagen Destacada"
              className="w-full max-w-screen-md h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Descripción del Proyecto */}
          <div className="mb-18">
            <h3 className="text-2xl font-semibold mb-10 text-stone-700">
              Studio - Presentación de Productos.
            </h3>

            <ul className="list-disc list-inside space-y-2 mb-10 text-stone-700">
              <li>Modelado y UV mapping en <strong>Rhino.</strong></li>
              <li>Materiales, texturización, iluminación, creación de blueprints (cambio de nivel/escena, modificación de materiales, descomposición de objetos, rieles de cámaras, y superposición de interfaz de usuario), así como empaquetado en <strong>Unreal Engine 5.</strong></li>
            </ul>
          </div>

          {/* Imagen individual */}
          <div className="flex justify-center my-10">
            <img
              src="/projects/archviz/render-4.png"
              alt="Imagen Destacada"
              className="w-full max-w-screen-md h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Video de YouTube */}
          <div className="flex justify-center my-10">
            <div className="w-full max-w-screen-md aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1nE9xeKv-tA"
                title="Video de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Descripción del Proyecto */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-10 text-stone-700">
              Proyecto 8 Quebradas – Taller Diseño de Espacios.
            </h3>

            <p className="text-stone-700 font-light mb-6">
              Este proyecto, diseñado por el reconocido arquitecto español Josep Ferrando, se ubica frente al mar al sur de la ciudad de Los Vilos, en la región de Coquimbo. 
              El proyecto Ochoquebradas tiene como objetivo desarrollar viviendas para lotes individuales y comunidades, buscando una integración armónica tanto con el entorno geográfico y paisajístico como entre las propias viviendas, garantizando una arquitectura de calidad a largo plazo.
            </p>
          </div>

          {/* Galería de imágenes */}
          <div className="flex flex-wrap justify-center gap-2 my-10">
            <img src="/projects/archviz/image-1.png" alt="Imagen Destacada" className="w-full  md:w-1/3 lg:w-56 h-auto rounded-lg shadow-lg" />
            <img src="/projects/archviz/image-2.png" alt="Imagen Destacada" className="w-full  md:w-1/3 lg:w-56 h-auto rounded-lg shadow-lg" />
            <img src="/projects/archviz/image-3.png" alt="Imagen Destacada" className="w-full  md:w-1/3 lg:w-56 h-auto rounded-lg shadow-lg" />
            <img src="/projects/archviz/image-4.png" alt="Imagen Destacada" className="w-full  md:w-1/3 lg:w-56 h-auto rounded-lg shadow-lg" />
          </div>

          {/* Descripción del Proyecto */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-10 text-stone-700">Refugio "M".</h3>

            <p className="text-stone-700 font-light mb-6">
              Diseñado en base a diagonales, planicie (planta cuadrada) de 90 m2.
            </p>
          </div>

          {/* Galería de imágenes */}
          <div className="flex flex-wrap justify-center gap-6 my-10">
            <img src="/projects/archviz/m1.png" alt="Imagen Destacada" className=" sm:w-1/3 md:w-1/4 lg:h-56 rounded-lg shadow-lg" />
            <img src="/projects/archviz/m2.png" alt="Imagen Destacada" className=" sm:w-1/3 md:w-1/4 lg:h-56 rounded-lg shadow-lg" />
            <img src="/projects/archviz/m3.png" alt="Imagen Destacada" className=" sm:w-1/3 md:w-1/4 lg:h-56 rounded-lg shadow-lg" />
          </div>


    </div>
    </RevealOnScroll>
</section>
  );
};




