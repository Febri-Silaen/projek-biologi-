import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      alert('Mohon masukkan email dan password Anda');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Email yang Anda masukkan tidak valid');
      return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
   
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
    
      alert('Login berhasil!');
      navigate('/home');
    } else {
      alert('Email atau password salah. Silakan cek kembali.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Harap isi semua kolom');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Email yang Anda masukkan tidak valid');
      return;
    }

    if (password !== confirmPassword) {
      alert('Konfirmasi kata sandi tidak cocok');
      return;
    }

    if (!isStrongPassword(password)) {
      alert('Kata sandi harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka');
      return;
    }

    
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert('Email sudah terdaftar. Silakan gunakan email lain.');
      return;
    }

    
    const newUser = {
      firstName,
      lastName,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));


    alert('Registrasi berhasil! Silahkan login.');
    setIsLogin(true);
    
  
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleGoogleLogin = () => {
    window.open('https://accounts.google.com/signin', '_blank');
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
                  <a 
                    href="https://accounts.google.com/signin/recovery" 
                    className="page-link-label" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Lupa password?
                  </a>
                </p>
                <button type="submit" className="form-btn">Log in</button>
              </form>
              <p className="sign-up-label">
                Belum memiliki akun?{' '}
                <span 
                  className="sign-up-link" 
                  onClick={() => setIsLogin(false)}
                >
                  Daftar Akun
                </span>
              </p>
              <div className="buttons-container">
                <div className="google-login-button" onClick={handleGoogleLogin}>
                  <FaGoogle className="google-icon" />
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

export default Login;

