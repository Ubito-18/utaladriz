import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  useEffect(() => {
    // Esto asegura que el scroll se coloque en la parte superior de la página
    window.scrollTo(0, 0);
  }, []); // El arreglo vacío asegura que esto solo ocurra cuando el componente se monte

  const fabricationSkills = ["Arduino","3D Modeling", "3D Printing", "CNC", "Laser Cutting", "Waterjet", "Rhino/Grasshopper", "Fusion 360", "Inventor", "UE5", "V-Ray"];
  const uxuiSkills = ["Figma", "Adobe Creative Suite", "Design Tokens", "Design Systems", "User Research", "Miro/Visio", "Jira,Celoxis"];
  const frontendSkills = ["React", "React Router", "JavaScript ES6", "TailwindCSS v4.0", "CSS 3", "HTML 5", "Vite"];
  const backendSkills = ["Node.js", "Express.js", "APIs", "SQL", "Postgres", "Python", "Git", "Github"];


  

  return (
    <section id="about" className="min-h-full flex items-center justify-center py-16">
      <RevealOnScroll>
 
        {/* Franja gris horizontal */}
        <div className="w-full bg-gray-200 py-20 border border-gray-700/20 shadow-inner flex justify-center">
          <div className="max-w-5xl text-center px-6">
          <h2 className="text-5xl font-bold mb-10 text-stone-700 text-center">Sobre Mí</h2>
            <p className="text-stone-700 text-lg mb-5">
            Me considero un apasionado por la tecnología y la innovación, lo que me ha llevado a explorar y aprender en diversas áreas, desarrollando una visión integral que combina múltiples disciplinas. 
            Tengo experiencia en planificación y gestión de proyectos, diseño UX/UI, fabricación de productos industriales y desarrollo de productos digitales.
            </p>
            <p className="text-stone-700 text-lg mb-5">
            Soy Ingeniero Civil en Bioingeniería y cuento con conocimientos en análisis de datos utilizando Python, SQL (Postgres) y herramientas como Power BI.
            </p>
            <p className="text-stone-700 text-lg mb-5">
            Si no me ves detrás de un computador, es porque estoy aventurándome en un buen trekking con amigos, acampando, jugando fútbol o practicando algún otro deporte. 🏔️⚽
            </p>
            
          </div>
        </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-6 text-center">
              <SkillSection title="Fabricación Digital" skills={fabricationSkills} />
              <SkillSection title="Diseño UX/UI" skills={uxuiSkills} />
              <SkillSection title="Frontend" skills={frontendSkills} />
              <SkillSection title="Backend" skills={backendSkills} />
            </div>

        {/* Educación y Experiencia Laboral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto text-center">
          <InfoSection title="🏫 Educación">
            <ul className="list-disc list-inside text-stone-700 space-y-10">
              <li>
                <strong>Ingeniería en Diseño (Completa).</strong> - Universidad Adolfo Ibáñez (2018-2024)
              </li>
              <li>
                <strong>Ingeniería Civil en Bioingeniería (Completa).</strong> - Universidad Adolfo Ibáñez (2017-2022)
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
                <p>EXE IoT - Metalogic, Smart Warning Systems.</p>
              </div>
              <div>
                <h4 className="font-semibold">Ingeniero de Diseño de Productos, Jornada Completa. (2022 - 2024)</h4>
                <p>Indumotora l Kia Chile, Hyundai Camiones & Buses.</p>
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