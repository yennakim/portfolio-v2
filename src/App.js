import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
