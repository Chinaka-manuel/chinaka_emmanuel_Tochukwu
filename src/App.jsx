import { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-dark-900 dark:bg-white text-dark-100 dark:text-dark-900 min-h-screen transition-colors duration-300">
        {/* Navigation */}
        <Navbar />

       {/* Main Content */}
       <main>
         {/* Hero Section */}
         <Hero />

         {/* About Section */}
         <About />

         {/* Skills Section */}
         <Skills />

         {/* Projects Section */}
         <Projects />

         {/* Services Section */}
         <Services />

         {/* Experience & Timeline */}
         <Timeline />

         {/* Testimonials */}
         <Testimonials />

         {/* Contact Section */}
         <Contact />
       </main>

       {/* Footer */}
       <Footer />
       </div>
     </ThemeProvider>
   );
 }

export default App;
