import './App.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

function App() {
  
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
