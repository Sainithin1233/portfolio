import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/projects" element={<Projects />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/skills" element={<Skills />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
