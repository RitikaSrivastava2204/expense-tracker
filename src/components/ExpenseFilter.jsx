// src/components/ExpenseFilter.jsx

import React, { useState } from 'react';
import ExpenseSummary from './ExpenseSummary'; // 👈 NEW: Import the summary
import '../assets/styles/ExpenseFilter.css'; 

/**
 * Component for filtering expenses by category and displaying the total.
 * @param {Object} props - Component props
 * @param {function(Object): void} props.onFilterChange - Function to pass the selected category to the parent.
 * @param {Array<Object>} props.filteredExpenses - The list of expenses to calculate the total from. (NEW PROP)
 */
const ExpenseFilter = (props) => {
  // We only track the category now
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryChangeHandler = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    // Pass only the category back up
    props.onFilterChange({ category: newCategory }); 
  };
  
  const categories = ['All', 'Food', 'Travel', 'Utilities', 'Entertainment', 'Other'];

  return (
    <div className="expenses-filter">
      
      {/* 1. Category Filter Control (remains the same) */}
      <div className="expenses-filter__control">
        <label>Filter by Category</label>
        <select value={selectedCategory} onChange={categoryChangeHandler}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {/* 2. Add the Summary Component here */}
      <ExpenseSummary expenses={props.filteredExpenses} /> 
      
    </div>
  );
};

export default ExpenseFilter;