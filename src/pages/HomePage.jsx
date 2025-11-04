import React from 'react';
import '../assets/styles/HomePage.css'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="simple-home">
      <h1>Expense Tracker</h1>
      <p>This is a minimal, clean, and efficient Expense Tracker application built 
        as an assignment for Penthara Technologies. This project demonstrates 
        several key modern frontend concepts, including: 
        Component-Based Architecture, React Hooks, React Router DOM for page navigation, and 
        adherence to Best Practices for file structure and naming conventions.</p>
      <Link to="/expenses"> <button>Get Started</button></Link>
    </div>
  );
};

export default HomePage;