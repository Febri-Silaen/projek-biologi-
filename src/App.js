import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './pages/Home';

import Keanekaragaman from './pages/Keanekaragaman';
import Virus from './pages/Virus';
import Protista from './pages/Protista';
import Fungi from './pages/Fungi';
import Plantae from './pages/Plantae';
import Animalia from './pages/Animalia';
import Quiz from './pages/Quiz';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Zygomycota from './pages/Zygomycota';
import Ascomycota from './pages/klasifikasi/Ascomycota';
import Basidiomycota from './pages/klasifikasi/Basidiomycota';
import Deuteromycota from './pages/klasifikasi/Deuteromycota'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/keanekaragaman" element={<Keanekaragaman />} />
            <Route path="/virus" element={<Virus />} />
            <Route path="/protista" element={<Protista />} />
            <Route path="/fungi" element={<Fungi />} />
            <Route path="/plantae" element={<Plantae />} />
            <Route path="/Animalia" element={<Animalia />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/zygomycota" element={<Zygomycota />}/>
            <Route path="/ascomycota" element={<Ascomycota/>}/>
            <Route path="/basidiomycota" element={<Basidiomycota/>}/>
            <Route path="/deuteromycota" element={<Deuteromycota/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
