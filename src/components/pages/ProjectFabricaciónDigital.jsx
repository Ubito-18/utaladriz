import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectFabricaciónDigital = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte

  return (
    
<section className="min-h-screen flex items-center justify-center py-40">

<RevealOnScroll>
    <div className="max-w-5xl w-full mx-auto px-6">

        {/* Título */}
  <div className="flex flex-col items-center lg:items-stretch">
    <span className="text-5xl font-bold bg-gradient-to-r from-stone-700 via-stone-600 to bg-stone-700  bg-clip-text tracking-tight text-transparent">Fabricación Digital - UAI</span>
      <p className="max-w-xl py-2 font-semibold tracking-tighter text-teal-700">Listado de algunos proyectos realizados en la Universidad.</p> 
  </div>

    {/* Línea separadora */}
    <div className="w-full border-b-2 border-stone-700/20 rounded-b- mt-4 mb-16"></div>


      {/* Descripción del Proyecto */}
      <div className="mb-6"></div>
        <h3 className="text-2xl font-semibold mb-10 text-stone-700">Pabellón, Arquitectura Efímera.</h3>
                
      <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
          Construcción de pabellón mediante fabricación digital, diseño paramétrico en 
          Grasshopper integrando el uso de un router CNC para tener precisión al trabajar con la madera.
        </p>
      </div>     

        {/* Imagen individual */}
        <div className="flex justify-center my-10 mb-16">
        <img
          src="/projects/fabricación-digital-UAI/pabellón.png"
          alt="Imagen Destacada"
          className="w-192 h-auto rounded-lg shadow-lg"
        />
        </div>

        {/* Descripción del Proyecto */}
        <div className="mb-6"></div>
        <h3 className="text-2xl font-semibold mb-10 text-stone-700">Pilar Lumínico Stíli – Proyecto elaborado con el Robot KUKA|PRC.</h3>
        

        {/* Descripción del Proyecto */}
        <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        Stíli es un pilar postmoderno que surge de los órdenes arquitectónicos de la cultura griega, 
        a través de una reinterpretación de los pilares clásicos. Se tomó como referencia al arquitecto Michael Hansmeyer, quien construyó pilares utilizando técnicas de diseño generativo y algoritmos paramétricos, creando formas únicas y complejas mediante modelado digital y técnicas de fabricación.
        </p>
      </div>  

        {/* Imagen individual */}
        <div className="flex justify-center my-10 mb-16">
        <img
          src="/projects/fabricación-digital-UAI/stili-0.jpg"
          alt="Imagen Destacada"
          className="w-192 h-auto rounded-lg shadow-lg"
        />
        </div>


        {/* Descripción del Proyecto */}
        <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        El proceso de fabricación de Stíli comenzó con la creación de una herramienta con filamento PLA utilizando una impresora 3D. Una vez completada la herramienta,
         se montó en el Robot KUKA|PRC. Luego, programamos el brazo robótico para realizar movimientos precisos que permitieran termoformar planchas de PAI con la herramienta, generando así diversas formas.
        </p>

        <p className="text-stone-700 font-light mb-6"> 
        Tras el termoformado, cerramos las planchas de PAI cubriendo los espacios para formar un molde que representara las distintas partes del pilar.
         Por último, se vertió yeso en los moldes para obtener la estructura final y se integraron bases de acrílico para unir las partes, añadiendo luces LED que proyectaban luz difuminada a través del acrílico.
        </p>
        </div>  

        {/* Imagen individual */}
        <div className="flex justify-center my-10 mb-16">
        <img
          src="/projects/fabricación-digital-UAI/stili-2.png"
          alt="Imagen Destacada"
          className="w-190 h-auto rounded-lg shadow-lg"
        />
        </div>

        {/* Imagen individual */}
        <div className="flex justify-center my-10 mb-16">
        <img
          src="/projects/fabricación-digital-UAI/kuka.png"
          alt="Imagen Destacada"
          className="w-190 h-auto rounded-lg shadow-lg"
        />
        </div>

        {/* Imágenes */}
<div className="flex flex-col md:flex-row justify-center my-10 mb-16 gap-8 md:gap-28">
  <img
    src="/projects/fabricación-digital-UAI/stili-1.png"
    alt="Imagen Destacada"
    className="w-full md:w-86 md:h-auto rounded-lg shadow-lg"
  />

  <img
    src="/projects/fabricación-digital-UAI/stili-3.png"
    alt="Imagen Destacada"
    className="w-full md:w-75 md:h-auto rounded-lg shadow-lg"
  />
</div>

{/* Descripción del Proyecto */}
<h3 className="text-2xl font-semibold mb-10 text-stone-700 text-center md:text-left">
  Flat Pack Furniture Design – Taller de Productos.
</h3>

<div className="mb-16 text-center md:text-left">
  <p className="text-stone-700 font-light mb-6">
    Diseño de mobiliario de prueba para su fabricación a través de cortes por chorro de agua (water jet) y uso de CNC router.
  </p>
</div>

{/* Imagen individual */}
<div className="flex justify-center my-10 mb-16">
  <img
    src="/projects/fabricación-digital-UAI/waterjet.png"
    alt="Imagen Destacada"
    className="w-full md:w-auto h-64 md:h-88 rounded-lg shadow-lg"
  />
</div>

{/* Grupo de imágenes */}
<div className="flex flex-col md:flex-row justify-center my-10 mb-16 gap-8 md:gap-28">
  <img
    src="/projects/fabricación-digital-UAI/mesa-1.jpg"
    alt="Imagen Destacada"
    className="w-full md:w-auto h-64 md:h-88 rounded-lg shadow-lg"
  />

  <img
    src="/projects/fabricación-digital-UAI/mesa-2.jpg"
    alt="Imagen Destacada"
    className="w-full md:w-auto h-64 md:h-88 rounded-lg shadow-lg"
  />
</div>

        {/* Descripción del Proyecto */}
        <div className="mb-6"></div>
        <h3 className="text-2xl font-semibold mb-10 text-stone-700">Maqueta del Proyecto 8 Quebradas.</h3>

        {/* Descripción del Proyecto */}
        <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        Proceso de fabricación de la maqueta mediante CNC Router.
        </p>
        </div>

          {/* Imagen individual */}
          <div className="flex flex-col md:flex-row justify-center my-10 mb-16 gap-8 md:gap-28">
        <img
          src="/projects/fabricación-digital-UAI/cnc-maqueta.png"
          alt="Imagen Destacada"
          className="w-auto h-80 rounded-lg shadow-lg"
        />

        <img
          src="/projects/fabricación-digital-UAI/maqueta.png"
          alt="Imagen Destacada"
          className="w-auto h-80 rounded-lg shadow-lg"
        />
        </div>


        {/* Descripción del Proyecto */}
        <div className="mb-6"></div>
        <h3 className="text-2xl font-semibold mb-10 text-stone-700">Mochila de Seguridad Vial - Kooba.</h3>
        

        {/* Descripción del Proyecto */}
        <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        Mochila cuya finalidad consistía en promover la comunicación entre ciclistas y conductores de automóviles mediante señalizaciones LED para prevenir accidentes. 
        Fue elaborada utilizando tecnología Arduino con iluminación RGB y cuenta con un panel solar integrado como fuente de energía.
        </p>
        </div>


        {/* Imágenes */}
        <div className="flex flex-col md:flex-row justify-center my-10 mb-16 gap-8 md:gap-28">
        <img
          src="/projects/fabricación-digital-UAI/kooba-1.png"
          alt="Imagen Destacada"
          className="w-80 h-auto rounded-lg shadow-lg"
        />

        <img
          src="/projects/fabricación-digital-UAI/kooba-2.png"
          alt="Imagen Destacada"
          className="w-80 h-auto rounded-lg shadow-lg"
        />
        </div>


        {/* Descripción del Proyecto */}
        <div className="mb-6"></div>
        <h3 className="text-2xl font-semibold mb-10 text-stone-700">Transportador.</h3>
        

        {/* Descripción del Proyecto */}
        <div className="mb-16">
        <p className="text-stone-700 font-light mb-6">
        En este trabajo, se debía diseñar y construir un transportador bioinspirado en algún animal de África. En mi caso, el animal asignado fue el cocodrilo.
        El objetivo era crear un transportador que interactuara con niños a través de un juego desarrollado por el grupo, teniendo en cuenta las características del animal y representándolas mediante tecnología Arduino.
        </p>
        </div>

        {/* Imágenes */}
        <div className="flex flex-col md:flex-row justify-center my-10 mb-16 gap-8 md:gap-28">
        <img
          src="/projects/fabricación-digital-UAI/cocodrilo-1.jpeg"
          alt="Imagen Destacada"
          className="w-auto h-100 rounded-lg shadow-lg"
        />

        <img
          src="/projects/fabricación-digital-UAI/cocodrilo-2.png"
          alt="Imagen Destacada"
          className="w-auto h-100 rounded-lg shadow-lg"
        />
        </div>


    </div>
  </RevealOnScroll>
</section>
  );
};
