import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';

const  App = () => {

  return (
    <BrowserRouter>
         <div className='main'>
          <nav className='container'>
            <Link className='nav-item' to="/">Home</Link>
            <Link className='nav-item' to="/about">About</Link>
            <Link className='nav-item' to="/skills">Skills</Link>
            <Link className='nav-item' to="/project">Project</Link>
            <Link className='nav-item' to="/contact">Contact</Link>
             </nav>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;

