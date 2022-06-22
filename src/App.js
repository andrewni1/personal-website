import './App.css';
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <div className="landing-page">
        <Landing />
      </div>
      <div className="App">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
