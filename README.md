# 🚀 Portfolio - Ubaldo Taladriz

Un portfolio moderno y responsivo construido con React, Vite, y TailwindCSS, desplegado automáticamente en GitHub Pages.

## 🛠️ Stack Tecnológico

- **Frontend Framework:** React 19.0.0
- **Build Tool:** Vite 6.2.0
- **Styling:** TailwindCSS 4.0.14
- **Routing:** React Router DOM 7.4.0
- **Animations:** Framer Motion 12.5.0
- **Icons:** React Icons 5.5.0
- **Email Service:** EmailJS
- **Linting:** ESLint 9.21.0
- **Deployment:** GitHub Pages

## 📁 Estructura del Proyecto

```
u-portafolio/
├── public/                 # Assets estáticos
│   ├── projects/          # Imágenes de proyectos
│   └── _redirects         # Configuración para SPA
├── src/                   # Código fuente
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   └── assets/           # Assets del código fuente
├── dist/                 # Build de producción (generado)
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
└── eslint.config.js      # Configuración de ESLint
```

## 🚀 Getting Started

### Prerrequisitos

- Node.js (versión 18.0.0 o superior)
- npm (viene con Node.js)
- Git

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Ubito-18/utaladriz.git
   cd utaladriz
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

### Desarrollo

```bash
# Inicia el servidor de desarrollo con Hot Module Replacement
npm run dev

# Vista previa de la build de producción
npm run preview
```

### Build y Calidad de Código

```bash
# Construye la aplicación para producción
npm run build

# Ejecuta el linter para identificar problemas de código
npm run lint

# Ejecuta el linter y corrige errores automáticamente
npm run lint -- --fix
```

### Deployment

```bash
# Despliega automáticamente a GitHub Pages
npm run deploy

# Script interno: construye antes del deploy
npm run predeploy
```

## 🔄 Workflow de Desarrollo

### 1. Desarrollo Local

```bash
# 1. Crear una nueva rama para tu feature
git checkout -b feature/nueva-funcionalidad

# 2. Iniciar desarrollo
npm run dev

# 3. Hacer cambios y commits
git add .
git commit -m "feat: agregar nueva funcionalidad"

# 4. Push de la rama
git push origin feature/nueva-funcionalidad
```

### 2. Control de Calidad

```bash
# Verificar calidad del código antes del merge
npm run lint
npm run build  # Verificar que la build funciona
```

### 3. Merge y Deploy

```bash
# 1. Merge a master (después del PR)
git checkout master
git pull origin master

# 2. Deploy automático a producción
npm run deploy
```

## 🌐 Deployment

Este proyecto utiliza **GitHub Pages** con un workflow optimizado:

### Configuración Actual

- **Rama de desarrollo:** `master` (código fuente)
- **Rama de producción:** `gh-pages` (build compilado)
- **URL de producción:** https://www.utaladriz.com/

### Proceso de Deployment

1. **Automático con npm:**
   ```bash
   npm run deploy
   ```
   
   Este comando:
   - Ejecuta `npm run build`
   - Sube el contenido de `/dist` a la rama `gh-pages`
   - GitHub Pages sirve automáticamente desde `gh-pages`

2. **Manual (si es necesario):**
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

### Configuraciones de Deployment

- **Vite Config:** Base path configurado como `/`
- **Package.json:** Homepage apunta a `https://www.utaladriz.com/`
- **Historia de rutas:** Configurado para SPA con React Router

## 🔧 Configuración Avanzada

### Variables de Entorno

Crear un archivo `.env.local` para variables locales:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Optimizaciones de Build

La configuración actual incluye:

- **Code Splitting** automático
- **Tree Shaking** para eliminar código no usado
- **Minificación** de CSS y JS
- **Optimización de imágenes**
- **Lazy Loading** de componentes

### SEO y Performance

- **Meta tags** configurados en `index.html`
- **Lazy loading** de imágenes de proyectos
- **Animaciones optimizadas** con Framer Motion
- **CSS crítico** inlineado automáticamente

## 🐛 Troubleshooting

### Problemas Comunes

1. **Error de rutas en producción:**
   ```bash
   # Verificar que _redirects existe en /public
   echo "/* /index.html 200" > public/_redirects
   ```

2. **Problemas con GitHub Pages:**
   ```bash
   # Limpiar y redesplegar
   rm -rf dist
   npm run deploy
   ```

3. **Errores de linting:**
   ```bash
   # Corregir automáticamente
   npm run lint -- --fix
   ```

## 📊 Performance

### Métricas Objetivo

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

### Herramientas de Monitoreo

- **Lighthouse** (integrado en Chrome DevTools)
- **PageSpeed Insights**
- **Web Vitals** extension

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Convenciones de Commits

Utiliza [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar tests
chore: cambios en build o herramientas
```

## 📞 Contacto

- **Website:** https://www.utaladriz.com/
- **Email:** [tu-email@ejemplo.com]
- **LinkedIn:** [tu-linkedin]
- **GitHub:** [@Ubito-18](https://github.com/Ubito-18)

## 📜 Licencia

Este proyecto es privado y pertenece a Ubaldo Taladriz.

---

⭐ **¿Te gusta el proyecto?** ¡Dale una estrella en GitHub!
