import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Projects from './Components/Projects/Projects';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="">

     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="project" element={<Projects />} />
        <Route path="career" element={<Career />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
