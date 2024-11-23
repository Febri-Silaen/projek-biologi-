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

  const handleLogin = (e) => {
    e.preventDefault();
 
    if (email && password) {
      
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

    if (firstName && lastName && email && password) {
     
      navigate('/home');
    } else {
      alert('Harap isi semua kolom');
    }
  };

 
  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
  };

  return (
    <div className="form-container">
      {isLogin ? (
        <>
          <p className="title">Selamat Datang</p>
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
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                  c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                  C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
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
              <span>Password</span>
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
              <span>Konfirmasi Password</span>
            </label>
            <button type="submit" className="submit">Daftar</button>
            <p className="signin">
              Sudah memiliki akun? 
              <Link 
                to="/login"
                style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}
              >
                Login
              </Link>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
