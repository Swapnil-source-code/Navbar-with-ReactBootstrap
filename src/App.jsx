import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar/Navigationbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Aboutus from './components/About/Aboutus';
import Contactus from './components/Contact/Contactus';

function App() {


  return (
    <>
      <Navigationbar /> 
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="home" element={<Home/> } />
        <Route path="service" element={<Service/> } />
        <Route path="aboutus" element={<Aboutus/> } />
        <Route path="contactus" element={<Contactus/> } />
      </Routes>
    </>
  )
}

export default App
