import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectLifePaths = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte

  return (
    
<section className="min-h-screen flex items-center justify-center py-40">
  <RevealOnScroll>


    <div className="max-w-5xl w-full mx-auto px-6">

           {/* Título */}
  <div className="flex flex-col items-center">
    <span className="text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to bg-stone-700  bg-clip-text tracking-tight text-transparent">Life Paths - Park-Fit (uni.xyz). </span>
      <p className=" max-w-xl py-2 font-semibold tracking-tighter text-teal-700"> Concurso internacional de diseño, rediseño y propuesta de infraestructura y mobiliario urbano para el parque Victoria Park, Sydney, Australia.</p> 
  </div>

    {/* Línea separadora */}
    <div className="w-full border-b-2 border-stone-700/20 rounded-b- mt-4 mb-18"></div>

      {/* Imagen individual */}
      <div className="flex justify-center my-10 mb-2">
        <img
          src="/projects/life-paths/LifePaths-1.jpg"
          alt="Imagen Destacada"
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-center my-6 mb-16">
      <a href=" https://noticias.uai.cl/alumno-del-design-lab-es-destacado-en-concurso-internacional-para-rediseno-de-parques-urbano-en-australia/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline">
      Nota/Publicación de Universidad.
      </a>
      </div>


      {/* Imagen individual */}
      <div className="flex justify-center my-10 mb-2">
        <img
          src="/projects/life-paths/LifePaths-2.jpg"
          alt="Imagen Destacada"
          className="w-210 h-auto rounded-lg shadow-lg"
        />
      </div>


      <div className="flex justify-center my-6 mb-16">
      <a href=" https://www.instagram.com/uni.xyz/?hl=es" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline">
      Publicación Instagram de uni.xyz.
      </a>
      </div>


    </div>
  </RevealOnScroll>
</section>
  );
};

