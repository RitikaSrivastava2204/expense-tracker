
import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Expense Tracker</h1>
      
      <ul className="navbar-links">
        <li>  
          <Link to="/">Home</Link>
        </li>
        <li>   
          <Link to="/expenses">Expenses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;