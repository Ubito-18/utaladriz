import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/pages/Home"; // Nueva página
import { About } from "./components/pages/About"; // Nueva página
import { Projects } from "./components/pages/Projects"; // Nueva página
import { Contact } from "./components/pages/Contact"; // Nueva página
import { ProjectAquaRDC } from "./components/pages/ProjectAquaRDC"; // Nueva página
import { ProjectLifePaths } from "./components/pages/ProjectLifePaths"; // Nueva página
import { ProjectMyService } from "./components/pages/ProjectMyService"; // Nueva página
import { ProjectSmartSystems } from "./components/pages/ProjectSmartSystems"; // Nueva página
import { ProjectArchviz } from "./components/pages/ProjectArchviz"; // Nueva página
import { ProjectFabricaciónDigital } from "./components/pages/ProjectFabricaciónDigital"; // Nueva página
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/aqua-rdc" element={<ProjectAquaRDC />} /> {/* Página del proyecto individual */}
          <Route path="/projects/life-paths" element={<ProjectLifePaths />} /> {/* Página del proyecto individual */}
          <Route path="/projects/myservice" element={<ProjectMyService />} /> {/* Página del proyecto individual */}
          <Route path="/projects/smart-systems" element={<ProjectSmartSystems />} /> {/* Página del proyecto individual */}
          <Route path="/projects/archviz" element={<ProjectArchviz />} /> {/* Página del proyecto individual */}
          <Route path="/projects/fabricación-digital" element={<ProjectFabricaciónDigital />} /> {/* Página del proyecto individual */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;