import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;