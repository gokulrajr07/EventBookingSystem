import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
