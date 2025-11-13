import React, { useState } from 'react';
import './form.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [IDNO, setIDNO] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <div className="form-container">
      <h2>Cleaner Registration</h2>
      <form>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

         <label>ID Number</label>
        <input
          type="integer"
          placeholder="Enter your ID number"
          value={IDNO}
          onChange={(e) => setIDNO(e.target.value)}
        />


        <label>Location</label>
        <input
          type="text"
          placeholder="Your city or area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Cleaning Skills</label>
        <textarea
          placeholder="Describe your experience and skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;