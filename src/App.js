// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biology from './pages/Biology';
import RuangLingkup from './pages/RuangLingkup';
import Keanekaragaman from './pages/Keanekaragaman';
import Virus from './pages/Virus';
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
            <Route path="/biology" element={<Biology />} />
            <Route path="/ruang-lingkup" element={<RuangLingkup />} />
            <Route path="/keanekaragaman" element={<Keanekaragaman />} />
            <Route path="/virus" element={<Virus />} />
            <Route path="/protista" element={<Protista />} />
            <Route path="/fungi" element={<Fungi />} />
            <Route path="/plantae" element={<Plantae />} />
            <Route path="/Animalia" element={<Animalia />} />
            <Route path="/quiz" element={<Quiz />} />
           

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
