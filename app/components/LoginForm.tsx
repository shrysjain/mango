import React, { useState } from 'react';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      alert('User logged in successfully!');
    } catch (error) {
      console.error('Failed to log in user:', error);
      alert('Failed to log in user');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
