import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;
