import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      console.log(response.data);
      // Handle login success, redirect to dashboard or store user data in context/state
    } catch (error) {
      console.error("Login failed", error.response.data);
      // Handle error, show error message
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;