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
import Privacypolicy from "./page/Privacypolicy";
import Terms from "./page/Terms";
import Cancellation from "./page/Cancellation";
import Adminheader from "./Admin/Adminheader";
import Admin from "./Admin/Admin";
import Changepassword from "./Admin/Changepassword";
import Contactdetails from "./Admin/Contactdetails";
import Adminfooter from "./Admin/Adminfooter";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Home" element={<Home/>} />
          <Route path="Header" element={<Header />} />
          <Route path="Footer" element={<Footer/>} />
          <Route path="About" element={<About/>} />
          <Route path="Service" element={<Service/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Domains" element={<Domains/>} />
          <Route path="Phd"  element={<Phd/>} />
          <Route path="Privacypolicy" element={<Privacypolicy/>} />
          <Route path="Terms" element={<Terms/>} />
          <Route path="Cancellation" element={<Cancellation/>} />
          <Route path="Adminheader" element={<Adminheader/>} />
          <Route path="Admin" element={<Admin/>} />
          <Route path="Changepassword" element={<Changepassword/>} />
          <Route path="Contactdetails" element={<Contactdetails/>} />
          <Route path="Adminfooter" element={<Adminfooter/>} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
