// src/pages/ExpensesPage.jsx

import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList'; 
import ExpenseFilter from '../components/ExpenseFilter'; 
// 👇 Imports data and filtering function from the service file
import { DUMMY_EXPENSES, filterExpenses } from '../services/ExpenseService'; 

/**
 * Main page component responsible for managing the central expenses state 
 * and orchestrating data flow between the form, filter, and list components.
 */
const ExpensesPage = () => {
  // State is initialized with data from the service file
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 
  // State for the current category filter
  const [filters, setFilters] = useState({ category: 'All' }); 

  // Handler for adding new expenses (Passed to ExpenseForm)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // Logic for adding a new item
      return [expense, ...prevExpenses];
    });
  };

  // Handler for deleting expenses (Passed to ExpenseList)
  const deleteItemHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      // Logic for removing an item
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== expenseId);
      return updatedExpenses;
    });
  };
  
  // Handler for receiving filter changes (Passed to ExpenseFilter)
  const filterChangeHandler = (newFilters) => {
    setFilters(newFilters);
  };
  
  // Filtering logic is now handled by the imported function
  const filteredExpenses = filterExpenses(expenses, filters);

  return (
    <div>
      <h2>Add New Expense</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} /> 
      {/* ExpenseFilter displays category selector and the total summary */}
      <ExpenseFilter 
        onFilterChange={filterChangeHandler} 
        filteredExpenses={filteredExpenses} // Pass filtered list for summary calculation
      />
      
      {/* ExpenseList displays the actual filtered items */}
      <ExpenseList 
        items={filteredExpenses} 
        onDeleteItem={deleteItemHandler} 
      /> 
    </div>
  );
};

export default ExpensesPage;