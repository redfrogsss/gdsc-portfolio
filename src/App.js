import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
}

export default App;
