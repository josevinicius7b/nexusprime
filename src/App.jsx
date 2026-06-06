import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Projects from './components/Projects';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CtaFooter from './components/CtaFooter';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Projects />
          <Process />
          <Stats />
          <Testimonials />
          <FAQ />
          <Contact />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
