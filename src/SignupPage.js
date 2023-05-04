import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppNav from './AppNav';
import Footer from './Footer';
import './App.css';
import "./SignupStyle.css";


export default function SignupPage() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside submit form");
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            console.log("inside else"+name);
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
          </div>
        );
      };
     
      // Showing error message if error is true
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };
 return (
  <div className="Site">
    <div className="form">
       <AppNav />
       <div className="Home-image"></div>
       <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
        <br></br>
        <br></br>
        <button onClick={handleSubmit} className="btn-primary" type="submit">
          Submit
        </button>
       
      </form>
     
    </div>
    <Footer />
  </div>
    
  );
}
