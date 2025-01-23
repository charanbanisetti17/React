import React, { useState } from 'react';
import './Form.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic here
    console.log('Signed up with', email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="form-input"
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="form-input"
        required
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        className="form-input"
        required
      />
      <button type="submit" className="form-btn">Sign Up</button>
    </form>
  );
}

export default SignupForm;