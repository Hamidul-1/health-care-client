import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Navbar2 from './Pages/Shared/Navbar2';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
