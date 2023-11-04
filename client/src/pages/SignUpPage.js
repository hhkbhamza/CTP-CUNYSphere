import React, { useState } from 'react';

function SignUpPage() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    college: '' // Added for college selection
  });

  // A list of CUNY colleges for the dropdown menu
  const cunyColleges = [
    "Baruch College",
    "Brooklyn College",
    "City College",
    "College of Staten Island",
    "Hunter College",
    "John Jay College of Criminal Justice",
    // Add all other colleges
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the form
    console.log('Signing up with these details:', userDetails);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="email"
          type="email" 
          value={userDetails.email} 
          onChange={handleChange} 
          placeholder="Email" 
          required 
        />
        <input 
          name="password"
          type="password" 
          value={userDetails.password} 
          onChange={handleChange} 
          placeholder="Password" 
          required 
        />
        <select 
          name="college"
          value={userDetails.college}
          onChange={handleChange}
          required
        >
          <option value="">Select your college</option>
          {cunyColleges.map((college) => (
            <option key={college} value={college}>{college}</option>
          ))}
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;