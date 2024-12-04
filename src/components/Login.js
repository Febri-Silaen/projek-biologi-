import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  
  
  const isValidEmail = (email) => {
    return email.includes('@') && email.endsWith('@gmail.com');
  };

  const handleLogin = (e) => {
    e.preventDefault();
 
    if (email && password) {
      
      if (!isValidEmail(email)) {
        alert('Email harus menggunakan @gmail.com');
        return;
      }
      navigate('/keanekaragaman');
    } else {
      alert('Mohon masukkan password dan email anda');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Kata sandi tidak cocok');
      return;
    }

    
    if (!isValidEmail(email)) {
      alert('Email harus menggunakan @gmail.com');
      return;
    }

    if (firstName && lastName && email && password) {
     
      setIsLogin(true);
     
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      alert('Registrasi berhasil! Silahkan login.');
    } else {
      alert('Harap isi semua kolom');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
  };

  return (
    <div className="login-container">
      <div className="login-content">
     
        <div className="info-section">
          <h2>Selamat Datang di Website SiBisuk</h2>
          <p>
            Silahkan login untuk mendapatkan informasi lebih banyak lagi 
            seputar SiBisuk Marbiologi. Website kami menyediakan berbagai 
            informasi dan resources terkait keanekaragaman hayati.
          </p>
        </div>

       
        <div className="form-container">
          {isLogin ? (
            <>
              <p className="title">Selamat Datang di Sibisuk</p>
              <form className="form" onSubmit={handleLogin}>
                <input 
                  type="email" 
                  className="input" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input 
                  type="password" 
                  className="input" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="page-link">
                  <Link to="https://mail.google.com/mail/u/0/#inbox" className="page-link-label">Lupa password?</Link>
                </p>
                <button type="submit" className="form-btn">Log in</button>
              </form>
              <p className="sign-up-label">
                Belum memiliki akun?
                <span 
                  className="sign-up-link" 
                  onClick={() => setIsLogin(false)}
                >
                  Daftar Akun
                </span>
              </p>
              <div className="buttons-container">
                <div className="google-login-button" onClick={handleGoogleLogin}>
                 
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    version="1.1" 
                    x="0px" 
                    y="0px" 
                    className="google-icon" 
                    viewBox="0 0 48 48" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  
                  </svg>
                  <span>Login Menggunakan Akun Google</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="title">Daftar Akun</p>
              <p className="message">Daftar sekarang dan dapatkan akses penuh ke aplikasi kami.</p>
              <form className="form" onSubmit={handleRegister}>
                <div className="flex">
                  <label>
                    <input 
                      required 
                      placeholder="" 
                      type="text" 
                      className="input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span>Nama Depan</span>
                  </label>

                  <label>
                    <input 
                      required 
                      placeholder="" 
                      type="text" 
                      className="input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <span>Nama Belakang</span>
                  </label>
                </div>  
                        
                <label>
                  <input 
                    required 
                    placeholder="" 
                    type="email" 
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>Email</span>
                </label> 
                    
                <label>
                  <input 
                    required 
                    placeholder="" 
                    type="password" 
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span>Sandi</span>
                </label>
                <label>
                  <input 
                    required 
                    placeholder="" 
                    type="password" 
                    className="input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span>Konfirmasi Sandi</span>
                </label>
                <button type="submit" className="submit">Daftar</button>
                <p className="signin">
                  Sudah memiliki akun? 
                  <span 
                    style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
