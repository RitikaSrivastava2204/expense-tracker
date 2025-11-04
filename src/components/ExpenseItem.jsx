import React from 'react';
import '../assets/styles/ExpenseItem.css'; 

/**
 * Renders a single expense item.
 * @param {Object} props - Component props
 * @param {number} props.amount - The expense amount
 * @param {string} props.category - The expense category
 * @param {Date} props.date - The date of the expense
 * @param {string} props.id - The unique ID of the expense (NEW)
 * @param {function(string): void} props.onDelete - Function to call when deleting (NEW)
 */

const ExpenseItem = (props) => {
  const formattedDate = props.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const deleteHandler = () => {
    props.onDelete(props.id); 
  };

  return (
    <li className="expense-item">
      <div className="expense-item__date">{formattedDate}</div>
      <div className="expense-item__description">
        <h3 className="expense-item__category">{props.category}</h3>
        <div className="expense-item__price">Rs. {props.amount.toFixed(2)}</div>
        
        <button 
          className="delete-button" 
          onClick={deleteHandler}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;