import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Portfolio />} path='/portafolio' />
        <Route element={<Resume />} path='/resume' />
        <Route element={<AboutMe />} path='/about' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </>
  );
}

export default App;
