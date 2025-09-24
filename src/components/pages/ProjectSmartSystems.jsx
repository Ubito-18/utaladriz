import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectSmartSystems = () => {

    useEffect(() => {
      // Esto asegura que el scroll se coloque en la parte superior de la página
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

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Metalogi.ai </h3>
          <p className="text-stone-700 font-light mb-24">
            Empresa de inteligencia artificial a nivel industrial para la entrega de servicios IoT, presentes en Chile, Argentina, USA y próximamente en Canadá. Entre sus servicios, destacan plataformas de «Smart Logistics», «Smart Parking» y «Smart Condominium», las cuales integran servicios de notificaciones y alertas inteligentes personalizadas según reglas de seguridad para automatizar operaciones, a través de algoritmos de Video Analytics en conjunto con una Plataforma Cloud.
          </p>
          
          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto “Warehouse 4.0” - Nodos de procesamiento de datos</h3>
          <p className="text-stone-700 font-light mb-10">
            Elaboración de documentación técnica, planimetrías y modelos 3D de dispositivos IoT (nodos), los cuales cuentan con tecnología de procesamiento de datos localmente, para luego ejecutar acciones y automatizar procesos operacionales. Utilizan cámaras de video analítica para el acceso de vehículos, reconocimiento de personal, cargas, entre otros.
          </p>
          
          {/* Galería de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 mb-24">
            {[1, 2, 3, 4].map((num) => (
              <img
                key={num}
                src={`/projects/exe-iot/nodo-${num}.png`}
                alt={`Nodo ${num}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto “Drone V.A” - Dron de Video Analítica</h3>
          <p className="text-stone-700 font-light mb-10">
            Trabajo de modelación e impresión 3D para piezas de Dron de video analítica, diseñado para reconocer inventario en bodegas industriales. Por otro lado, también colaboré con la calibración de vuelo del Dron y en la realización de pruebas.
          </p>

          {/* Imágenes del drone */}
          <div className="flex flex-col md:flex-row gap-6 my-10 items-start justify-center">
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

          {/* Video de YouTube */}
          <div className="flex justify-center my-10 mb-24">
            <iframe
              className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YzVvWxcm3Jk"
              title="Video de YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto “Miralemu” - Desarrollo de Aplicación Móvil</h3>
          <p className="text-stone-700 font-light mb-6">
            Desarrollo de aplicación móvil multiplataforma (Android/iOS) para apertura/cierre automatizado de portones y barreras de acceso en condominio, integrada a una plataforma Cloud, infraestructura de borde, IoT y analítica de video con Machine Learning. Permite control remoto, gestión de usuarios y notificaciones en tiempo real, mejorando la seguridad y reduciendo costos operacionales en hasta un 50%.
          </p>
          
          {/* Imágenes de Miralemu - Primera fila */}
          <div className="flex flex-col md:flex-row gap-8 my-8 justify-center items-center">
            <img
              src="/projects/exe-iot/miralemu-1.jpeg"
              alt="Miralemu 1"
              className="w-full h-auto md:w-3/10 rounded-lg shadow-lg"
            />
            <img
              src="/projects/exe-iot/miralemu-2.jpeg"
              alt="Miralemu 2"
              className="w-full h-auto md:w-3/10 rounded-lg shadow-lg"
            />
          </div>
          
          {/* Imágenes de Miralemu - Segunda fila */}
          <div className="flex justify-center my-8">
            <img
              src="/projects/exe-iot/miralemu-3.jpeg"
              alt="Miralemu 3"
              className="w-full md:w-8/10 h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h4 className="text-xl font-semibold mb-4 text-stone-700">Contribución técnica:</h4>
          <ul className="text-stone-700 font-light mb-10 space-y-2">
            <li>• Desarrollo con React Native + Expo.</li>
            <li>• Creación de interfaz moderna y responsiva con Tailwind CSS + NativeWind, con soporte de tema claro/oscuro.</li>
            <li>• Diseño y desarrollo de flujos de autenticación seguros (login, recuperación de contraseña, verificación de dispositivo).</li>
            <li>• Implementación de comunicación en tiempo real vía WebSockets.</li>
            <li>• Integración de Firebase Cloud Messaging (FCM) para envío y recepción de notificaciones push.</li>
            <li>• Configuración avanzada de proyectos nativos en Android/iOS (Gradle, Xcode, Firebase).</li>
            <li>• Arquitectura modular con separación de componentes, hooks, servicios y utilidades.</li>
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
};