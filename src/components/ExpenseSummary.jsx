import React from 'react';
import '../assets/styles/ExpenseSummary.css'; 

/**
 * Calculates and displays the total amount of the filtered expenses.
 * @param {Object} props - Component props
 * @param {Array<Object>} props.expenses - The currently filtered list of expense objects.
 */
const ExpenseSummary = (props) => {
  const total = props.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const formattedTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div className="expense-summary">
      <h3 className="summary-title">Category Total</h3>
      <div className="summary-amount">{formattedTotal}</div>
    </div>
  );
};

export default ExpenseSummary;