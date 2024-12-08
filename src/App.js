import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Keanekaragaman from './pages/Keanekaragaman';
import Virus from './pages/Virus';
import Fungi from './pages/Fungi';
import Plantae from './pages/Plantae';
import Animalia from './pages/Animalia';
import Quiz from './pages/Quiz';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Zygomycota from './pages/klasifikasi/Zygomycota';
import Ascomycota from './pages/klasifikasi/Ascomycota';
import Basidiomycota from './pages/klasifikasi/Basidiomycota';
import Deuteromycota from './pages/klasifikasi/Deuteromycota';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/keanekaragaman" 
            element={
              <ProtectedRoute>
                <Keanekaragaman />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/virus" 
            element={
              <ProtectedRoute>
                <Virus />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/fungi" 
            element={
              <ProtectedRoute>
                <Fungi />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/plantae" 
            element={
              <ProtectedRoute>
                <Plantae />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Animalia" 
            element={
              <ProtectedRoute>
                <Animalia />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/quiz" 
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/zygomycota" 
            element={
              <ProtectedRoute>
                <Zygomycota />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/ascomycota" 
            element={
              <ProtectedRoute>
                <Ascomycota />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/basidiomycota" 
            element={
              <ProtectedRoute>
                <Basidiomycota />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/deuteromycota" 
            element={
              <ProtectedRoute>
                <Deuteromycota />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

