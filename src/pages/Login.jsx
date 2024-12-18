import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Data = [
  {
    email: 'kuralarasu@gmail.com',
    password: '1234'
  },
  {
    email: 'asfaq@gmail.com',
    password: '12345'  
  }
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = Data.find(user => user.email === email && user.password === password);
    
    if (user) {
      console.log('Login successful');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button bg-danger">Login</button>

        <div className="forgot-password">
          <Link to="/forgot" className='text-dark'>Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
