import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte

  const fabricationSkills = ["Arduino", "3D Modeling", "3D Printing", "CNC", "Laser Cutting", "Waterjet", "Rhino/Grasshopper", "Fusion 360", "Inventor", "UE5", "V-Ray"];
  const uxuiSkills = ["Figma", "Adobe Creative Suite", "Design Tokens", "Design Systems", "User Research", "Prototyping", "Miro"];
  const developmentSkills = ["React", "React Native", "TypeScript", "JavaScript", "TailwindCSS", "Node.js", "Express.js", "Firebase", "Expo", "Git"];
  const dataSkills = ["Python", "SQL", "Postgres", "Pandas", "Numpy", "Matplotlib", "Power BI", "Excel", "Scikit-learn", "Tableau"];


  

  return (
    <section id="about" className="main-content min-h-full flex items-center justify-center py-16">
      <RevealOnScroll>
 
        {/* Franja gris horizontal */}
        <div className="w-full bg-gray-200 py-20 border border-gray-700/20 shadow-inner flex justify-center">
          <div className="max-w-5xl text-center px-6">
            <h2 className="text-5xl font-bold mb-10 text-stone-700 text-center">Sobre Mí</h2>
            
            <p className="text-stone-700 text-lg mb-5">
              <strong>Ingeniero Civil en Bioingeniería</strong> e <strong>Ingeniero en Diseño</strong> con experiencia en <strong>transformación digital</strong>, <strong>gestión de proyectos</strong>, <strong>análisis de datos</strong> y <strong>desarrollo de productos</strong>.
            </p>
            
            <p className="text-stone-700 text-lg mb-5">
              Especializado en Business Analytics con <strong>Python</strong>, <strong>SQL</strong>, <strong>Excel</strong> y <strong>Power BI</strong>, aplicadas al <strong>análisis</strong>, <strong>visualización</strong> y <strong>automatización de datos</strong>. He liderado proyectos de <strong>diseño UX/UI</strong>, desarrollo de <strong>aplicaciones web y mobile</strong> (<strong>Figma</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Tailwind</strong>), y <strong>fabricación digital</strong> (<strong>modelación e impresión 3D</strong>, <strong>CNC</strong>), aportando una visión integral y multidisciplinaria enfocada en resultados medibles.
            </p>
            
            <p className="text-stone-700 text-lg mb-5">
              En mi tiempo libre me gusta aventurarme en un buen trekking con amigos, acampar, jugar fútbol o practicar algún otro deporte. 🏔️⚽
            </p>
            
          </div>
        </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-6 text-center">
              <SkillSection title="Fabricación Digital" skills={fabricationSkills} />
              <SkillSection title="Diseño UX/UI" skills={uxuiSkills} />
              <SkillSection title="Desarrollo" skills={developmentSkills} />
              <SkillSection title="Datos" skills={dataSkills} />
            </div>

        {/* Educación y Experiencia Laboral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto text-center">
          <InfoSection title="🏫 Educación">
            <ul className="list-disc list-inside text-stone-700 space-y-10">
              <li>
                <strong>Ingeniería en Diseño (Titulado).</strong> - Universidad Adolfo Ibáñez (2018-2024)
              </li>
              <li>
                <strong>Ingeniería Civil en Bioingeniería (Titulado).</strong> - Universidad Adolfo Ibáñez (2017-2022)
              </li>
              <li>
                <strong>Ingeniería Civil en Informática y Telecomunicaciones.</strong> - Universidad Diego Portales (2015-2016)
              </li>
            </ul>
          </InfoSection>

          <InfoSection title="💼 Experiencia Laboral">
            <div className="space-y-10 text-stone-700">
              <div>
                <h4 className="font-semibold"> Ingeniero de Desarrollo de Productos, Jornada Completa. (2024 - 2025)</h4>
                <p>Metalogi.ai, Smart Warning Systems.</p>
              </div>
              <div>
                <h4 className="font-semibold">Ingeniero de Diseño de Productos, Jornada Completa. (2022 - 2024)</h4>
                <p>Indumotora l Kia, Nammi, Hyundai Camiones & Buses y Landking Chile.</p>
              </div>
              <div>
                <h4 className="font-semibold"> Pasante, Jornada Parcial. (2022 - 2023)</h4>
                <p> Emprendimiento Startup School l Facultad de Ingeniería y Ciencias UAI.</p>
              </div>
            </div>
          </InfoSection>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl text-stone-700 font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((tech, key) => (
        <span
          key={key}
          className="bg-teal-600 text-stone-50 py-1 px-3 rounded-full text-sm hover:bg-stone-900/90 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const InfoSection = ({ title, children }) => (
  <div className="glass p-6 rounded-xl text-stone-700 border border-stone-900/20
              hover:-translate-y-1 hover:border-stone-50 
              hover:shadow-[0_0_10px_rgba(0,0,0,100)]
              transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {children}
  </div>
);