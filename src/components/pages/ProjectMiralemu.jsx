import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const ProjectMiralemu = () => {

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

          <h3 className="text-2xl font-semibold mb-6 text-stone-700">Proyecto "Miralemu" - Desarrollo de Aplicación Móvil</h3>
          <p className="text-stone-700 font-light mb-10">
            Desarrollo de aplicación móvil multiplataforma (Android/iOS), integrada a una plataforma Cloud, infraestructura de borde, IoT y analítica de video con Machine Learning. Permite control remoto, apertura/cierre automatizado de portones y barreras de acceso, gestión de visitas y usuarios, notificaciones en tiempo real, mejorando la seguridad y reduciendo costos operacionales.
          </p>
          
          {/* Galería de imágenes Miralemu */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
            <img
              src="/projects/exe-iot/miralemu-1.jpeg"
              alt="Miralemu 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="/projects/exe-iot/miralemu-2.jpg"
              alt="Miralemu 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="/projects/exe-iot/miralemu-3.jpg"
              alt="Miralemu 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Imagen de tablet */}
          <div className="flex justify-center my-10 mb-24">
            <img
              src="/projects/exe-iot/miralemu-4.jpeg"
              alt="Miralemu Tablet"
              className="w-full md:w-3/4 h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h4 className="text-xl font-semibold mb-4 text-stone-700">Contribución técnica:</h4>
          
          <div className="text-stone-700 font-light mb-10 space-y-6">
            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Arquitectura y Desarrollo Frontend:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Desarrollo con React Native + Expo para aplicación móvil multiplataforma.</li>
                <li>• Creación de interfaz moderna y responsiva con Tailwind CSS + NativeWind, con soporte de tema claro/oscuro dinámico.</li>
                <li>• Arquitectura modular con separación de componentes, hooks personalizados, servicios y utilidades para máxima reutilización.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Autenticación y Seguridad:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Diseño y desarrollo de flujos de autenticación seguros (login, recuperación de contraseña, verificación de dispositivo).</li>
                <li>• Implementación de sistema de permisos basado en roles con HOCs (Higher-Order Components) para control de acceso granular a funcionalidades.</li>
                <li>• Protección de rutas y componentes mediante sistema de perfilamiento de usuarios.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Gestión de Estado y Datos:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Desarrollo de hooks personalizados (useTimeline, useVisits, useDashboard, useAuth) para manejo centralizado de estado complejo.</li>
                <li>• Implementación de sistema de paginación dinámica con carga incremental (infinite scroll).</li>
                <li>• Gestión de filtros avanzados con debouncing para optimización de llamadas API.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Tiempo Real y Notificaciones:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Implementación de comunicación bidireccional en tiempo real vía WebSockets para eventos de timeline.</li>
                <li>• Integración completa de Firebase Cloud Messaging (FCM) para notificaciones push en Android/iOS.</li>
                <li>• Sistema híbrido de notificaciones con manejo de estados foreground/background/killed.</li>
                <li>• Navegación deep-linking desde notificaciones push con apertura automática de modales contextuales.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Funcionalidades de Negocio:</h5>
              <ul className="space-y-2 ml-4">
                <li>
                  <strong>Timeline de Eventos:</strong> Sistema de cronología en tiempo real con categorización (alertas, accesos vehiculares, eventos del sistema), incluyendo:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>- Visualización adaptativa de eventos con iconografía y colores dinámicos basados en "tipo".</li>
                    <li>- Modales de detalle para alertas con capacidad de desactivación y resolución.</li>
                    <li>- Sistema de detección y visualización de accesos vehiculares desconocidos.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gestión Integral de Visitas:</strong> CRUD completo con:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>- Dashboard con estadísticas en tiempo real (visitas programadas hoy/semana, en progreso).</li>
                    <li>- Filtros interactivos multi-criterio (estado, fechas, visitante, vehículo).</li>
                    <li>- Estados de ciclo de vida (Programada → En Progreso → Completada/Cancelada).</li>
                    <li>- Confirmación de llegada de vehículos.</li>
                    <li>- Funcionalidad de duplicación de visitas para agilizar registro.</li>
                    <li>- Pull-to-refresh para actualización manual de datos.</li>
                  </ul>
                </li>
                <li>
                  <strong>Sistema de Alertas:</strong> Visualización y gestión de alertas del sistema con:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>- Captura de imágenes.</li>
                    <li>- Detección automática de patentes vehiculares en eventos.</li>
                    <li>- Código de colores adaptativo según tema (claro/oscuro) para mejor UX.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Configuración Nativa y DevOps:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Configuración avanzada de proyectos nativos en Android (Gradle) e iOS (Xcode, CocoaPods).</li>
                <li>• Integración de Firebase Services en ambas plataformas (google-services.json, GoogleService-Info.plist).</li>
                <li>• Gestión de entitlements, privacy info y configuraciones de build nativas.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">UX/UI Avanzada:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Implementación de RefreshControl para pull-to-refresh en todas las vistas de datos.</li>
                <li>• Indicadores de carga contextuales (skeleton screens, spinners, overlays).</li>
                <li>• Modales dinámicos con formularios complejos y validación.</li>
                <li>• Feedback visual inmediato en acciones del usuario (active states, animaciones).</li>
                <li>• Diseño responsive adaptado a diferentes tamaños de pantalla.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-stone-700 mb-2">Optimización y Performance:</h5>
              <ul className="space-y-2 ml-4">
                <li>• Lazy loading de detalles de eventos para reducir carga inicial.</li>
                <li>• Debouncing en búsquedas y filtros para minimizar peticiones al backend.</li>
                <li>• Gestión eficiente de memoria con cleanup de listeners y callbacks globales.</li>
                <li>• Manejo de estados de error y casos edge (sin conexión, sin datos, sin permisos).</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
