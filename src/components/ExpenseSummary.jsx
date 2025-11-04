// src/components/ExpenseSummary.jsx

import React from 'react';
import '../assets/styles/ExpenseSummary.css'; 

/**
 * Calculates and displays the total amount of the filtered expenses.
 * @param {Object} props - Component props
 * @param {Array<Object>} props.expenses - The currently filtered list of expense objects.
 */
const ExpenseSummary = (props) => {
  // 1. Calculate the total expense amount
  const total = props.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // 2. Format the total to a currency string
  const formattedTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR', // Assuming USD currency
  });

  return (
    <div className="expense-summary">
      <h3 className="summary-title">Category Total</h3>
      <div className="summary-amount">{formattedTotal}</div>
    </div>
  );
};

export default ExpenseSummary;