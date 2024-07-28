import './style/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/nav/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import Project from './pages/Project';

import ScrollToTop from './utils/Scroll_to_top';

function App() {
  return (
    <div className='App'>
      <Router>
        < ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
