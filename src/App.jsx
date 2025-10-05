import Header from './components/Header'
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    

    </div>
  );
}

export default App;