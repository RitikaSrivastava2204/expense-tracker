// src/App.jsx

import React from 'react';
// 1. Import Routes and Route
import { Routes, Route } from 'react-router-dom';

// Import your components and pages
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage'; // 2. Import the new page
import './assets/styles/App.css'; 

function App() {
  return (
    <div>
      <Navbar /> 
      
      <div className="app-container">
        {/* 3. Set up your routes */}
        <Routes>
          {/* When the path is "/", show the HomePage */}
          <Route path="/" element={<HomePage />} />
 
          {/* When the path is "/my-expenses", show the MyExpensesPage */}
          <Route path="/expenses" element={<ExpensesPage />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;