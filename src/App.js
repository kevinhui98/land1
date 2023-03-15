import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "kevin's portfolio";
  }, []
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;