import './style/main.css'

import Navbar from './components/nav/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';

function App() {
  return (
    <div className='wrapper'>
    <Navbar />
    
    {/* <Contacts/> */}
    {/* <Home /> */}
    <Projects />
    
    <Footer />
      
    </div>
  );
}

export default App;
