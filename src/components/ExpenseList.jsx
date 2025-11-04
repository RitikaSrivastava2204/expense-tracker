import React from 'react';
import ExpenseItem from './ExpenseItem'; 
import '../assets/styles/ExpenseList.css'; 

/**
 * Renders a list of ExpenseItem components.
 * @param {Object} props - Component props
 * @param {Array<Object>} props.items - Array of expense objects
 * @param {function(string): void} props.onDeleteItem - Function to delete item (NEW)
 */
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p style={{ textAlign: 'center', color: '#777' }}>No expenses found. Start adding some!</p>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          id={expense.id} 
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
          onDelete={props.onDeleteItem} 
        />
      ))}
    </ul>
  );
};

export default ExpenseList;