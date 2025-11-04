
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryChangeHandler = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    props.onFilterChange({ category: newCategory }); 
  };
  
  const categories = ['All', 'Food', 'Travel', 'Utilities', 'Entertainment', 'Other'];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Category</label>
        <select value={selectedCategory} onChange={categoryChangeHandler}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <ExpenseSummary expenses={props.filteredExpenses} /> 
      
    </div>
  );
};

export default ExpenseFilter;