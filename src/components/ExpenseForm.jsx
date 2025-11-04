import React, { useState } from 'react';
import '../assets/styles/ExpenseForm.css'; 

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
   
    event.preventDefault(); 
    if (!enteredAmount || !enteredCategory || !enteredDate) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    const expenseData = {
      amount: parseFloat(enteredAmount), 
      category: enteredCategory,
      date: new Date(enteredDate), 
      id: crypto.randomUUID(), 
    };
    props.onAddExpense(expenseData);
    setEnteredAmount('');
    setEnteredCategory('');
    setEnteredDate('');
  };

  return (
    
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label>Amount</label>
        <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          value={enteredAmount} 
          onChange={amountChangeHandler} 
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <input 
          type="text" 
          value={enteredCategory} 
          onChange={categoryChangeHandler} 
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input 
          type="date" 
          min="2023-01-01" 
          max="2025-12-31" 
          value={enteredDate} 
          onChange={dateChangeHandler} 
        />
      </div>
      <div className="form-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;