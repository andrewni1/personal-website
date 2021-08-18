import './App.css';
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
