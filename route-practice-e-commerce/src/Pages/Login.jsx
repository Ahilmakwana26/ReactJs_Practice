import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  let navigate = useNavigate();

  const handleDashboard = (e) =>{
     e.preventDefault();
     navigate('/dashboard');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px' }} className="card">
      <h2 className='mb-3'>Login</h2>
      <form onSubmit={handleDashboard} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="email" placeholder="Email" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  );
}