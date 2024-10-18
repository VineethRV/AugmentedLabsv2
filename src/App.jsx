import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";
import ContactUs from "./components/ContactUs/page";
import Blogs from "./components/Blogs/BlogList";
import About from "./components/About/page";
import Services from "./components/Services/page";
import BlogPost from './blogs/blog1/Blog1';
import PrintingService from "./components/Services/Services/3dprinting";
// Layout component to handle particle background changes
const Layout = ({ children }) => {
  const location = useLocation(); // Use inside Router
  const [particlesBackground, setParticlesBackground] = useState("#000"); // Default black background
  const [particlesColor, setParticlesColor] = useState("#FFF"); // Default white particles color

  useEffect(() => {
    // Set particle background color and particles color based on route
    if (location.pathname === "/blogs") {
      setParticlesBackground("#FFF"); // White background for blogs
      setParticlesColor("#000"); // Black particles for white background
    } else {
      setParticlesBackground("#000"); // Black background everywhere else
      setParticlesColor("#FFF"); // White particles for black background
    }
  }, [location.pathname]); // Update whenever route changes

  return (
    <>
      {/* Pass down children to render nested routes */}
      {children}
      {/* Render Particles component based on dynamic background */}
      <ParticlesBackground backgroundColor={particlesBackground} particlesColor={particlesColor} />
    </>
  );
};

// Particle background component
const ParticlesBackground = ({ backgroundColor, particlesColor }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize particles once on mount
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: backgroundColor, // Set dynamic background color
    },
    fpsLimit: 120,
    particles: {
      color: { value: particlesColor }, // Set dynamic particles color
      links: {
        enable: true,
        color: particlesColor, // Set dynamic links color
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      size: {
        value: { min: 1, max: 5 },
      },
      opacity: {
        value: 0.5,
      },
    },
    detectRetina: true,
  }), [backgroundColor, particlesColor]); // Update particles when background or color changes

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Router>
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage} />

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage} />

        {/* Layout to handle particle background */}
        <Layout>
          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs/Filament-Recycler" element={<BlogPost />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/3dprinting" element={<PrintingService />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </div>
  );
}
