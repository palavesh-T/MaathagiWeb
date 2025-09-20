import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; 
import PrivateRoute from './components/PrivateRoute';
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
import Softwaredevelopment from "./page/Softwaredevelopment";
import Pricing from "./page/Pricing";

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
          <Route path="Pricing" element={<Pricing/>} />
          <Route path="Phd"  element={<Phd/>} />
          <Route path="Privacypolicy" element={<Privacypolicy/>} />
          <Route path="Terms" element={<Terms/>} />
          <Route path="Cancellation" element={<Cancellation/>} />
          <Route path="Softwaredevelopment" element={<Softwaredevelopment/>} />
          <Route path="Adminheader" element={<PrivateRoute><Adminheader/></PrivateRoute>} />
          <Route path="Admin" element={<Admin/>} />
          <Route path="Changepassword" element={<PrivateRoute><Changepassword/></PrivateRoute>} />
          <Route path="Contactdetails" element={<PrivateRoute><Contactdetails/></PrivateRoute>} />
          <Route path="Adminfooter" element={<PrivateRoute><Adminfooter/></PrivateRoute>} />      
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;