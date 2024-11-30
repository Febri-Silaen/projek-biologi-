import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './pages/Home';

import Keanekaragaman from './pages/Keanekaragaman';
import Virus from './pages/Virus';
import StrukturV from "./pages/klasifikasi/StrukturV";
import BentukV from "./pages/klasifikasi/BentukV";
import ReplikasiV from "./pages/klasifikasi/ReplikasiV";
import PenyakitV from "./pages/klasifikasi/PenyakitV";

import Protista from './pages/Protista';
import Fungi from './pages/Fungi';
import Plantae from './pages/Plantae';
import Animalia from './pages/Animalia';
import Quiz from './pages/Quiz';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
            <Route path="/strukturv" element={<StrukturV />} />
            <Route path="/bentukv" element={<BentukV />} />
            <Route path="/replikasiv" element={<ReplikasiV />} />
            <Route path="/penyakitv" element={<PenyakitV />} />
            <Route path="/protista" element={<Protista />} />
            <Route path="/fungi" element={<Fungi />} />
            <Route path="/plantae" element={<Plantae />} />
            <Route path="/Animalia" element={<Animalia />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
