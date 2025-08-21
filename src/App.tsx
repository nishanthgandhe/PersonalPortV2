import { useState } from 'react';
import Loader from './pages/Loader';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && <Loader onFinished={() => setLoading(false)} />}
      {!loading && (
        <>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}