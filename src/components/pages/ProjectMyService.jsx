import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectMyService = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte

  return (
    
<section className="min-h-screen flex items-center justify-center py-10">
<RevealOnScroll>
    <div className="max-w-5xl w-full mx-auto px-6">

    {/* Contenedor del Título */}
    <div className="flex flex-wrap items-center justify-between py-20 px-4 relative z-10">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to bg-stone-700 
            bg-clip-text tracking-tight text-transparent">MyService</span>
          <p className="my-2 max-w-xl py-2 font-semibold tracking-tighter text-teal-700"> Indumotora l Kia Chile, Hyundai Camiones & Buses.</p>
        </div>
      </div>
      
      {/* Imagen */}
    
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-8 px-8">
        <img src="/projects/myservice/MyService-Midnight.png" alt="Aqua RDC" className="w-80" /> 
      </div>
    </div>

      {/* Línea separadora */}
      <div className="w-full border-b-2 border-stone-700/20 rounded-b- mt-0 mb-16"></div>

                
      <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        MyService nace como un proyecto impulsado desde fábrica, que involucra a toda la red de concesionarios. 
        Su propósito es estandarizar los flujos de todos los canales de atención, optimizando la gestión de los dealers y homologando la experiencia del cliente. 
        Este proyecto se posiciona como uno de los pilares del área de Transformación Digital, debiendo integrarse al ecosistema digital definido por la compañía.
        </p>

        <p className="text-stone-700 font-light mb-6">
        Dentro de la empresa, esta iniciativa formó parte de mis principales responsabilidades, estando a cargo de la coordinación, gestión e implementación del proyecto.
        </p>
        
        <p className="text-stone-700 font-light mb-6">
        En este proyecto en particular, lideré la fase de diseño, desarrollando interfaces para tablets y dispositivos móviles. 
        Además, participé en la definición de procesos mediante la creación de diagramas de flujo, gestión de backlogs de requerimientos y elaboración de documentación funcional. Para la implementación de MyService, también realicé focus groups con key users y stakeholders, asegurando la correcta adopción y alineación con las necesidades del negocio.
        </p>

      </div>     

 
        {/* Grupo de imágenes - 2 imágenes */}
        <div className="flex flex-wrap object-contain justify-center gap-6 my-10 mb-16">
          <img
            src="/projects/myservice/focus-groups.png"
            alt="Imagen Destacada"
            className="xl:w-auto h-118 rounded-lg shadow-lg"
          />

          <img
            src="/projects/myservice/publicación.png"
            alt="Imagen Destacada"
            className="xl:w-auto h-118 rounded-lg shadow-lg"
          />
        </div>

        {/* Grupo de imágenes - 3 imágenes */}
        <div className="flex flex-wrap justify-center gap-6 my-10 mb-16">
          <img
            src="/projects/myservice/interfaz-1.png"
            alt="Imagen Destacada"
            className=" xl:w-auto h-112 rounded-3xl shadow-lg"
          />

          <img
            src="/projects/myservice/interfaz-2.png"
            alt="Imagen Destacada"
            className=" xl:w-auto h-112 rounded-3xl shadow-lg"
          />

          <img
            src="/projects/myservice/interfaz-3.png"
            alt="Imagen Destacada"
            className=" xl:w-auto h-112 rounded-3xl shadow-lg"
          />
        </div>
    </div>
    </RevealOnScroll>
</section>
  );
};

