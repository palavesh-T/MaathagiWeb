import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; 
import Header from './page/Header';
import Home from "./page/Home";
import Footer from "./page/Footer";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Domains from "./page/Domanis";
import Phd from "./page/Phd";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Home" element={<Home/>} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Domains" element={<Domains/>} />
          <Route path="/Phd"  element={<Phd/>} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
