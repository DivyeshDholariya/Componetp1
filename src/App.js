
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';

import Footer from './Component/Footer/Footer';


// router files
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.js";
import AboutMe from './Pages/AboutMe.js';
import Ask from './Pages/Ask.js';
import Four from './Pages/Four.js';
import Contact from './Component/Contact/Contact.js';
import ContactMe from './Pages/ContactMe.js';




function App() {
  return (

    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/faq" element={<Ask/>} />
        <Route path="/blog" element={<Four/>} />
        <Route path="/contact" element={<ContactMe/>} />


      </Routes>

      <Footer></Footer>
      {/* <Contact></Contact> */}


    </div>


  );
}

export default App;
