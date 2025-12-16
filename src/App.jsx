import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { About } from "./components/pages/About"; // Nueva página
import { Contact } from "./components/pages/Contact"; // Nueva página
import { Home } from "./components/pages/Home"; // Nueva página
import { ProjectAguasAndinas } from "./components/pages/ProjectAguasAndinas"; // Nueva página
import { ProjectAquaRDC } from "./components/pages/ProjectAquaRDC"; // Nueva página
import { ProjectArchviz } from "./components/pages/ProjectArchviz"; // Nueva página
import { ProjectBiomateriales } from "./components/pages/ProjectBiomateriales"; // Nueva página
import { ProjectDroneVA } from "./components/pages/ProjectDroneVA"; // Nueva página
import { ProjectFabricaciónDigital } from "./components/pages/ProjectFabricaciónDigital"; // Nueva página
import { ProjectLifePaths } from "./components/pages/ProjectLifePaths"; // Nueva página
import { ProjectMiralemu } from "./components/pages/ProjectMiralemu"; // Nueva página
import { ProjectMyService } from "./components/pages/ProjectMyService"; // Nueva página
import { Projects01 } from "./components/pages/Projects01"; // Nueva página
import { Projects02 } from "./components/pages/Projects02"; // Nueva página
import { Projects04 } from "./components/pages/Projects04"; // Nueva página
import { ProjectWarehouse40 } from "./components/pages/ProjectWarehouse40"; // Nueva página
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <Router>  {/* Cambiar con un basename con el nombre del repositorio o solo si alguna vez decido cambiar el subdirectorio */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-t from-teal-50 to-stone-200 text-stone-900`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/engineering" element={<Projects01 />} />
          <Route path="/projects/dev" element={<Projects02 />} />
          <Route path="/projects/bioengineering" element={<Projects04 />} />
          <Route path="/projects/aguas-andinas" element={<ProjectAguasAndinas />} />
          <Route path="/projects/aqua-rdc" element={<ProjectAquaRDC />} />
          <Route path="/projects/life-paths" element={<ProjectLifePaths />} />
          <Route path="/projects/myservice" element={<ProjectMyService />} />
          <Route path="/projects/warehouse-40" element={<ProjectWarehouse40 />} />
          <Route path="/projects/drone-va" element={<ProjectDroneVA />} />
          <Route path="/projects/miralemu" element={<ProjectMiralemu />} />
          <Route path="/projects/archviz" element={<ProjectArchviz />} />
          <Route path="/projects/fabricación-digital" element={<ProjectFabricaciónDigital />} />
          <Route path="/projects/biomateriales" element={<ProjectBiomateriales />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;